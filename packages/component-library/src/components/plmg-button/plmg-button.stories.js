import * as Utils from '../../stories/StencilStorybookUtils';
import { designs, sizes, colors } from './plmg-button.types';

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
  text: 'Button',
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
  let htmlContent = '';
  designs.forEach((design) => {
    htmlContent += `
<div style="flex: 0 0 20%">
<plmg-button design="${design}">${design}</plmg-button>
</div>`;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  el.style.display = 'flex';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllDesigns.storyName = 'All designs';

export const AllSizes = (args) => {
  let htmlContent = '';
  sizes.forEach((size) => {
    htmlContent += `
<div style="flex: 0 0 20%">
<plmg-button size="${size}">${size}</plmg-button>
</div>`;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  el.style.display = 'flex';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllSizes.storyName = 'All sizes';

export const AllColors = (args) => {
  let htmlContent = '';
  colors.forEach((color) => {
    htmlContent += `
<div style="flex: 0 0 20%">
<plmg-button color="${color}">${color}</plmg-button>
</div>`;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  el.style.display = 'flex';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllColors.storyName = 'All colors';

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
<plmg-button design="${design}" size="${size}" color="${color}" fullWidth="${fullWidth}" shadow="${shadow}" >
    design="${design}" size="${size}" color="${color}" fullWidth="${fullWidth}" shadow="${shadow}"
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
