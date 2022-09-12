import * as Utils from '../../stories/StencilStorybookUtils';
import { ICON } from '../plmg-svg-icon/icon.enum';

export default {
  title: 'Component/DropdownItem',
  parameters: {},
  decorators: [],
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    icon: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
    rel: {
      control: { type: 'text' },
    },
    target: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'number' },
    },
  },
};

const PROPS = ['href', 'icon', 'rel', 'target', 'text', 'width'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['children'];

const Template = (args) => {
  const el = document.createElement('plmg-dropdown-item');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'DropdownItem';
Primary.args = {
  text: ' SuksesshistorierSuksesshistoriSukseasdasdasdssadas',
  href: 'https://www.ducky.eco/',
  icon: 'duck',
  href: 'https://ducky.eco',
  rel: 'noopener noreferrer',
  target: '_blank',
  width: '200',
};

export const Button = Template.bind({});
Button.storyName = 'Button';
Button.args = {
  text: 'Button',
  icon: 'duck',
};

export const FixedWidth = Template.bind({});
FixedWidth.storyName = 'Fixed Width';
FixedWidth.args = {
  text: 'Fixed Width',
  href: 'https://www.ducky.eco/',
  icon: 'duck',
  href: 'https://ducky.eco',
  rel: 'noopener noreferrer',
  target: '_blank',
  width: 200,
};
