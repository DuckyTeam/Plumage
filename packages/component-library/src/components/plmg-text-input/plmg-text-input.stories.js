import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes, types } from './plmg-text-input.types';

export default {
  title: 'Component/TextInput',
  parameters: {},
  decorators: [],
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    type: {
      options: ['text', 'number'],
      control: { type: 'select' },
    },
    name: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    step: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    ['default-value']: {
      control: { type: 'text' },
    },
    filled: {
      control: { type: 'boolean' },
    },
    ['tip-text']: {
      control: { type: 'text' },
    },
    ['tip-text-show']: {
      control: { type: 'boolean' },
    },
    ['error-message']: {
      control: { type: 'text' },
    },
  },
};

const PROPS = ['size', 'type'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-text-input');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'TextInput';
Primary.args = {
  name: 'TextInput',
  type: 'number',
  min: 0,
  max: 100,
  step: 1,
};

// export const All = (args) => {
//   let htmlContent = '';
//   someControls.forEach((control) => {
//     htmlContent += `
// <plmg-text-input control="${control}" >
//     control="${control}"
// </plmg-text-input>
// <br/>
//               `;
//   });

//   const el = document.createElement('div');
//   el.innerHTML = htmlContent.trim();
//   return el;
// };
// All.storyName = 'All variations';
