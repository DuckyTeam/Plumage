import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/PageContainer',
  parameters: {},
  decorators: [],
  argTypes: {},
};

const PROPS = [];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['content', 'sidebar', 'header'];

const Template = (args) => {
  const el = document.createElement('plmg-page-container');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'PageContainer';
Primary.args = {
  sidebar: `
<plmg-sidebar slot="sidebar" logo-src="https://storage.googleapis.com/ducky_static_assets/ducky_logo_horisontal_azur.png" logo-href="/">
  <plmg-sidebar-item text="Ducky homepage" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
  <plmg-sidebar-item text="Plumage homepage" href="https://plumage.ducky.eco/" target="_blank"></plmg-sidebar-item>
</plmg-sidebar>
`,
  header: `
<plmg-header slot="header"></plmg-header>
  `,
  content: `
<div slot="content" style="padding: 20px;">
    Hello world I'm the main content of the page
</div>
  `,
};
