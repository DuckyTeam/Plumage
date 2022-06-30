import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes, types } from './plmg-text-input.types';

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
    ['tip-text-show']: {
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
  'tip-text-show',
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
  ['tip-text']: 'Helpful Text',
};

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-text-input size="${size}" filled default="${size}"></plmg text-input>`
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
