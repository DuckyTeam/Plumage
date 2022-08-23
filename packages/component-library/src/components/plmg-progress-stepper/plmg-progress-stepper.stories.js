import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/ProgressStepper',
  parameters: {},
  decorators: [],
  argTypes: {
    description: {
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
    },
    completed: {
      options: [true, false],
    },
    active: {
      options: [true, false],
    },
    ['step-number']: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: { type: 'select' },
    },
  },
};

const PROPS = ['description', 'disabled', 'completed', 'active', 'step-number'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['text-content'];

const Template = (args) => {
  const el = document.createElement('plmg-progress-stepper');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'ProgressStepper';
Primary.args = {
  ['text-content']: 'Text Here',
  ['step-number']: 1,
  completed: false,
  disabled: false,
  active: false,
  description: 'Extra Info',
};

// export const All = (args) => {
//   let htmlContent = '';
//   someControls.forEach((control) => {
//     htmlContent += `
// <plmg-progress-stepper control="${control}" >
//     control="${control}"
// </plmg-progress-stepper>
// <br/>
//               `;
//   });

//   const el = document.createElement('div');
//   el.innerHTML = htmlContent.trim();
//   return el;
// };
// All.storyName = 'All variations';
