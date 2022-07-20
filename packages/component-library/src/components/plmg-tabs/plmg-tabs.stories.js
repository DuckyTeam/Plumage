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

export const Scrolling = () => {
  const htmlContent = `
  <plmg-tabs>
    <plmg-tab active label="Tab One"></plmg-tab>
    <plmg-tab label="Tab Two"></plmg-tab>
    <plmg-tab label="Tab Three"></plmg-tab>
    <plmg-tab label="Tab Four"></plmg-tab>
    <plmg-tab label="Tab Five"></plmg-tab>
    <plmg-tab label="Tab Six"></plmg-tab>
    <plmg-tab label="Tab Seven"></plmg-tab>
    <plmg-tab label="Tab Eight"></plmg-tab>
    <plmg-tab label="Tab Nine"></plmg-tab>
    <plmg-tab label="Tab Ten"></plmg-tab>
    <plmg-tab label="Tab Eleven"></plmg-tab>
    <plmg-tab label="Tab Twelve"></plmg-tab>
    <plmg-tab label="etc."></plmg-tab>
  </plmg-tabs>
  <br/>
  `;

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
Scrolling.storyName = 'Scrollable Tabs';

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
