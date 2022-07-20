import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Tabs',
  parameters: {},
  decorators: [],
  argTypes: {},
};

const PROPS = ['color'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['text'];

const Template = (args) => {
  const el = document.createElement('plmg-tabs');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'neutral';
Primary.args = {
  text: 'Tabs',
  color: 'neutral',
};

export const All = () => {
  const htmlContent = `
  <plmg-tabs>
    <plmg-tab active label="Tab 1"></plmg-tab>
    <plmg-tab label="Tab 2" icon="home"></plmg-tab>
    <plmg-tab label="Tab 3" disabled></plmg-tab>
    <plmg-tab icon="accessibleForward"></plmg-tab>
  </plmg-tabs>
  <br/>
  `;

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
All.storyName = 'All variations';
