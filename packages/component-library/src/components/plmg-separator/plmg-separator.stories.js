import * as Utils from '../../stories/StencilStorybookUtils';
import { directions, thicknesses } from './plmg-separator.types';

export default {
  title: 'Component/Separator',
  parameters: {},
  decorators: [],
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: { type: 'select' },
      options: ['thin', 'thick'],
    },
  },
};

const PROPS = ['color', 'direction', 'thickness'];
const EVENTS = [];
const CSS_VARS = [];

const Template = (args) => {
  const el = document.createElement('plmg-separator');
  const wrapper = document.createElement('div');
  wrapper.style.height = '300px';
  wrapper.style.width = '300px';
  Utils.bindProps(el, PROPS, args);
  Utils.bindEvents(el, EVENTS, args);
  Utils.bindStyles(el, CSS_VARS, args);
  wrapper.appendChild(el);
  return wrapper;
};

export const Primary = Template.bind({});
Primary.storyName = 'Separator';
Primary.args = {
  direction: 'horizontal',
  thickness: 'thin',
};

export const AllThicknesses = (args) => {
  const htmlContent = thicknesses
    .map(
      (thickness) =>
        `<div style="width: 300px; height: 300px"><plmg-separator thickness="${thickness}"></plmg separator></div>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllThicknesses.storyName = 'All thicknesses';

export const AllDirections = (args) => {
  const htmlContent = directions
    .map(
      (direction) =>
        `<div style="width: px; height: 300px;">
            <plmg-separator direction="${direction}"></plmg-separator>
          </div>
        `
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllDirections.storyName = 'All directions';

export const AllVariations = (args) => {
  let htmlContent = '';
  directions.forEach((direction) => {
    thicknesses.forEach((thickness) => {
      htmlContent += `<div style="width: 300px; height: 300px;">
      <plmg-separator direction="${direction}" thickness="${thickness}"></plmg-separator>
    </div>
  `;
    });
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllVariations.storyName = 'All variations';
