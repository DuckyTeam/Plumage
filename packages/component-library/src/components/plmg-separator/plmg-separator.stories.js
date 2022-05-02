import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Separator',
  parameters: {},
  decorators: [],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    width: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
  },
};

const PROPS = ['direction', 'width'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-separator');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Separator';
Primary.args = {
  direction: 'horizontal',
  width: 'thin',
};
