/* Generate enumeration of all icons that exists in Plumage */
/* Usage: npm run generate-icon-enum */

import fse from 'fs-extra';
import path from 'path';
import globAsync from 'fast-glob';

export default async function generateIconEnum() {
  const fileNames = await globAsync(
    path.resolve('scripts', 'icons', 'cleaned-icons', '*')
  );

  const namesFromDownloadedIcons = fileNames
    .map((dir) => dir.split('/').at(-1).replace('.svg', ''))
    .map((filename) => ({
      key: filename[0].toUpperCase() + filename.slice(1),
      value: filename,
    }))
    .map(({ key, value }) => `  ${key} = '${value}',`)
    .join('\n');

  const homemadeIcons = fse.readJsonSync(
    path.resolve('scripts', 'icons', 'homemadeIcons.json')
  );
  const namesFromHomemadeIcons = Object.keys(homemadeIcons)
    .map((key) => `  ${key} = '${homemadeIcons[key]}',`)
    .join('\n');
  const names = [
    namesFromDownloadedIcons,
    `  // Homemade icons`,
    namesFromHomemadeIcons,
  ].join('\n');

  const allIconsEnum = `export enum ICON {
${names}
}
`;
  await fse.writeFile(
    path.join('src', 'components', 'plmg-svg-icon', 'icon.enum.ts'),
    allIconsEnum
  );
}

await generateIconEnum();
