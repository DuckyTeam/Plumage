import * as Utils from '../../stories/StencilStorybookUtils';
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
    color: {
      control: { type: 'color' },
    },
    size: {
      control: { type: 'text' },
    },
  },
};

const PROPS = ['icon', 'color', 'size'];
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
  color: undefined,
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

export const Sizes = (args) => {
  const htmlContent = ['1em', '2rem', '42px']
    .map((size) => `<plmg-svg-icon icon="home" size="${size}"></plmg-svg-icon>`)
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
Sizes.storyName = 'Sizes';

export const Colors = (args) => {
  const htmlContent = [
    '#66c2cb',
    '#f179a2',
    'rgba(53,122,56,1)',
    'var(--plmg-background-warning-active)',
  ]
    .map(
      (color) => `<plmg-svg-icon icon="home" color="${color}"></plmg-svg-icon>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
Colors.storyName = 'Colors';
