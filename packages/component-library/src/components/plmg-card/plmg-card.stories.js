import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Card',
  parameters: {},
  decorators: [],
  argTypes: { onClick: { action: 'clicked' } },
};

const PROPS = ['header-text', 'bottom-button-text'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-card');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Card';
Primary.args = {
  ['header-text']: 'Header',
  ['bottom-button-text']: 'Action',
};
