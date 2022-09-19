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
  },
};

const PROPS = ['href', 'icon', 'rel', 'target', 'text'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [''];

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
  text: 'Dropdown Item',
  href: 'https://www.ducky.eco/',
  icon: '',
  href: 'https://ducky.eco',
  rel: 'noopener noreferrer',
  target: '_blank',
};

export const Icon = Template.bind({});
Icon.storyName = 'Icon';
Icon.args = {
  text: 'Icon',
  href: 'https://www.ducky.eco/',
  icon: 'duck',
  href: 'https://ducky.eco',
  rel: 'noopener noreferrer',
  target: '_blank',
};

export const MaxLength = Template.bind({});
MaxLength.storyName = 'Max Length';
MaxLength.args = {
  text: 'A very long text that will be truncated',
  href: 'https://www.ducky.eco/',
  icon: 'duck',
  href: 'https://ducky.eco',
  rel: 'noopener noreferrer',
  target: '_blank',
};
