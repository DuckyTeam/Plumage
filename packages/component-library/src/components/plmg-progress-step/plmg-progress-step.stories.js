import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/ProgressStep',
  parameters: {},
  decorators: [],
  argTypes: {
    active: {
      options: [true, false],
    },
    completed: {
      options: [true, false],
    },
    description: {
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
    },
    separator: {
      options: [true, false],
    },
    step: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: { type: 'select' },
    },
  },
};

const PROPS = [
  'active',
  'completed',
  'description',
  'disabled',
  'separator',
  'step',
];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['text-content'];

const Template = (args) => {
  const el = document.createElement('plmg-progress-step');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'ProgressStep';
Primary.args = {
  active: false,
  completed: false,
  disabled: false,
  description: 'Extra Info',
  separator: true,
  ['text-content']: 'Text Here',
  step: 1,
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
