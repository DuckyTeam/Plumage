/* Download icons from Material Icons and store them locally */
/* Usage: npm run download-icons */
/* Inspired by https://github.com/mui/material-ui/blob/20f6450209de399917e40e36468e97d056dc0c1d/packages/material-ui-icons/scripts/download.js */

import fetch from 'cross-fetch';
import fse from 'fs-extra';
import path from 'path';
import Queue from './waterfall/Queue.mjs';
import sleep from './waterfall/sleep.mjs';
import retry from './waterfall/retry.mjs';

async function downloadIcon(icon) {
  console.log(`downloadIcon ${icon.index}: ${icon.name}`);

  const response = await fetch(
    `https://fonts.gstatic.com/s/i/materialiconsoutlined/${icon.name}/v${icon.version}/24px.svg`
  );
  if (response.status !== 200) {
    throw new Error(`status ${response.status}`);
  }
  const SVG = await response.text();
  await fse.writeFile(
    path.join(
      'scripts',
      'icons',
      'material-icons',
      `${icon.name}_outlined_24px.svg`
    ),
    SVG
  );
}

async function run() {
  try {
    await fse.emptyDir(path.join('scripts', 'icons', 'material-icons'));
    const response = await fetch('https://fonts.google.com/metadata/icons');
    const text = await response.text();
    const data = JSON.parse(text.replace(")]}'", ''));
    const icons = data.icons.map((icon, index) => ({ index, ...icon }));

    console.log(`${icons.length} icons to download`);

    const queue = new Queue(
      async (icon) => {
        await retry(async ({ tries }) => {
          await sleep((tries - 1) * 100);
          await downloadIcon(icon);
        });
      },
      { concurrency: 7 }
    );
    queue.push(icons);
    await queue.wait({ empty: true });
  } catch (err) {
    console.log('err', err);
    throw err;
  }
}

await run();
