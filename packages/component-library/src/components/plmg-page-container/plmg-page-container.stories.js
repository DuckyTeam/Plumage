import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/PageContainer',
  parameters: {},
  decorators: [],
  argTypes: {},
};

const PROPS = ['color'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['content', 'sidebar', 'header', 'footer'];

const Template = (args) => {
  const el = document.createElement('plmg-page-container');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'neutral';
Primary.args = {
  sidebar: `
<plmg-sidebar>
  <plmg-sidebar-item text="Ducky homepage" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
  <plmg-sidebar-item text="Plumage homepage" href="https://plumage.ducky.eco/" target="_blank"></plmg-sidebar-item>
</plmg-sidebar>
`,
  header: `
<plmg-header></plmg-header>
  `,
  content: `
Hello world I'm here, hiding under the sidebarn I guess at least. Maybe I'm not even visible
  `,
};

export const All = (args) => {
  let htmlContent = '';
  someControls.forEach((control) => {
    htmlContent += `
<plmg-page-container control="${control}" >
    control="${control}"
</plmg-page-container>
<br/>
              `;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
All.storyName = 'All variations';
