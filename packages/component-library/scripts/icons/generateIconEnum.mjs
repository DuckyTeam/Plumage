/* Generate enumeration of all icons that exists in Plumage */
/* Usage: npm run generate-icon-enum */

import fse from 'fs-extra';
import path from 'path';
import globAsync from 'fast-glob';

export default async function generateIconEnum() {
  const fileNames = await globAsync(
    path.resolve('scripts', 'icons', 'cleaned-icons', '*')
  );

  const names = fileNames
    .map((dir) => dir.split('/').at(-1).replace('.svg', ''))
    .map((filename) => ({
      key: filename[0].toUpperCase() + filename.slice(1),
      value: filename,
    }))
    .map(({ key, value }) => `  ${key} = '${value}',`)
    .join('\n');

  const res = `export enum ICON {
${names}
}
`;

  await fse.writeFile(
    path.join('src', 'components', 'plmg-svg-icon', 'icon.enum.ts'),
    res
  );
}

await generateIconEnum();
