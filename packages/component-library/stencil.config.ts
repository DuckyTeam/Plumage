import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'plmg',
  globalStyle: 'src/tokens/main.css',
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
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
