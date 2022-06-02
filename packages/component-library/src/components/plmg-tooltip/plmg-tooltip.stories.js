import * as Utils from '../../stories/StencilStorybookUtils';
import { backgroundColors } from './plmg-tooltip.types';

export default {
  title: 'Component/Tooltip',
  parameters: {},
  decorators: [],
  argTypes: {
    ['background-color']: {
      options: ['neutral', 'primary'],
      control: { type: 'select' },
    },
    ['position']: {
      options: ['left', 'right', 'top', 'bottom'],
      control: { type: 'select' },
    },
    ['arrow-position']: {
      options: ['none', 'start', 'middle', 'end'],
      control: { type: 'select' },
    },
    content: {
      control: { type: 'text' },
    },
    ['target-element']: {
      options: ['id'],
    },
  },
};

const PROPS = [
  'background-color',
  'position',
  'arrow-position',
  'target-element',
  'content',
];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-tooltip');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  el.setAttribute('target-element', 'targetelement');

  const target = document.createElement('span');
  target.setAttribute('id', 'targetelement');
  target.innerText = 'Hover me';

  const container = document.createElement('div');
  container.appendChild(el);
  container.appendChild(target);
  container.style = 'margin: 150px;';

  return container;
};

export const Primary = Template.bind({});
Primary.storyName = 'Tooltip';
Primary.args = {
  content: 'Tooltip Content',
  ['background-color']: 'primary',
  ['position']: 'none',
  ['arrow-position']: 'middle',
  ['target-element']: 'targetelement',
};

export const TooltipLeft = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh;">
  
    <p id="element-one" tabindex="1" style="margin-left: 300px; width: fit-content;">right start</p>
    <plmg-tooltip target-element="element-one" position="left" arrow-position="start" content="Tooltip left with arrow at the start of the Y axis"></plmg-tooltip>
  
    <p id="element-two" tabindex="2" style="margin-left: 300px; width: fit-content;">left middle</p>
    <plmg-tooltip target-element="element-two" position="left" arrow-position="middle" content="Tool left with arrow in the middle of the Y axis"></plmg-tooltip>
  
    <p id="element-three" tabindex="3" style="margin-left: 300px; width: fit-content;">left end</p>
    <plmg-tooltip target-element="element-three" position="left" arrow-position="end" content="Tool left with arrow at the end of the Y axis. The height of the tooltip moves its position upwards"></plmg-tooltip>
    
    <p id="element-four" tabindex="4" style="margin-left: 300px; width: fit-content;">left none</p>
    <plmg-tooltip target-element="element-four" position="left" arrow-position="none" content="Tool left with no arrow"></plmg-tooltip>
    
  </div>
  `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipRight = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh;">
      <p id="element-one" tabindex="1" style=" width: fit-content;">right start</p>
      <plmg-tooltip target-element="element-one" position="right" arrow-position="start" content="right start tooltip. A longer text will increase the height of the tooltip."></plmg-tooltip>
      
      <p id="element-two" tabindex="2" style=" width: fit-content;">right middle</p>
      <plmg-tooltip target-element="element-two" position="right" arrow-position="middle" content=" A longer text will increase the height of the tooltip. It will adjust its positoning to center vertically">right middle</plmg-tooltip>
      
      <p id="element-three" tabindex="3" style=" width: fit-content;">right end</p>
      <plmg-tooltip target-element="element-three" position="right" arrow-position="end" content="Tooltip right with arrow at the end"></plmg-tooltip>
    
      <p id="element-four" tabindex="4" style=" width: fit-content;">right none</p>
      <plmg-tooltip target-element="element-four" position="right" arrow-position="none" content="Tool right with no arrow"></plmg-tooltip>
    </div>
  `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipBottom = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh;">
      
      <p id="element-one" tabindex="1" style="margin-left: 150px; width: fit-content;">bottom start</p>
      <plmg-tooltip target-element="element-one" position="bottom" arrow-position="start" content="Bottom with arrow start"></plmg-tooltip>
      
      <p id="element-two" tabindex="2" style="margin-left: 150px; width: fit-content;">bottom middle</p>
      <plmg-tooltip target-element="element-two" position="bottom" arrow-position="middle" content="Bottom with arrow middle"></plmg-tooltip>
      
      <p id="element-three" tabindex="3" style="margin-left: 150px; width: fit-content;">bottom end</p>
      <plmg-tooltip target-element="element-three" position="bottom" arrow-position="end" content="Bottom with arrow end"></plmg-tooltip>
      
      <p id="element-four" tabindex="4" style="margin-left: 150px; width: fit-content;">bottom none</p>
      <plmg-tooltip target-element="element-four" position="bottom" arrow-position="none" content="Bottom with no arrow"></plmg-tooltip>
    </div>
    `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipTop = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh; width: 200px; margin-left: 150px; margin-top: 75px; gap: 20px; width: fit-content;">
     
      <p id="element-one" tabindex="1">top start</p>
      <plmg-tooltip target-element="element-one" position="top" arrow-position="start" content="Tooltip top with arrow start"></plmg-tooltip>
     
      <p id="element-two" tabindex="2">top middle</p>
      <plmg-tooltip target-element="element-two" position="top" arrow-position="middle" content="Tooltip top with arrow middle"></plmg-tooltip>
     
      <p id="element-three" tabindex="3">top end</p>
      <plmg-tooltip target-element="element-three" position="top" arrow-position="end" content="Tooltip top with arrow at the end"></plmg-tooltip>
    
        <p id="element-four" tabindex="3">top none</p>
      <plmg-tooltip target-element="element-four" position="top" arrow-position="none" content="Tooltip top with no arrow"></plmg-tooltip>
    
    </div>
    `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const AllVariations = (args) => {
  let htmlContent = ``;

  // Arrow "none"
  backgroundColors.forEach((bgColor) => {
    htmlContent += `
<div style="display: grid; grid-template-columns: 150px 150px 150px; gap: 10px; margin-top: 50px; margin-bottom: 50px;">
    <span style="grid-column: 1/4; text-align: center;" id="${bgColor}-top-none">${bgColor} top none</span>
    <plmg-tooltip target-element="${bgColor}-top-none" content="${bgColor} top none" background-color="${bgColor}" position="top" arrow-position="none">
    </plmg-tooltip>
    <span id="${bgColor}-left-none">${bgColor} left none</span>
    <plmg-tooltip target-element="${bgColor}-left-none" content="${bgColor} left none" background-color="${bgColor}" position="left" arrow-position="none">
    </plmg-tooltip>
    <span></span>
    <span style="text-align: end" id="${bgColor}-right-none">${bgColor} right none</span>
    <plmg-tooltip target-element="${bgColor}-right-none" content="${bgColor} right none" background-color="${bgColor}" position="right" arrow-position="none">
    </plmg-tooltip>
    <span style="grid-column: 1/4; text-align: center;" id="${bgColor}-bottom-none">${bgColor} bottom none</span>
    <plmg-tooltip target-element="${bgColor}-bottom-none" content="${bgColor} bottom none" background-color="${bgColor}" position="bottom" arrow-position="none">
    </plmg-tooltip>
</div>
`;
  });

  // All arrow positions
  backgroundColors.forEach((bgColor) => {
    htmlContent += `
<div style="display: grid; grid-template-columns: 150px 150px 150px; gap: 10px; margin-top: 50px; margin-bottom: 50px;">
    <div style="grid-column: 1/4; display: grid; grid-template-columns: auto auto auto; gap: 10px; ">
        <span id="${bgColor}-top-start">${bgColor} top start</span>
        <plmg-tooltip target-element="${bgColor}-top-start" content="${bgColor} top start" background-color="${bgColor}" position="top" arrow-position="start">
        </plmg-tooltip>
        <span style="text-align: center" id="${bgColor}-top-middle">${bgColor} top middle</span>
        <plmg-tooltip target-element="${bgColor}-top-middle" content="${bgColor} top middle" background-color="${bgColor}" position="top" arrow-position="middle">
        </plmg-tooltip>
        <span style="text-align: end" id="${bgColor}-top-end">${bgColor} top end</span>
        <plmg-tooltip target-element="${bgColor}-top-end" content="${bgColor} top end" background-color="${bgColor}" position="top" arrow-position="end">
        </plmg-tooltip>
    </div>
     
    <span id="${bgColor}-left-start">${bgColor} left start</span><span></span>
    <plmg-tooltip target-element="${bgColor}-left-start" content="${bgColor} left start Lorem_Ipsum_for-longer_tooltip" background-color="${bgColor}" position="left" arrow-position="start">
    </plmg-tooltip>
    <span style="text-align: end" id="${bgColor}-right-start">${bgColor} right start</span>
    <plmg-tooltip target-element="${bgColor}-right-start" content="${bgColor} right start Lorem_Ipsum_for-longer_tooltip" background-color="${bgColor}" position="right" arrow-position="start">
    </plmg-tooltip>
    
    
    <span id="${bgColor}-left-middle">${bgColor} left middle</span><span></span>
    <plmg-tooltip target-element="${bgColor}-left-middle" content="${bgColor} left middle Lorem_Ipsum_for-longer_tooltip" background-color="${bgColor}" position="left" arrow-position="middle">
    </plmg-tooltip>
    <span style="text-align: end" id="${bgColor}-right-middle">${bgColor} right middle</span>
    <plmg-tooltip target-element="${bgColor}-right-middle" content="${bgColor} right middle Lorem_Ipsum_for-longer_tooltip" background-color="${bgColor}" position="right" arrow-position="middle">
    </plmg-tooltip>
    
    <span id="${bgColor}-left-end">${bgColor} left end</span><span></span>
    <plmg-tooltip target-element="${bgColor}-left-end" content="${bgColor} left end Lorem_Ipsum_for-longer_tooltip" background-color="${bgColor}" position="left" arrow-position="end">
    </plmg-tooltip>
    <span style="text-align: end" id="${bgColor}-right-end">${bgColor} right end</span>
    <plmg-tooltip target-element="${bgColor}-right-end" content="${bgColor} right end Lorem_Ipsum_for-longer_tooltip" background-color="${bgColor}" position="right" arrow-position="end">
    </plmg-tooltip>
    
    <div style="grid-column: 1/4; display: grid; grid-template-columns: auto auto auto; gap: 10px; ">
        <span id="${bgColor}-bottom-start">${bgColor} bottom start</span>
        <plmg-tooltip target-element="${bgColor}-bottom-start" content="${bgColor} bottom start" background-color="${bgColor}" position="bottom" arrow-position="start">
        </plmg-tooltip>
        <span style="text-align: center" id="${bgColor}-bottom-middle">${bgColor} bottom middle</span>
        <plmg-tooltip target-element="${bgColor}-bottom-middle" content="${bgColor} bottom middle" background-color="${bgColor}" position="bottom" arrow-position="middle">
        </plmg-tooltip>
        <span style="text-align: end" id="${bgColor}-bottom-end">${bgColor} bottom end</span>
        <plmg-tooltip target-element="${bgColor}-bottom-end" content="${bgColor} bottom end" background-color="${bgColor}" position="bottom" arrow-position="end">
        </plmg-tooltip>
    </div>
</div>
    `;
  });

  return htmlContent;
};
AllVariations.storyName = 'All variations';
AllVariations.parameters = { layout: 'centered' };
