import * as Utils from '../../stories/StencilStorybookUtils';
import { ICON } from '../plmg-svg-icon/icon.enum';

export default {
  title: 'Component/Card',
  parameters: {
    actions: {
      handles: ['topActionClicked', 'bottomActionClicked'],
    },
  },
  decorators: [],
  argTypes: {
    ['header-text']: { control: { type: 'text' } },
    ['top-action-icon']: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
    ['top-action-label']: { control: { type: 'text' } },
    ['bottom-action-text']: { control: { type: 'text' } },
    ['slot-1']: { control: { type: 'text' } },
    ['slot-2']: { control: { type: 'text' } },
  },
};

const PROPS = [
  'header-text',
  'top-action-icon',
  'top-action-label',
  'bottom-action-text',
];
const EVENTS = ['topActionClicked', 'bottomActionClicked'];
const CSS_VARS = [];
const SLOTS = ['slot-1', 'slot-2'];

const Template = (args) => {
  const el = document.createElement('plmg-card');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

const slot1 = (text = 'Slot 1') =>
  `<div slot="slot-1" style="background-color: var(--plmg-background-primary); color: var(--plmg-text-primary); min-width: 200px; min-height: 100px; display: flex; align-content: center; justify-content: center; align-items: center;">${text}</div>`;
const slot2 =
  '<div slot="slot-2" style="background-color: var(--plmg-background-primary); color: var(--plmg-text-primary); min-width: 200px; min-height: 100px; display: flex; align-content: center; justify-content: center; align-items: center;">Slot 2</div>';

export const Primary = Template.bind({});
Primary.storyName = 'Card';
Primary.args = {
  ['header-text']: 'Card Header',
  ['bottom-action-text']: 'Action',
  ['top-action-icon']: ICON.Home,
  ['top-action-label']: 'card top action',
  ['slot-1']: slot1(),
  ['slot-2']: slot2,
};

export const Headings = (args) => {
  const htmlContent = `
<plmg-card>${slot1('No header')}</plmg-card>
<plmg-card header-text="Header">${slot1('Header')}</plmg-card>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
Headings.storyName = 'All headings';

export const ActionTop = (args) => {
  const htmlContent = `
<plmg-card>${slot1('No action top')}</plmg-card>
<plmg-card top-action-icon="${
    ICON.Home
  }" top-action-label="card top action">${slot1(
    '"home" action top'
  )}</plmg-card>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
ActionTop.storyName = 'All action top';

export const ActionBottom = (args) => {
  const htmlContent = `
<plmg-card>${slot1('No action bottom')}</plmg-card>
<plmg-card bottom-action-text="Action">${slot1(
    'Action Bottom Text'
  )}</plmg-card>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
ActionBottom.storyName = 'All action bottom';

export const ContentBlocks = (args) => {
  const htmlContent = `
<plmg-card>${slot1('Slot 1 only')}</plmg-card>
<plmg-card>${slot1('Slot 1 and ...')} ${slot2}</plmg-card>
<plmg-card>${slot2}</plmg-card>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
ContentBlocks.storyName = 'All content blocks';
