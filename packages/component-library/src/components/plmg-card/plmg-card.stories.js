import * as Utils from '../../stories/StencilStorybookUtils';
import { ICON } from '../plmg-svg-icon/icon.enum';

export default {
  title: 'Component/Card',
  parameters: {
    actions: {
      handles: ['topActionClicked', 'bottomButtonClicked'],
    },
  },
  decorators: [],
  argTypes: {
    ['header-text']: { control: { type: 'text' } },
    ['top-action-icon']: {
      options: Object.values(ICON),
      control: { type: 'select' },
    },
    ['bottom-button-text']: { control: { type: 'text' } },
    ['slot-1']: { control: { type: 'text' } },
    ['slot-2']: { control: { type: 'text' } },
  },
};

const PROPS = ['header-text', 'top-action-icon', 'bottom-button-text'];
const EVENTS = ['topActionClicked', 'bottomButtonClicked'];
const CSS_VARS = ['--plmg-background-primary', '--plmg-text-primary'];
const SLOTS = ['slot-1', 'slot-2'];

const Template = (args) => {
  const el = document.createElement('plmg-card');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Card';
Primary.args = {
  ['header-text']: 'Header',
  ['bottom-button-text']: 'Action',
  ['top-action-icon']: ICON.Home,
  ['slot-1']:
    '<div slot="slot-1" style="background-color: var(--plmg-background-primary); color: var(--plmg-text-primary); min-width: 200px; min-height: 100px; display: flex; align-content: center; justify-content: center; align-items: center;">Slot 1</div>',
  ['slot-2']:
    '<div slot="slot-2" style="background-color: var(--plmg-background-primary); color: var(--plmg-text-primary); min-width: 200px; min-height: 100px; display: flex; align-content: center; justify-content: center; align-items: center;">Slot 2</div>',
};
