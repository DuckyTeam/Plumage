import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Slider',
  parameters: {},
  decorators: [],
  argTypes: {
    ['range-values']: {
      control: { type: 'array' },
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
  'thumb-label',
  'custom-marks',
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
  ['thumb-label']: false,
  ['mark-labels']: true,
  ['range-values']: [0, 20, 30],
};

export const Marks = Template.bind({});
Marks.args = {
  marks: true,
  ['default-value']: 1,
  ['thumb-label']: false,
};

export const Steps = Template.bind({});
Steps.args = {
  step: 5,
  ['thumb-label']: false,
};

export const ThumbLabel = Template.bind({});
ThumbLabel.args = {
  ['default-value']: 0,
  ['marks']: false,
  ['thumb-label']: true,
};

export const All = (args) => {
  let htmlContent = '';
  someControls.forEach((control) => {
    htmlContent += `
<plmg-slider control="${control}" >
    control="${control}"
</plmg-slider>
<br/>
              `;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
All.storyName = 'All variations';
