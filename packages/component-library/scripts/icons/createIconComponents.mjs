import fse from 'fs-extra';
import path from 'path';
import rimraf from 'rimraf';
import Queue from './waterfall/Queue.mjs';
import globAsync from 'fast-glob';
import * as svgo from 'svgo';
import generateIconEnum from './generateIconEnum.mjs';

const singleDigitNumbers = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];
const twoDigitNumbers1 = [
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];

export default function getCamelCase(svgPathObj) {
  let fileName = svgPathObj.base;

  fileName = fileName
    .replace(/_outlined_([0-9]+)px\.svg/, '')
    .replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());

  if (fileName.startsWith('3dRotation')) {
    return `ThreeD${fileName.slice(2)}`;
  }

  if (fileName.startsWith('3p')) {
    return `ThreeP${fileName.slice(2)}`;
  }

  if (fileName.startsWith('30fps')) {
    return `ThirtyFps${fileName.slice(5)}`;
  }
  if (fileName.startsWith('60fps')) {
    return `SixtyFps${fileName.slice(5)}`;
  }
  if (fileName.startsWith('360')) {
    return `ThreeSixty${fileName.slice(3)}`;
  }

  if (fileName.startsWith('123')) {
    return `OneTwoThree${fileName.slice(3)}`;
  }

  if (fileName.startsWith('6Ft')) {
    return `SixFeet${fileName.slice(3)}`;
  }

  if (/^\dk/.test(fileName)) {
    return `${singleDigitNumbers[fileName[0]]}K${fileName.slice(2)}`;
  }

  if (/^1\dk/.test(fileName)) {
    return `${twoDigitNumbers1[fileName[1]]}K${fileName.slice(3)}`;
  }

  if (/^\dmp/.test(fileName)) {
    return `${singleDigitNumbers[fileName[0]]}M${fileName.slice(2)}`;
  }
  if (/^1\dmp/.test(fileName)) {
    return `${twoDigitNumbers1[fileName[1]]}M${fileName.slice(3)}`;
  }
  if (/^2\dmp/.test(fileName)) {
    return `Twenty${singleDigitNumbers[fileName[1]]}M${fileName.slice(3)}`;
  }

  if (fileName.startsWith('1x')) {
    return `TimesOne${fileName.slice(2)}`;
  }

  if (fileName.startsWith('3g')) {
    return `ThreeG${fileName.slice(2)}`;
  }
  if (fileName.startsWith('4g')) {
    return `FourG${fileName.slice(2)}`;
  }
  if (fileName.startsWith('5g')) {
    return `FiveG${fileName.slice(2)}`;
  }

  return fileName;
}

/**
 * Converts directory separators to slashes, so the path can be used in fast-glob.
 * @param {string} pathToNormalize
 * @returns
 */
function normalizePath(pathToNormalize) {
  return pathToNormalize.replace(/\\/g, '/');
}

export function cleanPaths({ svgPath, data, name }) {
  // Remove hardcoded color fill before optimizing so that empty groups are removed
  const input = data
    .replace(/ fill="#010101"/g, '')
    .replace(/<rect fill="none" width="24" height="24"\/>/g, '')
    .replace(/<rect id="SVGID_1_" width="24" height="24"\/>/g, '');

  const optimized = svgo.optimize(input, {
    floatPrecision: 4,
    multipass: true,
    plugins: [
      { name: 'cleanupAttrs' },
      { name: 'removeDoctype' },
      { name: 'removeXMLProcInst' },
      { name: 'removeComments' },
      { name: 'removeMetadata' },
      { name: 'removeTitle' },
      { name: 'removeDesc' },
      { name: 'removeUselessDefs' },
      { name: 'removeXMLNS' },
      { name: 'removeEditorsNSData' },
      { name: 'removeEmptyAttrs' },
      { name: 'removeHiddenElems' },
      { name: 'removeEmptyText' },
      { name: 'removeViewBox' },
      { name: 'cleanupEnableBackground' },
      { name: 'minifyStyles' },
      { name: 'convertStyleToAttrs' },
      { name: 'convertColors' },
      { name: 'convertPathData' },
      { name: 'convertTransform' },
      { name: 'removeUnknownsAndDefaults' },
      { name: 'removeNonInheritableGroupAttrs' },
      {
        name: 'removeUselessStrokeAndFill',
        params: {
          // https://github.com/svg/svgo/issues/727#issuecomment-303115276
          removeNone: true,
        },
      },
      { name: 'removeUnusedNS' },
      { name: 'cleanupIDs' },
      { name: 'cleanupNumericValues' },
      { name: 'cleanupListOfValues' },
      { name: 'moveElemsAttrsToGroup' },
      { name: 'moveGroupAttrsToElems' },
      { name: 'collapseGroups' },
      { name: 'removeRasterImages' },
      { name: 'mergePaths' },
      { name: 'convertShapeToPath' },
      { name: 'sortAttrs' },
      { name: 'removeDimensions' },
      { name: 'removeElementsByAttr' },
      { name: 'removeStyleElement' },
      { name: 'removeScriptElement' },
      { name: 'removeEmptyContainers' },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            { id: name },
            { height: '1em' },
            { width: '1em' },
            { fill: 'currentColor' },
          ],
        },
      },
    ],
  });

  if (optimized.error) {
    throw new Error(optimized.error);
  }

  return optimized.data;
}

async function worker({ progress, svgPath, options }) {
  progress();

  const svgPathObj = path.parse(path.normalize(svgPath));

  const camelCaseName = getCamelCase(svgPathObj);

  const name = camelCaseName[0].toLowerCase() + camelCaseName.slice(1);

  const data = await fse.readFile(svgPath, { encoding: 'utf8' });
  const paths = cleanPaths({ svgPath, data, name });

  await fse.writeFile(path.join(options.outputDir, `${name}.svg`), paths);
}

export async function handler(options) {
  const progress = options.disableLog
    ? () => {}
    : () => process.stdout.write('.');

  rimraf.sync(`${options.outputDir}/*`); // Clean old files

  await fse.ensureDir(options.outputDir);

  const svgPaths = await globAsync(
    normalizePath(path.join(options.svgDir, options.glob))
  );

  const queue = new Queue(
    (svgPath) =>
      worker({
        progress,
        svgPath,
        options,
      }),
    { concurrency: 8 }
  );

  queue.push(svgPaths);

  await queue.wait({ empty: true });
}

await handler({
  disableLog: false,
  outputDir: path.join('scripts', 'icons', 'cleaned-icons'),
  svgDir: path.join('scripts', 'icons', 'material-icons'),
  glob: '*',
});

await generateIconEnum();
