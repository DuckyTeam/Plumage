import { Config } from '@stencil/core';
import { sass as sassStencilPlugin } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import * as fs from 'fs';
import * as sass from 'sass';
import { pathToFileURL } from 'url';
import { sync } from 'fast-glob';

export const config: Config = {
  namespace: 'plmg',
  globalStyle: 'src/global.scss',
  plugins: [sassStencilPlugin()],
  buildEs5: 'prod',
  extras: {
    experimentalImportInjection: true,
  },
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ducky/plumage',
      proxiesFile: '../component-library-react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'custom',
      name: 'custom-css-library',
      generator: async (
        config: Config,
        compilerCtx: any,
        buildCtx: any,
        docs: any
      ) => {
        let { srcDir, rootDir } = config as any;
        if (!(rootDir as string).endsWith('/')) rootDir += '/';
        const destinationFolder = new URL('dist/css/', pathToFileURL(rootDir));
        fs.mkdirSync(destinationFolder, { recursive: true });
        const defaultStyleFileWriteableStream = fs.createWriteStream(
          new URL('default.css', destinationFolder),
          { flags: 'a' }
        );
        const sassFiles = sync('**/*.scss', {
          cwd: srcDir,
          absolute: true,
          onlyFiles: true,
          unique: true,
          objectMode: true,
        });

        sassFiles.forEach((fileEntry) => {
          const transformed = sass.compile(fileEntry.path, {
            importers: [
              {
                // An importer that redirects relative URLs starting with "~" to
                // `node_modules`.
                findFileUrl(url) {
                  if (!url.startsWith('~')) return null;
                  return new URL(
                    url.substring(1),
                    pathToFileURL('node_modules/')
                  );
                },
              },
            ],
          });
          const destUrl = new URL(
            fileEntry.name.replace('.scss', '.css'),
            destinationFolder
          );
          fs.writeFileSync(destUrl, transformed.css, { encoding: 'utf-8' });
          defaultStyleFileWriteableStream.write(
            transformed.css + '\n',
            'utf-8'
          );
        });
        defaultStyleFileWriteableStream.end();
      },
    },
  ],
};
