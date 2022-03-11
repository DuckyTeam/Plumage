import * as Utils from '../../stories/StencilStorybookUtils';
import { designs, sizes, colors } from './plmg-button.types';

const propToEnglish = (text) =>
  text.replace('-', ' ').replace(/^\w/, (c) => c.toUpperCase());

export default {
  title: 'Component/Button',
  parameters: {},
  decorators: [],
  argTypes: {
    design: {
      options: [
        'filled',
        'filled-round',
        'outline',
        'outline-round',
        'borderless',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large', 'extra-large'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'neutral', 'standout', 'danger'],
      control: { type: 'select' },
    },
    ['full-width']: {
      options: [true, false],
    },
    ['shadow']: {
      options: [true, false],
    },
  },
};

const PROPS = [
  'design',
  'size',
  'color',
  'full-width',
  'shadow',
  'href',
  'rel',
  'target',
];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['text'];

const Template = (args) => {
  const el = document.createElement('plmg-button');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Button';
Primary.args = {
  text: 'Label',
  design: 'filled',
  size: 'medium',
  color: 'primary',
  ['full-width']: false,
  ['shadow']: false,
};

export const Link = Template.bind({});
Link.storyName = 'Link';
Link.args = {
  text: 'Button as a link',
  design: 'filled',
  size: 'medium',
  color: 'primary',
  ['full-width']: false,
  ['shadow']: false,
  href: 'https://ducky.eco',
  rel: 'noopener noreferrer',
  target: '_blank',
};

export const AllDesigns = (args) => {
  const htmlContent = designs
    .map(
      (design) =>
        `<plmg-button design="${design}">${propToEnglish(design)}</plmg-button>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllDesigns.storyName = 'All designs';

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-button size="${size}">${propToEnglish(size)}</plmg-button>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllSizes.storyName = 'All sizes';

export const AllColors = (args) => {
  const htmlContent = colors
    .map(
      (color) =>
        `<plmg-button color="${color}">${propToEnglish(color)}</plmg-button>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllColors.storyName = 'All colors';

export const AllShadows = (args) => {
  const htmlContent = `<plmg-button shadow="${false}">No shadow</plmg-button>
<plmg-button shadow="${true}">With shadow</plmg-button>`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllShadows.storyName = 'All shadows';

export const AllFullWidth = (args) => {
  const htmlContent = `<plmg-button full-width="${false}">Fit content</plmg-button>
<br/>
<plmg-button full-width="${true}">Full width</plmg-button>`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllFullWidth.storyName = 'All fullWidth';

export const All = (args) => {
  const fullWidthValues = [true, false];
  const shadowValues = [true, false];
  // button type can be ignored since it does not impact the style

  let htmlContent = '';
  designs.forEach((design) => {
    sizes.forEach((size) => {
      colors.forEach((color) => {
        fullWidthValues.forEach((fullWidth) => {
          shadowValues.forEach((shadow) => {
            htmlContent += `
<plmg-button design="${design}" size="${size}" color="${color}" full-width="${fullWidth}" shadow="${shadow}" >
    design="${design}" size="${size}" color="${color}" full-width="${fullWidth}" shadow="${shadow}"
</plmg-button>
<br/>
              `;
          });
        });
      });
    });
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
All.storyName = 'All variations';
