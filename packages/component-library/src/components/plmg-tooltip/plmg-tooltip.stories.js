import { EndOfLineState } from 'typescript';
import * as Utils from '../../stories/StencilStorybookUtils';
import {
  PlmgTooltipArrowSide,
  PlmgTooltipArrowPosition,
  PlmgTooltipBgColor,
} from './plmg-tooltip.types';

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
    ['tooltip-title']: {
      control: { type: 'text' },
    },
    ['force-visible']: {
      options: [true, false],
    },
  },
};

const PROPS = [
  'bg-color',
  'arrow-side',
  'arrow-position',
  'target-element-id',
  'tooltip-title',
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
  ['tooltip-title']: 'text',
  ['bg-color']: 'primary',
  ['arrow-side']: 'none',
  ['arrow-position']: 'middle',
  ['force-visible']: true,
  ['target-element-id']: 'targetelement',
};

export const TooltipRight = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh;">
  
    <p id="element" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">right start</p>
    <plmg-tooltip target-element-id="element" arrow-side="left" arrow-position="start" tooltip-title="Tooltip right with arrow at the start of the Y axis"></plmg-tooltip>
  
    <p id="element-two" tabindex="2" style="padding: 10px; margin-left: 150px; width: fit-content;">right middle</p>
    <plmg-tooltip target-element-id="element-two" arrow-side="left" arrow-position="middle" tooltip-title="Tool right with arrow in the middle of the Y axis"></plmg-tooltip>
  
    <p id="element-three" tabindex="3" style="padding: 10px; margin-left: 150px; width: fit-content;">right end</p>
    <plmg-tooltip target-element-id="element-three" arrow-side="left" arrow-position="end" tooltip-title="Tool right with arrow at the end of the Y axis. The height of the tooltip moves its position upwards"></plmg-tooltip>
    
  </div>
  `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipLeft = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh;">
      
      <p id="element" tabindex="1" style="padding: 10px; margin-left: 300px; width: fit-content;">left start</p>
      <plmg-tooltip target-element-id="element" arrow-side="right" arrow-position="start" tooltip-title="left start tooltip"></plmg-tooltip>
      
      <p id="element-two" tabindex="2" style="padding: 10px; margin-left: 300px; width: fit-content;">left middle</p>
      <plmg-tooltip target-element-id="element-two" arrow-side="right" arrow-position="middle" tooltip-title=" A longer text will increase the height of the tooltip. It will adjust its positoning to center vertically">left middle</plmg-tooltip>
      
      <p id="element-three" tabindex="3" style="padding: 10px; margin-left: 300px; width: fit-content;">left end</p>
      <plmg-tooltip target-element-id="element-three" arrow-side="right" arrow-position="end" tooltip-title="Tooltip left with arrow at the end"></plmg-tooltip>
    
    </div>
  `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipBelow = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh;">
      
      <p id="element" tabindex="1" style="padding: 10px; margin-left: 150px; width: fit-content;">below start</p>
      <plmg-tooltip target-element-id="element" arrow-side="top" arrow-position="start" tooltip-title="Bottom with arrow start"></plmg-tooltip>
      
      <p id="element-two" tabindex="2" style="padding: 10px; margin-left: 150px; width: fit-content;">below middle</p>
      <plmg-tooltip target-element-id="element-two" arrow-side="top" arrow-position="middle" tooltip-title="Bottom with arrow middle"></plmg-tooltip>
      
      <p id="element-three" tabindex="3" style="padding: 10px; margin-left: 150px; width: fit-content;">below end</p>
      <plmg-tooltip target-element-id="element-three" arrow-side="top" arrow-position="end" tooltip-title="Bottom with arrow end"></plmg-tooltip>
    </div>
    `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const TooltipAbove = (args) => {
  let wrapper = document.createElement('div');
  const htmlContent = `
  <div style="display: flex; flex-direction: column; height: 100vh; width: 200px; margin-left: 150px; margin-top: 75px; gap: 20px; width: fit-content;">
     
      <p id="element" tabindex="1">above start</p>
      <plmg-tooltip target-element-id="element" arrow-side="bottom" arrow-position="start" tooltip-title="Tooltip above with arrow start"></plmg-tooltip>
     
      <p id="element-two" tabindex="2">above middle</p>
      <plmg-tooltip target-element-id="element-two" arrow-side="bottom" arrow-position="middle" tooltip-title="Tooltip above with arrow middle"></plmg-tooltip>
     
      <p id="element-three" tabindex="3">above end</p>
      <plmg-tooltip target-element-id="element-three" arrow-side="bottom" arrow-position="end" tooltip-title="Tooltip above with arrow at the end"></plmg-tooltip>
    
    </div>
    `;
  wrapper.innerHTML = htmlContent;
  return wrapper;
};

export const AllVariations = (args) => {
  let htmlContent = '';
  PlmgTooltipBgColor.forEach((bgcolor) => {
    PlmgTooltipArrowSide.forEach((arrowSide) => {
      PlmgTooltipArrowPosition.forEach((arrowPosition) => {
        htmlContent += `
        <plmg-tooltip force-visible="true" tooltip-title="${bgcolor} ${arrowPosition} ${arrowSide}" bg-color="${bgcolor}" arrow-side="${arrowSide}" arrow-position="${arrowPosition}">
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
