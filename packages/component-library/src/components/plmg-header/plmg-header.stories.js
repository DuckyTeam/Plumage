import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Header',
  parameters: {},
  decorators: [],
  argTypes: {
    'sidebar-expanded': {
      options: [true, false],
    },
  },
};

const PROPS = ['sidebar-expanded'];
const EVENTS = ['sidebarExpanded'];
const CSS_VARS = [];
const SLOTS = ['right', 'left'];

const Template = (args) => {
  const el = document.createElement('plmg-header');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Header';
Primary.args = {
  'sidebar-expanded': false,
  left: `
<div slot="left" style="display: flex; flex-direction: row; justify-content: space-between;">
  <p>Logo</p>
  <p>Item2</p>
</div>
  `,
  right: `
<div slot="right" style="display: flex; flex-direction: row; justify-content: space-between;">
  <p>Item1</p>
  <p>Item2</p>
</div>
  `,
};
