import * as Utils from '../../stories/StencilStorybookUtils';
import { array } from '@storybook/addon-knobs';

export default {
  title: 'Component/RadioButtonGroup',
  parameters: {},
  decorators: [],
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    ['required']: {
      options: [true, false],
    },
    ['values']: {
      control: { type: 'array' },
    },
  },
};

const PROPS = ['name', 'label', 'required', 'values'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-radio-button-group');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

const test = array('radioValues', ['Laptop', 'Book', 'Whiskey']);

export const Primary = Template.bind({});
Primary.storyName = 'RadioButtonGroup';
Primary.args = {
  name: 'Formy McFormFace',
  label: 'Click One',
  ['required']: true,
  ['values']: ['test', 'test2'],
};
