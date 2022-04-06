import * as Utils from '../../stories/StencilStorybookUtils';
import { designs, sizes, colors } from './plmg-button.types';
import { ICON } from '../plmg-svg-icon/icon.enum';

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
    ['icon-left']: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
    ['icon-center']: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
    ['icon-right']: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
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
  'icon-left',
  'icon-center',
  'icon-right',
  'label',
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
  ['icon-left']: '',
  ['icon-right']: '',
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
  ['icon-left']: 'arrowBack',
  ['icon-right']: '',
};

export const Icon = Template.bind({});
Icon.storyName = 'Icon center';
Icon.args = {
  design: 'filled',
  size: 'medium',
  color: 'primary',
  ['full-width']: false,
  ['shadow']: false,
  ['icon-center']: 'image',
  label: 'example button',
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

export const AllIcons = (args) => {
  const htmlContent = `
<plmg-button icon-left="arrowBack">Icon left</plmg-button>
<plmg-button icon-right="arrowForward">Icon right</plmg-button>
<plmg-button icon-center="image" label="example button"></plmg-button>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllIcons.storyName = 'All icons';

export const All = (args) => {
  const fullWidthValues = [true, false];
  const shadowValues = [true, false];
  const leftIcons = ['', 'arrowBack'];
  const rightIcons = ['', 'arrowForward'];
  const centerIcons = [undefined, 'image'];
  // button type can be ignored since it does not impact the style

  let htmlContent = '';
  designs.forEach((design) => {
    sizes.forEach((size) => {
      colors.forEach((color) => {
        fullWidthValues.forEach((fullWidth) => {
          shadowValues.forEach((shadow) => {
            leftIcons.forEach((leftIcon) => {
              rightIcons.forEach((rightIcon) => {
                centerIcons.forEach((centerIcon) => {
                  if (centerIcon) {
                    htmlContent += `
<p>design="${design}" size="${size}" color="${color}" full-width="${fullWidth}" shadow="${shadow}" icon-left="${leftIcon}" icon-right="${rightIcon}" icon-center="${centerIcon} label=${centerIcon}"</p>
<plmg-button design="${design}" size="${size}" color="${color}" full-width="${fullWidth}" shadow="${shadow}" icon-left="${leftIcon}" icon-right="${rightIcon}" icon-center="${centerIcon}" label=${centerIcon}" >
</plmg-button>
<br/>
              `;
                  } else {
                    htmlContent += `
<plmg-button design="${design}" size="${size}" color="${color}" full-width="${fullWidth}" shadow="${shadow}" icon-left="${leftIcon}" icon-right="${rightIcon}" >
    design="${design}" size="${size}" color="${color}" full-width="${fullWidth}" shadow="${shadow}" icon-left="${leftIcon}" icon-right="${rightIcon}"
</plmg-button>
<br/>
              `;
                  }
                });
              });
            });
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
