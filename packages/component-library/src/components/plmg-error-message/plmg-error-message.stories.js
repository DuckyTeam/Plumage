import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-error-message.types';

export default {
  title: 'Component/ErrorMessage',
  parameters: {},
  decorators: [],
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    ['message']: {
      control: { type: 'text' },
    },
  },
};

const PROPS = ['size', 'message'];

const Template = (args) => {
  const el = document.createElement('plmg-error-message');
  Utils.bindProps(el, PROPS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'ErrorMessage';
Primary.args = {
  size: 'medium',
  ['message']: 'Error message',
};

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-error-message size="${size}" message="${size}"></plmg-error-message>`
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
