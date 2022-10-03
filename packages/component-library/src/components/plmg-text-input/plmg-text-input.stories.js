import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes, types } from './plmg-text-input.types';

export default {
  title: 'Component/TextInput',
  parameters: {},
  decorators: [],
  argTypes: {
    ['auto-complete']: {
      control: { type: 'text' },
    },
    disabled: { control: { type: 'boolean' } },
    ['error-message']: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    max: {
      control: { type: 'number' },
    },
    ['max-length']: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    ['min-length']: {
      control: { type: 'number' },
    },
    name: {
      control: { type: 'text' },
    },
    pattern: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    ['show-label']: {
      control: { type: 'boolean' },
    },
    ['read-only']: { control: { type: 'boolean' } },
    required: {
      control: { type: 'boolean' },
    },
    tip: {
      control: { type: 'text' },
    },
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      control: { type: 'select' },
    },
    value: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'number' },
    },
  },
};

const PROPS = [
  'disabled',
  'error-message',
  'label',
  'max-length',
  'max',
  'min-length',
  'min',
  'name',
  'pattern',
  'placeholder',
  'read-only',
  'required',
  'show-label',
  'size',
  'step',
  'tip',
  'type',
  'value',
  'width',
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
  disabled: false,
  ['error-message']: '',
  label: 'Text Input',
  ['min-length']: '',
  ['max-length']: '',
  name: '',
  placeholder: '',
  ['read-only']: false,
  required: false,
  size: 'medium',
  ['show-label']: true,
  tip: '',
  value: '',
  width: '',
};
Primary.argTypes = {
  ['min']: { control: { disable: true } },
  ['max']: { control: { disable: true } },
  ['step']: { control: { disable: true } },
};

export const disabled = Template.bind({});
disabled.storyName = 'Disabled';
disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const errorMessage = Template.bind({});
errorMessage.storyName = 'Error';
errorMessage.args = {
  label: 'Error Message',
  ['error-message']: 'This is an error message',
};

export const Label = Template.bind({});
Label.storyName = 'Label';
Label.args = {
  label: 'Show Label',
  ['show-label']: true,
};

export const number = Template.bind({});
number.storyName = 'Number';
number.args = {
  label: 'Number',
  size: 'large',
  min: 0,
  max: 100,
  step: 1,
  type: 'number',
};
number.argTypes = {
  type: { control: { disable: true } },
  ['max-length']: { control: { disable: true } },
  ['min-length']: { control: { disable: true } },
};

export const readOnly = Template.bind({});
readOnly.storyName = 'Read Only';
readOnly.args = {
  label: 'Read Only',
  ['read-only']: true,
  value: 'Cannot be edited, but can be copied',
};

export const placeholder = Template.bind({});
placeholder.storyName = 'Placeholder';
placeholder.args = {
  label: 'With Placeholder',
  placeholder: 'Placeholder',
};

export const Sizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) => `<plmg-text-input size=${size} label=${size}></plmg-text-input>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';

  return el;
};
Sizes.storyName = 'Sizes';

export const Tip = Template.bind({});
Tip.storyName = 'Tip Text';
Tip.args = {
  label: 'Tip Text',
  ['show-label']: false,
  tip: 'Tip Text',
};

export const Types = (args) => {
  const values = {
    text: 'Ducky',
    password: '2^pre9G9#ssV',
    email: 'info@ducky.eco',
    number: 42,
    search: 'ducky',
    tel: '12345678',
    url: 'https://ducky.eco',
  };

  const htmlContent = types
    .map(
      (type) =>
        `<plmg-text-input type=${type} value=${values[type]} label=${type}></plmg-text-input>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gridTemplateColumns = 'repeat(3, 1fr)';
  el.style.gap = '1rem';
  el.style.justifyContent = 'space-between';

  return el;
};

Types.storyName = 'Types';

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
