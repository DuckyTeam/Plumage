export default {
  title: 'Component/Tabs',
  parameters: {},
  decorators: [],
  argTypes: {},
};

export const Tabs = () => {
  const htmlContent = `
  <plmg-tabs>
    <plmg-tab active label="Tab 1"></plmg-tab>
    <plmg-tab label="Tab 2"></plmg-tab>
    <plmg-tab label="Tab 3"></plmg-tab>
  </plmg-tabs>
  <br/>
  `;

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
Tabs.storyName = 'Tabs';

export const Icons = () => {
  const htmlContent = `
  <plmg-tabs>
    <plmg-tab active icon="home" label="Tab 1"></plmg-tab>
    <plmg-tab icon="accountCircle"></plmg-tab>
  </plmg-tabs>
  <br/>
  `;

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
Icons.storyName = 'Icon Tabs';

export const Disabled = () => {
  const htmlContent = `
  <plmg-tabs>
    <plmg-tab disabled label="Tab 1"></plmg-tab>
  </plmg-tabs>
  <br/>
  `;

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
Disabled.storyName = 'Disabled Tab';

export const AllVariants = () => {
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
AllVariants.storyName = 'All variants';
