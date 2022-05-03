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
    thickness: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
  },
};

const PROPS = ['direction', 'thickness'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-separator');
  // provides a fixed sized wrapper for the component to inherit height and width from
  const wrapper = document.createElement('div');
  wrapper.style.height = '200px';
  wrapper.style.width = '200px';
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  wrapper.appendChild(el);
  return wrapper;
};

export const Primary = Template.bind({});
Primary.storyName = 'Separator';
Primary.args = {
  direction: 'horizontal',
  thickness: 'thin',
};
