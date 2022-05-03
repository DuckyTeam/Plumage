import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/ErrorMessage',
  parameters: {},
  decorators: [],
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    ['message']: {
      control: { type: 'text' },
    },
  },
};

const PROPS = ['size', 'message'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-error-message');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'ErrorMessage';
Primary.args = {
  size: 'medium',
  ['message']: 'Error message',
};
