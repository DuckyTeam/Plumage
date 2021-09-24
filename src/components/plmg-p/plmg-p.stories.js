import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Example/PlmgP',
  parameters: {},
  decorators: [],
};

const SLOTS = ['hi'];

const Template = (args) => {
  const el = document.createElement('plmg-p');
  Utils.bindSlots(el, SLOTS, args);

  return el;
};

export const Primary = Template.bind({});
Primary.args = {
  hi: 'ONE',
};

export const Secondary = Template.bind({});
Secondary.args = {
  hi: 'TWO',
};
