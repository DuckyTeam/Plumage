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

const PROPS = ['step', 'range-values', 'default-value', 'marks', 'thumb-label'];
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
  marks: true,
  ['range-values']: [0, 100],
};

export const Marks = Template.bind({});
Marks.args = {
  marks: true,
  ['default-value']: 5,
  ['thumb-label']: false,
  ['range-values']: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export const Steps = Template.bind({});
Steps.args = {
  step: 5,
  ['thumb-label']: false,
  ['range-values']: [5, 10, 15, 20, 25],
};

export const ThumbLabel = Template.bind({});
ThumbLabel.args = {
  ['default-value']: 25,
  marks: true,
  ['thumb-label']: true,
  ['range-values']: [0, 5, 10, 20, 30, 50],
};

// export const All = (args) => {
//   const marks = [true, false]
//   const steps = [5]
//   const defaultValue = [3]
//   const thumbLabel = [true, false]

//   let htmlContent = '';
//   marks.forEach((mark) => {
//     steps.forEach((step) => {
//       defaultValue.forEach((defaultVal) => {
//         thumbLabel.forEach((thumbLabel) => {
//           htmlContent += `
//             <plmg-slider mark="${mark}" range-value="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" step="${step} defaultValue="${defaultVal} thumbLabel="${thumbLabel}></plmg-slider>
//           `
//         })
//       })
//     })
//   })

//   const el = document.createElement('div');
//   el.innerHTML = htmlContent.trim();
//   return el;
// };
// All.storyName = 'All variations';
