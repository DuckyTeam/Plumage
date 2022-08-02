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

const PROPS = ['size', 'image-url', 'interactive', 'user-deleted'];

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
    'https://static.ducky.eco/icons/maskable_icon_192.png',
    undefined,
  ];

  let htmlContent = '';
  imageUrl.forEach((image) => {
    userDeleted.forEach((deleted) => {
      sizes.forEach((size) => {
        if (image) {
          htmlContent += `<plmg-avatar interactive image-url=${image} size=${size}></plmg-avatar>`;
        } else {
          htmlContent += `<plmg-avatar interactive user-deleted=${deleted} size=${size}></plmg-avatar>`;
        }
      });
    });
  });

  console.log(htmlContent);

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gridTemplateColumns = 'repeat(4, 1fr)';
  el.style.gap = '20px';
  el.style.justifyContent = 'space-between';

  return el;
};
AllSizes.storyName = 'All Sizes';
