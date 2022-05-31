import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Slider',
  parameters: {},
  decorators: [],
  argTypes: {
    ['min-value']: {
      control: { type: 'number' },
    },
    ['max-value']: {
      control: { type: 'number' },
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
    ['custom-marks']: {
      control: { type: 'text' },
    },
  },
};

const PROPS = [
  'step',
  'min-value',
  'max-value',
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
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Slider';
Primary.args = {
  ['min-value']: '0',
  ['max-value']: '100',
  ['default-value']: '20',
  marks: true,
  ['thumb-label']: false,
  step: 5,
  ['custom-marks']: [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ],
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
