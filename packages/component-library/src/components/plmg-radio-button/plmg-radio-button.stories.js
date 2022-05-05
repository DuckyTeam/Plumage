import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-radio-button.types';

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
    ['highlighted']: {
      options: [true, false],
    },
  },
};

const PROPS = ['size', 'value', 'name', 'highlighted'];

const Template = (args) => {
  const el = document.createElement('plmg-radio-button');
  Utils.bindProps(el, PROPS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'RadioButton';
Primary.args = {
  size: 'medium',
  value: 'test',
  name: 'formName',
  ['highlighted']: false,
};

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-radio-button size="${size}" name="${size}" value="${size}"></plmg-radio-button>`
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
AllSizes.storyName = 'All sizes';

export const AllHighlighted = (args) => {
  const htmlContent = [true, false]
    .map(
      (highlighted) =>
        `<plmg-radio-button highlighted="${highlighted}" size="medium" name="${
          highlighted ? 'Highlighted' : 'Not Highlighted'
        }" value="${
          highlighted ? 'Highlighted' : 'Not Highlighted'
        }"></plmg-radio-button>`
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
AllHighlighted.storyName = 'All highlighted';
