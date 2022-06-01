import * as Utils from '../../stories/StencilStorybookUtils';
import {
  backgroundColors,
  positions,
  arrowPositions,
} from './plmg-tooltip.types';

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
    ['force-visible']: {
      control: { type: 'boolean' },
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
  'force-visible',
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
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Tooltip';
Primary.args = {
  content: 'Tooltip Content',
  ['background-color']: 'primary',
  ['position']: 'none',
  ['arrow-position']: 'middle',
  ['force-visible']: true,
  ['target-element']: 'targetelement',
};

export const TooltipLeft = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh;">
  
    <p id="element-one" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">right start</p>
    <plmg-tooltip target-element="element-one" position="left" arrow-position="start" content="Tooltip left with arrow at the start of the Y axis"></plmg-tooltip>
  
    <p id="element-two" tabindex="2" style="padding: 10px; margin-left: 150px; width: fit-content;">left middle</p>
    <plmg-tooltip target-element="element-two" position="left" arrow-position="middle" content="Tool left with arrow in the middle of the Y axis"></plmg-tooltip>
  
    <p id="element-three" tabindex="3" style="padding: 10px; margin-left: 150px; width: fit-content;">left end</p>
    <plmg-tooltip target-element="element-three" position="left" arrow-position="end" content="Tool left with arrow at the end of the Y axis. The height of the tooltip moves its position upwards"></plmg-tooltip>
    
    <p id="element-four" tabindex="4" style="padding: 10px; margin-left: 150px; width: fit-content;">left none</p>
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
      <p id="element-one" tabindex="1" style="padding: 10px; margin-right: 300px; width: fit-content;">right start</p>
      <plmg-tooltip target-element="element-one" position="right" arrow-position="start" content="right start tooltip. A longer text will increase the height of the tooltip."></plmg-tooltip>
      
      <p id="element-two" tabindex="2" style="padding: 10px; margin-right: 300px; width: fit-content;">right middle</p>
      <plmg-tooltip target-element="element-two" position="right" arrow-position="middle" content=" A longer text will increase the height of the tooltip. It will adjust its positoning to center vertically">right middle</plmg-tooltip>
      
      <p id="element-three" tabindex="3" style="padding: 10px; margin-right: 300px; width: fit-content;">right end</p>
      <plmg-tooltip target-element="element-three" position="right" arrow-position="end" content="Tooltip right with arrow at the end"></plmg-tooltip>
    
      <p id="element-four" tabindex="4" style="padding: 10px; margin-right: 150px; width: fit-content;">right none</p>
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
      
      <p id="element-one" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">bottom start</p>
      <plmg-tooltip target-element="element-one" position="bottom" arrow-position="start" content="Bottom with arrow start"></plmg-tooltip>
      
      <p id="element-two" tabindex="2" style="padding: 10px; margin-left: 150px; width: fit-content;">bottom middle</p>
      <plmg-tooltip target-element="element-two" position="bottom" arrow-position="middle" content="Bottom with arrow middle"></plmg-tooltip>
      
      <p id="element-three" tabindex="3" style="padding: 10px; margin-left: 150px; width: fit-content;">bottom end</p>
      <plmg-tooltip target-element="element-three" position="bottom" arrow-position="end" content="Bottom with arrow end"></plmg-tooltip>
      
      <p id="element-four" tabindex="4" style="padding: 10px; margin-left: 150px; width: fit-content;">bottom none</p>
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
  let htmlContent = '';
  backgroundColors.forEach((backgroundColor) => {
    positions.forEach((position) => {
      arrowPositions.forEach((arrowPosition) => {
        htmlContent += `
        <plmg-tooltip force-visible="true" content="${backgroundColor} ${arrowPosition} ${position}" background-color="${backgroundColor}" position="${position}" arrow-position="${arrowPosition}">
        </plmg-tooltip>
        `;
      });
    });
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  el.style.display = 'grid';
  el.style.gridTemplateColumns = 'repeat(3, 1fr)';
  el.style.gridTemplateRows = 'repeat(5, 1fr)';
  el.style.gap = '50px';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};

AllVariations.storyName = 'All variations';
