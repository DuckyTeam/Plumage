import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/RadioButtonGroup',
  parameters: {},
  decorators: [],
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    ['required']: {
      options: [true, false],
    },
    ['error-message']: {
      control: { type: 'text' },
    },
    ['values']: {
      control: { type: 'array' },
    },
  },
};

const PROPS = ['name', 'size', 'label', 'required', 'error-message'];
const JS_PROPS = ['values'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-radio-button-group');
  Utils.bindProps(el, PROPS, args);
  Utils.bindJSProps(el, JS_PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'RadioButtonGroup';
Primary.args = {
  name: 'Formy McFormFace',
  size: 'medium',
  label: 'Click One',
  ['required']: true,
  ['values']: ['Option 1', 'Option 2'],
};
