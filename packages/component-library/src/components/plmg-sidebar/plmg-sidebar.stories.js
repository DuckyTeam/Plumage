import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Sidebar',
  parameters: {},
  decorators: [],
  argTypes: {
    expanded: {
      options: [true, false],
    },
  },
};

const PROPS = ['expanded'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['children'];

const Template = (args) => {
  const el = document.createElement('plmg-sidebar');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Sidebar';
Primary.args = {
  expanded: false,
  children: `
<plmg-sidebar-item text="Ducky homepage" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
<plmg-sidebar-item text="Plumage homepage" href="https://plumage.ducky.eco/" target="_blank"></plmg-sidebar-item>
  `,
};
