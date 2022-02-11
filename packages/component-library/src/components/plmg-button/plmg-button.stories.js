import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Button',
  parameters: {},
  decorators: [],
  argTypes: {
    variant: {
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
  },
};

const PROPS = ['variant', 'size'];
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
Primary.storyName = 'Filled';
Primary.args = {
  text: 'Button filled',
  variant: 'filled',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.storyName = 'Filled-round';
Secondary.args = {
  text: 'Button filled-round',
  variant: 'filled-round',
  size: 'medium',
};
