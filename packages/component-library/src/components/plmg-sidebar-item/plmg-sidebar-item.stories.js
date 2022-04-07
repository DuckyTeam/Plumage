import * as Utils from '../../stories/StencilStorybookUtils';
import { ICON } from '../plmg-svg-icon/icon.enum';

export default {
  title: 'Component/SidebarItem',
  parameters: {},
  decorators: [],
  argTypes: {
    active: {
      options: [true, false],
    },
    expanded: {
      options: [true, false],
    },
    href: {
      control: { type: 'text' },
    },
    icon: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
    rel: {
      control: { type: 'text' },
    },
    target: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

const PROPS = ['active', 'expanded', 'href', 'icon', 'rel', 'target', 'text'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['children'];

const Template = (args) => {
  const el = document.createElement('plmg-sidebar-item');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'SidebarItem';
Primary.args = {
  text: 'SidebarItem',
  active: false,
  expanded: false,
  href: '',
  icon: 'home',
  rel: '',
  target: '',
  children: `
<plmg-sidebar-item text="Ducky homepage" href="https://ducky.eco" target="_blank" rel="noreferrer"></plmg-sidebar-item>
<plmg-sidebar-item text="Plumage homepage" href="https://plumage.ducky.eco/" target="_blank" rel="noreferrer"></plmg-sidebar-item>
`,
};

export const AllChildren = (args) => {
  const htmlContent = `
<plmg-sidebar-item text="Level 1 item, no children" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>

<plmg-sidebar-item text="Level 1 item" expanded="true">
    <plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
    <plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
</plmg-sidebar-item>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};

export const AllIcons = (args) => {
  const htmlContent = `
<plmg-sidebar-item text="Level 1 item, no icon, no children" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>

<plmg-sidebar-item text="Level 1 item, icon, no children" icon="home" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>

<plmg-sidebar-item text="Level 1 item, icon, children" icon="home" expanded="true">
    <plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
    <plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
</plmg-sidebar-item>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};

export const AllActive = (args) => {
  const htmlContent = `
<plmg-sidebar-item text="Not active item" href="https://ducky.eco" target="_blank" active="false"></plmg-sidebar-item>

<plmg-sidebar-item text="Active item" href="https://ducky.eco" target="_blank" active="true"></plmg-sidebar-item>

<plmg-sidebar-item text="Level 1 item" expanded="true">
    <plmg-sidebar-item text="Active level 2 item" href="https://ducky.eco" target="_blank" active="true"></plmg-sidebar-item>
    <plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>
</plmg-sidebar-item>
`;

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};

export const AllVariations = (args) => {
  const actives = [true, false];
  const expandeds = [true, false];
  const icons = ['', 'home'];
  const children = [
    [],
    [
      '<plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>',
      '<plmg-sidebar-item text="Level 2 item" href="https://ducky.eco" target="_blank"></plmg-sidebar-item>',
    ],
  ];

  let htmlContent = '';
  actives.forEach((active) => {
    expandeds.forEach((expanded) => {
      icons.forEach((icon) => {
        children.forEach((child) => {
          htmlContent += `
<plmg-sidebar-item active="${active}" expanded="${expanded}" icon="${icon}" text="${
            child.length > 0 ? 'With children' : 'No children'
          } active=${active} expanded=${expanded} icon=${icon}" href="https://ducky.eco" target="_blank">
    ${child.join(' ')}
</plmg-sidebar-item>
<br/>
              `;
        });
      });
    });
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
