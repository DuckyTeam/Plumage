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
  // provides a fixed sized wrapper for the component to inherit height and width from
  const wrapper = document.createElement('div');
  wrapper.style.height = '200px';
  wrapper.style.width = '200px';
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
        `<div style="width: 300px; height: 300px"><plmg-separator thickness="${thickness}"></div>`
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
        `<div style="display: flex;">
            <p>Item 1</p>
            <plmg-separator direction="${direction}"></plmg-separator>
            <p>Item 2</p>
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
