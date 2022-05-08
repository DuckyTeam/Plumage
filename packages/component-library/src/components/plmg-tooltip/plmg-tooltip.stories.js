import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Tooltip',
  parameters: {},
  decorators: [],
  argTypes: {
    ['bg-color']: {
      options: ['neutral', 'primary'],
      control: { type: 'select' },
    },
    ['arrow-side']: {
      options: ['none', 'left', 'right', 'top', 'bottom'],
      control: { type: 'select' },
    },
    ['arrow-position']: {
      options: ['start', 'middle', 'end'],
      control: { type: 'select' },
    },
    ['slot-text']: { control: { type: 'text' } },
  },
};

const PROPS = ['slot-tooltip-text', 'bg-color', 'arrow-side', 'arrow-position'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['slot-text'];

const Template = (args) => {
  const el = document.createElement('plmg-tooltip');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

const slot1 = (text = 'Tooltip Text') =>
  `<span slot="tooltip-text">Tooltip Text</span>`;

export const Primary = Template.bind({});
Primary.storyName = 'Tooltip';
Primary.args = {
  ['slot-text']: slot1(),
  ['bg-color']: 'Primary',
  ['arrow-side']: 'None',
  ['arrow-position']: 'Middle',
};
