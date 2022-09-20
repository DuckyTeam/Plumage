import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Dropdown',
  parameters: {},
  decorators: [],
  argTypes: {
    ['trigger']: { control: { type: 'text' } },
    ['menu']: { control: { type: 'text' } },
    ['disable-listeners']: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    align: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
};

const PROPS = ['align', 'disable-listeners'];
const EVENTS = [];
const SLOTS = ['trigger', 'menu'];

const Template = (args) => {
  const el = document.createElement('plmg-dropdown');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Dropdown';
Primary.args = {
  align: 'left',
  ['disable-listeners']: false,
  ['trigger']: `<plmg-avatar style="width: 48px" slot="trigger" size="medium"></plmg-avatar>`,
  ['menu']: `<div slot="menu">
  <plmg-dropdown-item icon="duck" text="Dropdown Item 1" href="https://ducky.eco" target="_blank"></plmg-dropdown-item>
  <plmg-dropdown-item text="Dropdown Item 2" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item>
  <plmg-separator style="padding: 8px 8px; color: #BFCBD1;"></plmg-separator>
  <plmg-dropdown-item text="Dropdown Item 3" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item>
  </div>`,
};

export const AllAlignments = (args) => {
  let htmlContent = ``;
  htmlContent += `
  <div style="display: flex; justify-content: space-between; padding: 32px;">
  <plmg-dropdown align="left" type="nav">
  <plmg-status slot="trigger" variant="info">Left</plmg-status>
  <div slot="menu">
  <plmg-dropdown-item text="Link" href="https://ducky.eco" target="_blank"></plmg-dropdown-item>
  <plmg-separator style="padding: 8px 8px; color: #BFCBD1;"></plmg-separator>
  <plmg-dropdown-item text="Link" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item>
  </div>
  </plmg-dropdown>
    <plmg-dropdown align="right" type="nav">
    <plmg-status slot="trigger" variant="info">Right</plmg-status>
    <div slot="menu">
    <plmg-dropdown-item text="Link" href="https://ducky.eco" target="_blank"></plmg-dropdown-item>
    <plmg-separator style="padding: 8px 8px; color: #BFCBD1;"></plmg-separator>
    <plmg-dropdown-item text="Link" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item>
    </div>
    </plmg-dropdown>
  </div>`;

  return htmlContent;
};
AllAlignments.storyName = 'AllAlignments';
