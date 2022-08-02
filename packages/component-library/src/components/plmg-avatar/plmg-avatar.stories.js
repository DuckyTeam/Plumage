import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-avatar.types';

export default {
  title: 'Component/Avatar',
  parameters: {},
  decorators: [],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'extra-large'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    interactive: {
      control: { type: 'boolean' },
    },
    ['image-url']: {
      control: { type: 'text' },
    },
    ['user-deleted']: {
      control: { type: 'boolean' },
    },
  },
};

const PROPS = ['size', 'image-url', 'interactive', 'label', 'user-deleted'];

const Template = (args) => {
  const el = document.createElement('plmg-avatar');
  Utils.bindProps(el, PROPS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Avatar';
Primary.args = {
  size: 'medium',
  ['image-url']: 'https://static.ducky.eco/icons/maskable_icon_192.png',
  interactive: true,
  ['user-deleted']: false,
  label: 'user avatar',
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
  const userDeleted = [true, false];
  const imageUrl = [
    undefined,
    'https://static.ducky.eco/icons/maskable_icon_192.png',
  ];

  let htmlContent = '';
  imageUrl.forEach((image) => {
    userDeleted.forEach((deleted) => {
      sizes.forEach((size) => {
        if (image && !deleted) {
          htmlContent += `<plmg-avatar image-url=${image} size=${size}></plmg-avatar>`;
        } else if (image || !deleted) {
          htmlContent += `<plmg-avatar user-deleted=${deleted} size=${size}></plmg-avatar>`;
        }
      });
    });
  });

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gridTemplateColumns = 'repeat(4, 1fr)';
  el.style.gap = '20px';
  el.style.justifyContent = 'space-between';

  return el;
};
AllSizes.storyName = 'All Sizes';
