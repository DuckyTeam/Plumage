import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-text-input.types';

export default {
  title: 'Component/TextInput',
  parameters: {},
  decorators: [],
  argTypes: {
    ['error-message']: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    ['show-label']: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    tip: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
  },
};

const PROPS = [
  'error-message',
  'show-label',
  'label',
  'required',
  'size',
  'tip',
  'value',
];

const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-text-input');
  Utils.bindProps(el, PROPS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Text Input';
Primary.args = {
  label: 'Text Input',
  ['error-message']: '',
  ['show-label']: false,
  required: false,
  value: '',
};

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-text-input size=${size} size=${size} label=${size}></plmg-text-input>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';

  return el;
};
AllSizes.storyName = 'All Sizes';

export const showLabel = Template.bind({});
showLabel.storyName = 'Label';
showLabel.args = {
  label: 'Show Label',
  ['show-label']: true,
};

export const errorMessage = Template.bind({});
errorMessage.storyName = 'Error';
errorMessage.args = {
  label: 'Error Message',
  ['error-message']: 'This is an error message',
};

export const Tip = Template.bind({});
Tip.storyName = 'Tip Text';
Tip.args = {
  label: 'Tip Text',
  ['show-label']: false,
  tip: 'Tip Text',
};

export const Required = Template.bind({});
Required.storyName = 'Required';
Required.args = {
  ['show-label']: true,
  label: 'Required',
  required: true,
};

export const AllOn = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-text-input size=${size} required size=${size} error-message='error message' label="All On ${size}" tip="Helpful message"></plmg-text-input>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.flexWrap = 'wrap';
  el.style.justifyContent = 'space-between';

  return el;
};
AllOn.storyName = 'All Controls On';

export const AllVariations = (args) => {
  const errorMessage = ['error-message', ''];
  const showLabels = [true, false];
  const tips = ['', 'helpful message'];
  const requireds = [false, true];
  const sizes = ['medium', 'large'];

  let htmlContent = '';
  htmlContent += `
  <span></span><span>Label</span><span>Required</span><span>Tip</span><span>Tip Required</span><span>No Label</span><span>No Label Tip</span>`;
  sizes.forEach((size) => {
    htmlContent += `
    <span>${size}</span>`;
    showLabels.forEach((showLabel) => {
      tips.forEach((tip) => {
        if (!showLabel) {
          htmlContent += `
      <plmg-text-input size=${size} tip="${tip}" show-label="${showLabel}" label="Label Name"></plmg-text-input>
      `;
        } else {
          requireds.forEach((required) => {
            htmlContent += `
        <plmg-text-input size=${size} tip="${tip}" required="${required}" show-label="${showLabel}" label="Label Name"></plmg-text-input>
        `;
          });
        }
      });
    });

    htmlContent += `<span>${size} error </span>`;
    showLabels.forEach((showLabel) => {
      tips.forEach((tip) => {
        if (!showLabel) {
          htmlContent += `
      <plmg-text-input size=${size} tip="${tip}" error-message='error-message' show-label="${showLabel}" label="Label Name"></plmg-text-input>
      `;
        } else {
          requireds.forEach((required) => {
            htmlContent += `
        <plmg-text-input size=${size} tip="${tip}" error-message='error-message' required="${required}" show-label="${showLabel}" label="Label Name"></plmg-text-input>
        `;
          });
        }
      });
    });
  });

  const el = document.createElement('div');

  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gap = '20px';
  el.style.gridTemplateColumns = '100px repeat(6, 1fr)';
  el.style.gridTemplateRows = '50px repeat(12, 150px)';

  return el;
};

AllVariations.storyName = 'All variations';
