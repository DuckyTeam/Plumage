import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Slider',
  parameters: {},
  decorators: [],
  argTypes: {
    ['range-values']: {
      control: { type: 'array' },
    },
    name: {
      control: { type: 'text' },
    },
    ['default-value']: {
      control: { type: 'number' },
    },
    marks: {
      control: { type: 'boolean' },
    },
    ['thumb-label']: {
      control: { type: 'boolean' },
    },
    step: {
      control: { type: 'number' },
    },
  },
};

const PROPS = [
  'step',
  'range-values',
  'default-value',
  'marks',
  'name',
  'thumb-label',
];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-slider');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  el.rangeValues = args['range-values'];
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Slider';
Primary.args = {
  marks: false,
  name: 'range-slider',
  ['thumb-label']: false,
  marks: false,
  ['range-values']: [0, 100],
};

export const Marks = Template.bind({});
Marks.args = {
  marks: true,
  name: 'range-slider',
  ['default-value']: 5,
  ['thumb-label']: false,
  ['range-values']: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export const ThumbLabel = Template.bind({});
ThumbLabel.args = {
  ['default-value']: 25,
  step: 1,
  name: 'range-slider',
  marks: false,
  ['thumb-label']: true,
  ['range-values']: [0, 5, 10, 20, 30, 50],
};

export const Steps = Template.bind({});
Steps.args = {
  step: 5,
  name: 'range-slider',
  ['thumb-label']: false,
  ['range-values']: [5, 10, 15, 20, 25],
};

export const AllOptions = Template.bind({});
AllOptions.args = {
  ['default-value']: 0,
  step: 100,
  name: 'range-slider',
  marks: true,
  ['thumb-label']: true,
  ['range-values']: [-1000, -500, 0, 500, 1000],
};
