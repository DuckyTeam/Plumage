import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-avatar.types';

export default {
  title: 'Component/Avatar',
  parameters: {},
  decorators: [],
  argTypes: {
    ['background-color']: {
      control: { type: 'color' },
    },
    ['icon-color']: {
      control: { type: 'color' },
    },
    size: {
      options: ['small', 'medium', 'large', 'extra-large'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    ['image-url']: {
      control: { type: 'text' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
    ['user-deleted']: {
      control: { type: 'boolean' },
    },
  },
};

const PROPS = [
  'background-color',
  'icon-color',
  'size',
  'image-url',
  'interactive',
  'label',
  'user-deleted',
];

const Template = (args) => {
  const el = document.createElement('plmg-avatar');
  Utils.bindProps(el, PROPS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Avatar';
Primary.args = {
  size: 'medium',
  interactive: true,
  label: 'label',
  ['image-url']: 'https://static.ducky.eco/icons/maskable_icon_192.png',
  ['user-deleted']: false,
};

export const UserDeleted = Template.bind({});
UserDeleted.storyName = 'User Deleted';
UserDeleted.args = {
  size: 'medium',
  ['user-deleted']: true,
};

export const NoImage = Template.bind({});
NoImage.storyName = 'No Image';
NoImage.args = {
  size: 'medium',
};

export const Color = (args) => {
  const backgroundColors = [
    'var(--plmg-color-background-info)',
    'var(--plmg-color-background-success)',
  ];
  const iconColors = [
    'var(--plmg-color-text-info-strong)',
    'var(--plmg-color-text-neutral)',
  ];

  let htmlContent =
    '<p>Default</p><plmg-avatar interactive size="medium" icon="home"></plmg-avatar><p>Examples</p>';

  backgroundColors.forEach((backgroundColor) => {
    iconColors.forEach((iconColor) => {
      htmlContent += `<plmg-avatar interactive size="medium" icon="home" background-color=${backgroundColor} icon-color=${iconColor}></plmg-avatar>`;
    });
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
Color.storyName = 'Color';

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map((size) => `<plmg-avatar size=${size}></plmg-avatar>`)
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';

  return el;
};
AllSizes.storyName = 'All Sizes';

export const AllVariations = (args) => {
  let htmlContent = '';
  sizes.forEach((size) => {
    htmlContent += `<p>Non interactive ${size}</p><plmg-avatar image-url='https://static.ducky.eco/icons/maskable_icon_192.png' size=${size}></plmg-avatar><plmg-avatar size=${size}></plmg-avatar><plmg-avatar user-deleted size=${size}></plmg-avatar>`;
  });
  sizes.forEach((size) => {
    htmlContent += `<p>Interactive ${size}</p><plmg-avatar interactive image-url='https://static.ducky.eco/icons/maskable_icon_192.png' size=${size}></plmg-avatar><plmg-avatar interactive size=${size}></plmg-avatar><plmg-avatar interactive user-deleted size=${size}></plmg-avatar>`;
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gridTemplateColumns = 'repeat(4, 1fr)';
  el.style.fontSize = '14px';
  el.style.gap = '20px';
  el.style.justifyContent = 'space-between';

  return el;
};
AllSizes.storyName = 'All Sizes';
