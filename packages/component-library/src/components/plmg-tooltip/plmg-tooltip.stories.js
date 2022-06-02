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
  ['position']: 'top',
  ['arrow-position']: 'middle',
  ['target-element']: 'targetelement',
};

export const AllColors = (args) => {
  let htmlContent = `
<div style="display: flex; justify-content: space-between; width: 300px; margin-top: 50px;">
    <span id="neutral">Neutral</span>
    <plmg-tooltip target-element="neutral" content="neutral" background-color="neutral" position="bottom" arrow-position="none">
    </plmg-tooltip>
    <span id="primary">Primary</span>
    <plmg-tooltip target-element="primary" content="primary" background-color="primary" position="bottom" arrow-position="none">
    </plmg-tooltip>
</div>
`;

  return htmlContent;
};
AllColors.storyName = 'All Colors';

export const AllPositions = (args) => {
  let htmlContent = `
<div style="display: grid; grid-template-columns: 150px 150px 150px; gap: 10px; margin-top: 50px; margin-bottom: 50px;">
    <span style="grid-column: 1/4; text-align: center;" id="top">top</span>
    <plmg-tooltip target-element="top" content="top" background-color="neutral" position="top" arrow-position="none">
    </plmg-tooltip>
    <span id="neutral-left-none">left</span>
    <plmg-tooltip target-element="neutral-left-none" content="left" background-color="neutral" position="left" arrow-position="none">
    </plmg-tooltip>
    <span></span>
    <span style="text-align: end" id="neutral-right-none">right</span>
    <plmg-tooltip target-element="neutral-right-none" content="right" background-color="neutral" position="right" arrow-position="none">
    </plmg-tooltip>
    <span style="grid-column: 1/4; text-align: center;" id="neutral-bottom-none">bottom</span>
    <plmg-tooltip target-element="neutral-bottom-none" content="bottom" background-color="neutral" position="bottom" arrow-position="none">
    </plmg-tooltip>
</div>
`;

  return htmlContent;
};
AllPositions.storyName = 'All Positions';
AllPositions.parameters = { layout: 'centered' };

export const AllArrowPositions = (args) => {
  let htmlContent = `
<div style="display: grid; grid-template-columns: 150px 150px 150px; gap: 10px; margin-top: 50px; margin-bottom: 50px;">
    <div style="grid-column: 1/4; display: grid; grid-template-columns: auto auto auto; gap: 10px; ">
        <span id="top-start">top start</span>
        <plmg-tooltip target-element="top-start" content="top start" background-color="neutral" position="top" arrow-position="start">
        </plmg-tooltip>
        <span style="text-align: center" id="top-middle">top middle</span>
        <plmg-tooltip target-element="top-middle" content="top middle" background-color="neutral" position="top" arrow-position="middle">
        </plmg-tooltip>
        <span style="text-align: end" id="top-end">top end</span>
        <plmg-tooltip target-element="top-end" content="top end" background-color="neutral" position="top" arrow-position="end">
        </plmg-tooltip>
    </div>
     
    <span id="left-start">left start</span><span></span>
    <plmg-tooltip target-element="left-start" content="left start Lorem_Ipsum_for_longer_tooltip" background-color="neutral" position="left" arrow-position="start">
    </plmg-tooltip>
    <span style="text-align: end" id="right-start">right start</span>
    <plmg-tooltip target-element="right-start" content="right start Lorem_Ipsum_for_longer_tooltip" background-color="neutral" position="right" arrow-position="start">
    </plmg-tooltip>
    
    
    <span id="left-middle">left middle</span><span></span>
    <plmg-tooltip target-element="left-middle" content="left middle Lorem_Ipsum_for_longer_tooltip" background-color="neutral" position="left" arrow-position="middle">
    </plmg-tooltip>
    <span style="text-align: end" id="right-middle">right middle</span>
    <plmg-tooltip target-element="right-middle" content="right middle Lorem_Ipsum_for_longer_tooltip" background-color="neutral" position="right" arrow-position="middle">
    </plmg-tooltip>
    
    <span id="left-end">left end</span><span></span>
    <plmg-tooltip target-element="left-end" content="left end Lorem_Ipsum_for_longer_tooltip" background-color="neutral" position="left" arrow-position="end">
    </plmg-tooltip>
    <span style="text-align: end" id="right-end">right end</span>
    <plmg-tooltip target-element="right-end" content="right end Lorem_Ipsum_for_longer_tooltip" background-color="neutral" position="right" arrow-position="end">
    </plmg-tooltip>
    
    <div style="grid-column: 1/4; display: grid; grid-template-columns: auto auto auto; gap: 10px; ">
        <span id="bottom-start">bottom start</span>
        <plmg-tooltip target-element="bottom-start" content="bottom start" background-color="neutral" position="bottom" arrow-position="start">
        </plmg-tooltip>
        <span style="text-align: center" id="bottom-middle">bottom middle</span>
        <plmg-tooltip target-element="bottom-middle" content="bottom middle" background-color="neutral" position="bottom" arrow-position="middle">
        </plmg-tooltip>
        <span style="text-align: end" id="bottom-end">bottom end</span>
        <plmg-tooltip target-element="bottom-end" content="bottom end" background-color="neutral" position="bottom" arrow-position="end">
        </plmg-tooltip>
    </div>
</div>
`;

  return htmlContent;
};
AllArrowPositions.storyName = 'All Arrow Positions';
AllArrowPositions.parameters = { layout: 'centered' };

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
