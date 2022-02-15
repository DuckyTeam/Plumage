import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Button',
  parameters: {},
  decorators: [],
  argTypes: {
    design: {
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
    color: {
      options: ['primary', 'neutral', 'standout', 'danger'],
      control: { type: 'select' },
    },
    ['full-width']: {
      options: [true, false],
    },
    ['shadow']: {
      options: [true, false],
    },
  },
};

const PROPS = ['design', 'size', 'color', 'full-width', 'shadow'];
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
  design: 'filled',
  size: 'medium',
  color: 'primary',
  ['full-width']: false,
  ['shadow']: false,
};

export const Secondary = Template.bind({});
Secondary.storyName = 'Filled-round';
Secondary.args = {
  text: 'Button filled-round',
  design: 'filled-round',
  size: 'medium',
  color: 'primary',
  ['full-width']: false,
  ['shadow']: false,
};
