import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/RadioButton',
  parameters: {},
  decorators: [],
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    value: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    ['selected']: {
      options: [true, false],
    },
    ['highlighted']: {
      options: [true, false],
    },
  },
};

const PROPS = ['size', 'value', 'name', 'selected', 'highlighted'];
const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-radio-button');
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Radio';
Primary.args = {
  size: 'medium',
  value: 'test',
  name: 'formName',
  ['selected']: true,
  ['highlighted']: false,
};

export const All = (args) => {
  let htmlContent = '';
  someControls.forEach((control) => {
    htmlContent += `
<plmg-radio-button control="${control}" >
    control="${control}"
</plmg-radio-button>
<br/>
              `;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
All.storyName = 'All variations';
