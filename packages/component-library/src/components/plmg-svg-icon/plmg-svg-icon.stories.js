import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/SvgIcon',
  parameters: {},
  decorators: [],
  argTypes: {},
};

const PROPS = ['size'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-add-icon');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Icon = Template.bind({});
Icon.storyName = 'Icon';
Icon.args = {
  size: 'medium',
};
