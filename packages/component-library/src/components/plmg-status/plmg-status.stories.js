import * as Utils from '../../stories/StencilStorybookUtils';
import { variants } from './plmg-status.types';
import { ICON } from '../plmg-svg-icon/icon.enum';

export default {
  title: 'Component/Status',
  parameters: {},
  decorators: [],
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    ['icon-left']: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
    ['icon-right']: {
      options: [undefined, ...Object.values(ICON)],
      control: { type: 'select' },
    },
  },
};

const PROPS = ['variant', 'icon-left', 'icon-right'];
const SLOTS = ['text'];

const Template = (args) => {
  const el = document.createElement('plmg-status');
  Utils.bindProps(el, PROPS, args);
  Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Status';
Primary.args = {
  variant: 'neutral',
  text: 'Label',
};

export const IconLeft = Template.bind({});
IconLeft.storyName = 'Icon left';
IconLeft.args = {
  variant: 'neutral',
  text: 'Label',
  ['icon-left']: 'duck',
};

export const IconRight = Template.bind({});
IconRight.storyName = 'Icon right';
IconRight.args = {
  variant: 'neutral',
  text: 'Label',
  ['icon-right']: 'duck',
};

export const AllIcons = (args) => {
  const htmlContent = `<plmg-status icon-left='duck' variant="neutral">
    Label
    </plmg-status>
    <plmg-status icon-left='duck' icon-right='duck' variant="neutral">
    Label
    </plmg-status>
    <plmg-status icon-right='duck' variant="neutral">
    Label
    </plmg-status>`;

  const el = document.createElement('div');
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.innerHTML = htmlContent;
  return el;
};
AllIcons.storyName = 'All icons';

export const AllVariants = (args) => {
  let htmlContent = '';

  variants.forEach((variant) => {
    htmlContent += `<plmg-status icon-left="duck" variant="${variant}">
    Label
    </plmg-status>
    <plmg-status icon-right="duck" variant="${variant}">
    Label
    </plmg-status>
    <plmg-status variant="${variant}">
    Label
    </plmg-status>`;
  });

  const el = document.createElement('div');
  el.style.display = 'grid';
  el.style.gridTemplateColumns = 'repeat(3, 1fr)';
  el.style.rowGap = '12px';
  el.innerHTML = htmlContent;

  return el;
};
AllVariants.storyName = 'All variants';
