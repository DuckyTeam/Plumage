import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-text-input.types';

export default {
  title: 'Component/TextInput',
  parameters: {},
  decorators: [],
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
    ['error-message']: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    filled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'boolean' },
    },
    ['label-text']: {
      control: { type: 'text' },
    },
    name: {
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
    type: {
      options: ['text', 'number'],
      control: { type: 'select' },
    },
  },
};

const PROPS = [
  'default',
  'error',
  'error-message',
  'filled',
  'label',
  'label-text',
  'name',
  'required',
  'tip',
  'tip-text',
  'type',
];

const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-text-input');
  Utils.bindProps(el, PROPS, args);
  // Utils.bindEvents(el, EVENTS, args);
  // Utils.bindStyles(el, CSS_VARS, args);
  // Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'TextInput';
Primary.args = {
  name: 'TextInput',
  size: 'medium',
};

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = {
  name: 'TextInput',
  error: true,
  ['error-message']: 'Error Message',
};

export const Filled = Template.bind({});
Filled.storyName = 'Filled';
Filled.args = {
  name: 'TextInput',
  filled: true,
  ['default']: 'Default',
};

export const Label = Template.bind({});
Label.storyName = 'Label';
Label.args = {
  name: 'TextInput',
  label: true,
  ['label-text']: 'Label Text',
};

export const TipText = Template.bind({});
TipText.storyName = 'TipText';
TipText.args = {
  name: 'TextInput',
  tip: true,
  ['tip-text']: 'Helpful Text',
};

export const Required = Template.bind({});
Required.storyName = 'Required';
Required.args = {
  name: 'TextInput',
  label: true,
  ['label-text']: 'Required',
  required: true,
};

export const AllVariations = (args) => {
  const filled = [true, false];
  const labels = [true, false];
  const tips = [true, false];
  const required = [true, false];

  let htmlContent = '';

  labels.forEach((label) => {
    tips.forEach((tip) => {
      htmlContent += `
      <plmg-text-input tip=${tip} tip-text='Helpful message' label="${label}" label-text="label"></plmg-text-input>
      `;
    });
  });

  // errors.forEach((error) => {
  //   labels.forEach((label) => {
  //     tip.forEach((tip) => {
  //       sizes.forEach((size) => {
  //         filled.forEach((fill) => {
  //           if (error) {
  //             htmlContent += `
  //   <plmg-text-input size="${size}" label label-text="${size}" tip tip-text="helpful message" error=${error} error-message="User, we have an error" filled="${fill}" default="filled"></plmg-text-input>`;
  //           } else {
  //             htmlContent += `
  //       <plmg-text-input size="${size}" filled="${fill}" default="${size}"></plmg-text-input>`;
  //           }
  //         });
  //       });
  //     });
  //   });
  // });

  console.log(htmlContent);
  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gap = '16px';
  el.style.gridTemplateColumns = 'repeat(6, 1fr)';
  el.style.gridTemplateRows = '100px';

  return el;
};

AllVariations.storyName = 'All variations';

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-text-input size="${size}" filled default="${size}"></plmg-text-input>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';

  return el;
};

AllSizes.storyName = 'All sizes';
