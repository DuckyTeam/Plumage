import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-text-input.types';

export default {
  title: 'Component/TextInput',
  parameters: {},
  decorators: [],
  argTypes: {
    default: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    ['error-message']: {
      control: { type: 'text' },
    },
    filled: {
      control: { type: 'boolean' },
    },
    ['label-visible']: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    ['tip-text']: {
      control: { type: 'text' },
    },
    ['tip']: {
      control: { type: 'boolean' },
    },
  },
};

const PROPS = [
  'default',
  'error',
  'error-message',
  'filled',
  'label-visible',
  'label',
  'required',
  'tip',
  'tip-text',
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
  size: 'medium',
  ['label-visible']: false,
  error: false,
  ['filled']: false,
  required: false,
  tip: false,
};

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-text-input size=${size} label=${size} size="${size}" label-filled default="${size}"></plmg-text-input>`
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

export const LabelVisible = Template.bind({});
LabelVisible.storyName = 'Label';
LabelVisible.args = {
  label: 'Label Visible',
  ['label-visible']: true,
};

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = {
  error: true,
  label: 'Error',
  ['error-message']: 'Error Message',
};

export const Filled = Template.bind({});
Filled.storyName = 'Filled';
Filled.args = {
  label: 'Filled',
  filled: true,
  ['default']: 'Default',
};

export const TipText = Template.bind({});
TipText.storyName = 'Tip Text';
TipText.args = {
  tip: true,
  label: 'Tip Text',
  ['tip-text']: 'Helpful Text',
};

export const Required = Template.bind({});
Required.storyName = 'Required';
Required.args = {
  ['label-visible']: true,
  label: 'Required',
  required: true,
};

export const AllOnSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-text-input filled=true required size=${size} error error-message="error" label="All On ${size}" tip tip-text="Helpful message" size=${size} label default="${size}"></plmg-text-input>`
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
AllOnSizes.storyName = 'All Controls On';

export const AllVariations = (args) => {
  const filled = [false, true];
  const LabelVisible = [false, true];
  const tips = [false, true];
  const required = [false, true];
  const size = ['medium', 'large'];

  let htmlContent = '';
  size.forEach((size) => {
    htmlContent += `<span>Label ${size}</span>`;
    LabelVisible.forEach((label) => {
      tips.forEach((tip) => {
        if (label)
          required.forEach((require) => {
            htmlContent += `
      <plmg-text-input size=${size} tip=${tip} required=${require} tip-text='Helpful message' label-visible=${label} label="Label "></plmg-text-input>
      `;
          });
        else
          htmlContent += `
      <plmg-text-input size=${size} tip=${tip} tip-text='Helpful message' label-visible=${label} label="Label"></plmg-text-input>
      `;
      });
    });

    htmlContent += `<span>Error ${size}</span>`;
    LabelVisible.forEach((label) => {
      tips.forEach((tip) => {
        if (label)
          required.forEach((require) => {
            htmlContent += `
      <plmg-text-input size=${size} error error-message='Error message' required=${require} tip=${tip} tip-text='Helpful message' label-visible=${label} label="Label"></plmg-text-input>
      `;
          });
        else
          htmlContent += `
      <plmg-text-input size=${size} error error-message='Error message' tip=${tip} tip-text='Helpful message' label-visible=${label} label="Label"></plmg-text-input>
      `;
      });
    });

    htmlContent += `<span>Filled ${size}</span>`;
    LabelVisible.forEach((label) => {
      tips.forEach((tip) => {
        if (label)
          required.forEach((require) => {
            htmlContent += `
      <plmg-text-input size=${size} filled default='filled' error-message='Error message' required=${require} tip=${tip} tip-text='Helpful message' label-visible=${label} label="Label"></plmg-text-input>
      `;
          });
        else
          htmlContent += `

      <plmg-text-input size=${size} filled default='filled' error-message='Error message' tip=${tip} tip-text='Helpful message' label-visible=${label} label="Label"></plmg-text-input>
      `;
      });
    });

    htmlContent += `<span>Filled Error ${size}</span>`;
    LabelVisible.forEach((label) => {
      tips.forEach((tip) => {
        if (label)
          required.forEach((require) => {
            htmlContent += `
      <plmg-text-input size=${size} error error-message='Error message' filled default='filled' error-message='Error message' required=${require} tip=${tip} tip-text='Helpful message' label-visible=${label} label="Label"></plmg-text-input>
      `;
          });
        else
          htmlContent += `
      <plmg-text-input size=${size} error error-message='Error message' filled default='filled' error-message='Error message' tip=${tip} tip-text='Helpful message' label-visible=${label} label="Label"></plmg-text-input>
      `;
      });
    });
  });

  const el = document.createElement('div');

  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gap = '8px';
  el.style.gridTemplateColumns = '50px repeat(6, 1fr)';
  el.style.gridTemplateRows = 'repeat(6, 180px)';

  return el;
};
AllVariations.storyName = 'All variations';
