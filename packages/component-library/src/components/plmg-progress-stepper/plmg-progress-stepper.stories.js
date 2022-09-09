import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/ProgressStepper',
  parameters: {},
  decorators: [],
  argTypes: {
    ['active-step']: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: { type: 'select' },
    },
  },
};

const PROPS = ['active-step'];
const SLOTS = ['children'];

const Template = (args) => {
  const el = document.createElement('plmg-progress-stepper');
  Utils.bindProps(el, PROPS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Stepper';
Primary.args = {
  ['active-step']: 0,
  children: `<plmg-progress-step step="1">one</plmg-progress-step><plmg-progress-step step="2">two</plmg-progress-step><plmg-progress-step step="3">three</plmg-progress-step><plmg-progress-step step="4">four</plmg-progress-step>
  `,
};
