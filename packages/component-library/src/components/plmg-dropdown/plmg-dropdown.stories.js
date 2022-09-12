import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Dropdown',
  parameters: {},
  decorators: [],
  argTypes: {
    'sidebar-expanded': {
      options: [true, false],
    },
  },
};

const PROPS = ['logo-href'];
const EVENTS = [''];
const SLOTS = ['children'];

const Template = (args) => {
  const el = document.createElement('plmg-dropdown');
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Dropdown';
Primary.args = {
  children: `
<plmg-avatar size="medium" slot="target"></plmg-avatar>
<div slot="plmg-dropdown-items">
<plmg-dropdown-item icon="duck" text="Dropdown Item 1" href="https://ducky.eco" target="_blank"></plmg-dropdown-item>
<plmg-dropdown-item text="Dropdown Item 2" href="https://plumage.ducky.eco/" target="_blank"></plmg-dropdown-item>
<plmg-separator style="padding: 8px 8px; color: #BFCBD1;"></plmg-separator>
<plmg-dropdown-item text="Dropdown Item 3">Item</plmg-dropdown-item>
</div>
`,
};
