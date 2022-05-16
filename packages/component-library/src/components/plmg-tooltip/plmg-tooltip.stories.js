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
    ['target-element-id']: { control: { type: 'text ' } },
    ['slot-text']: { control: { type: 'text' } },
  },
};

const PROPS = ['bg-color', 'arrow-side', 'arrow-position', 'target-element-id'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['tooltip-text'];

const Template = (args) => {
  let wrapper = document.createElement('div');
  let paragraphElement = document.createElement('p');
  paragraphElement.setAttribute('id', 'targetelement');
  paragraphElement.textContent = '?';
  wrapper.appendChild(paragraphElement);
  const el = document.createElement('plmg-tooltip');
  wrapper.appendChild(el);
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return wrapper;
};

export const Primary = Template.bind({});
Primary.storyName = 'Tooltip';
Primary.args = {
  ['tooltip-text']: 'text',
  ['bg-color']: 'primary',
  ['arrow-side']: 'none',
  ['arrow-position']: 'middle',
  ['target-element-id']: 'targetelement',
};

export const TooltipAction = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
    <div>
    <p id="element">hover me</p>
      <plmg-tooltip target-element-id="element" arrow-side="top" arrow-position="middle">Tooltip text</plmg-tooltip>
    </div>
  `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};
