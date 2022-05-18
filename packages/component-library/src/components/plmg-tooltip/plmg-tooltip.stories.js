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
    ['force-visible']: {
      options: [true, false],
    },
    ['slot-text']: { control: { type: 'text' } },
  },
};

const PROPS = [
  'bg-color',
  'arrow-side',
  'arrow-position',
  'target-element-id',
  'force-visible',
];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['tooltip-text'];

const Template = (args) => {
  // let wrapper = document.createElement('div');
  // let paragraphElement = document.createElement('p');
  // paragraphElement.setAttribute('id', 'targetelement');
  // // paragraphElement.textContent = '?';
  // wrapper.appendChild(paragraphElement);
  const el = document.createElement('plmg-tooltip');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Tooltip';
Primary.args = {
  ['tooltip-text']: 'text',
  ['bg-color']: 'primary',
  ['arrow-side']: 'none',
  ['arrow-position']: 'middle',
  ['force-visible']: true,
  ['target-element-id']: 'targetelement',
};

export const TooltipLeft = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
    <div>
    <p id="element" tabindex="1" style="padding: 10px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element" arrow-side="left" arrow-position="start">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
      <p id="element-two" tabindex="1" style="padding: 10px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element-two" arrow-side="left" arrow-position="middle">Tooltip ere is so much content to display</plmg-tooltip>
      <p id="element-three" tabindex="1" style="padding: 10px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element-three" arrow-side="left" arrow-position="end">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
    </div>
  `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipRight = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
    <div style="display: flex; flex-direction: column; height: 100vh; background-color: green">
    <p id="element" tabindex="1" style="padding: 10px; margin-left: 400px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element" arrow-side="right" arrow-position="start">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
    <p id="element-two" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element-two" arrow-side="right" arrow-position="middle">Tooltip text is short asd asd asd asd asd </plmg-tooltip>
    <p id="element-three" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">?</p>
    <plmg-tooltip target-element-id="element-three" arrow-side="right" arrow-position="end">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
    </div>
  `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipTop = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
    <div style="display: flex; flex-direction: column; height: 100vh; background-color: green">
    <p id="element" tabindex="1" style="padding: 10px; margin-left: 400px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element" arrow-side="top" arrow-position="start">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
    <p id="element-two" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element-two" arrow-side="top" arrow-position="middle">Tooltip text is short asd asd asd asd asd </plmg-tooltip>
    <p id="element-three" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">?</p>
    <plmg-tooltip target-element-id="element-three" arrow-side="top" arrow-position="end">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
    </div>
    `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipBottom = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
    <div style="display: flex; flex-direction: column; height: 100vh; background-color: green">
    <p id="element" tabindex="1" style="padding: 10px; margin-top: 100px; margin-left: 200px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element" arrow-side="bottom" arrow-position="start">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
    <p id="element-two" tabindex="1" style="padding: 10px; margin-top: 50px; margin-left: 200px; width: fit-content;">?</p>
      <plmg-tooltip target-element-id="element-two" arrow-side="bottom" arrow-position="middle">Tooltip text is short asd asd asd asd asd </plmg-tooltip>
    <p id="element-three" tabindex="1" style="padding: 10px; margin-top: 50px; margin-left: 200px; width: fit-content;">?</p>
    <plmg-tooltip target-element-id="element-three" arrow-side="bottom" arrow-position="end">Tooltip text is very long and takes up several lines because there is so much content to display</plmg-tooltip>
    </div>
    `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};
