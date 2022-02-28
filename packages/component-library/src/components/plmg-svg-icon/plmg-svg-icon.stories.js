import * as Utils from '../../stories/StencilStorybookUtils';
import { designs } from '../plmg-button/plmg-button.types';
import { ICON } from './icon.enum';

export default {
  title: 'Component/SvgIcon',
  parameters: {},
  decorators: [],
  argTypes: {
    icon: {
      options: Object.values(ICON),
      control: { type: 'select' },
    },
    size: {
      control: { type: 'text' },
    },
  },
};

const PROPS = ['size', 'icon'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-svg-icon');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Icon = Template.bind({});
Icon.storyName = 'Icon';
Icon.args = {
  size: '2em',
  icon: 'accessAlarm',
};

export const AllIcons = (args) => {
  const htmlContent = Object.values(ICON)
    .map(
      (icon) => `<p><plmg-svg-icon icon="${icon}"></plmg-svg-icon>${icon}</p>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style['grid-template-columns'] = 'repeat(auto-fit, minmax(200px, 1fr))';

  return el;
};

AllIcons.storyName = 'All Icons';
