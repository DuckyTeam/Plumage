import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/Header',
  parameters: {},
  decorators: [],
  argTypes: {
    color: {
      options: ['primary', 'neutral', 'standout', 'danger'],
      control: { type: 'select' },
    },
  },
};

const PROPS = ['color'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = ['text'];

const Template = (args) => {
  const el = document.createElement('plmg-header');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'neutral';
Primary.args = {
  text: 'Header',
  color: 'neutral',
};

export const All = (args) => {
  let htmlContent = '';
  someControls.forEach((control) => {
    htmlContent += `
<plmg-header control="${control}" >
    control="${control}"
</plmg-header>
<br/>
              `;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
All.storyName = 'All variations';
