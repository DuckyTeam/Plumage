import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from './plmg-text-input.types';

export default {
  title: 'Component/TextInput',
  parameters: {},
  decorators: [],
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
    ['error-message']: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    filled: {
      control: { type: 'boolean' },
    },
    ['label-visible']: {
      control: { type: 'boolean' },
    },
    ['label-text']: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    ['tip-text']: {
      control: { type: 'text' },
    },
    ['tip']: {
      control: { type: 'boolean' },
    },
    type: {
      options: ['text', 'number'],
      control: { type: 'select' },
    },
  },
};

const PROPS = [
  'default',
  'error',
  'error-message',
  'filled',
  'label-visible',
  'label-text',
  'name',
  'required',
  'tip',
  'tip-text',
  'type',
];

const EVENTS = [];
const CSS_VARS = [];
const SLOTS = [];

const Template = (args) => {
  const el = document.createElement('plmg-text-input');
  Utils.bindProps(el, PROPS, args);
  // Utils.bindEvents(el, EVENTS, args);
  // Utils.bindStyles(el, CSS_VARS, args);
  // Utils.bindSlots(el, SLOTS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'Text Input';
Primary.args = {
  ['label-text']: 'Text Input',
  size: 'medium',
  ['label-visible']: false,
};

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map(
      (size) =>
        `<plmg-text-input label-text=${size} size="${size}" labelfilled default="${size}"></plmg-text-input>`
    )
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';

  return el;
};
AllSizes.storyName = 'All Sizes';

export const LabelVisible = Template.bind({});
LabelVisible.storyName = 'Label';
LabelVisible.args = {
  ['label-text']: 'Text Input',
  ['label-visible']: true,
  ['label-text']: 'Label Text',
};

export const Error = Template.bind({});
Error.storyName = 'Error';
Error.args = {
  error: true,
  ['label-text']: 'Text Input',
  ['error-message']: 'Error Message',
};

export const Filled = Template.bind({});
Filled.storyName = 'Filled';
Filled.args = {
  ['label-text']: 'Filled with default',
  filled: true,
  ['default']: 'Default',
};

export const TipText = Template.bind({});
TipText.storyName = 'Tip Text';
TipText.args = {
  tip: true,
  ['label-text']: 'Tip Text',
  ['tip-text']: 'Helpful Text',
};

export const Required = Template.bind({});
Required.storyName = 'Required';
Required.args = {
  ['label-visible']: true,
  ['label-text']: 'Required',
  required: true,
};

export const AllOn = Template.bind({});
AllOn.storyName = 'AllOn';
AllOn.args = {
  name: 'TextInput',
  filled: true,
  default: 'really long default text that might things weird',
  ['label-visible']: true,
  ['label-text']: 'All On Medium',
  tip: true,
  ['tip-text']: 'Helpful Text',
  error: true,
  ['error-message']: 'Error message',
  required: true,
};

export const AllVariations = (args) => {
  const filled = [false, true];
  const LabelVisible = [false, true];
  const tips = [false, true];
  const required = [false, true];

  // labael
  let htmlContent = '';
  htmlContent += `<span>Label</span>`;
  LabelVisible.forEach((label) => {
    tips.forEach((tip) => {
      if (label)
        required.forEach((require) => {
          htmlContent += `
      <plmg-text-input tip=${tip} required=${require} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
        });
      else
        htmlContent += `
      <plmg-text-input tip=${tip} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
    });
  });

  // error
  htmlContent += `<span>Error</span>`;
  LabelVisible.forEach((label) => {
    tips.forEach((tip) => {
      if (label)
        required.forEach((require) => {
          htmlContent += `
      <plmg-text-input error error-message='Error message' required=${require} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
        });
      else
        htmlContent += `
      <plmg-text-input error error-message='Error message' tip=${tip} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
    });
  });

  htmlContent += `<span>Filled</span>`;
  LabelVisible.forEach((label) => {
    tips.forEach((tip) => {
      if (label)
        required.forEach((require) => {
          htmlContent += `
      <plmg-text-input filled default='filled' error-message='Error message' required=${require} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
        });
      else
        htmlContent += `

      <plmg-text-input filled default='filled' error-message='Error message' tip=${tip} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
    });
  });

  htmlContent += `<span>Filled Error</span>`;
  LabelVisible.forEach((label) => {
    tips.forEach((tip) => {
      if (label)
        required.forEach((require) => {
          htmlContent += `
      <plmg-text-input error error-message='Error message' filled default='filled' error-message='Error message' required=${require} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
        });
      else
        htmlContent += `
      <plmg-text-input error error-message='Error message' filled default='filled' error-message='Error message' tip=${tip} tip-text='Helpful message' label-visible=${label} label-text="Label"></plmg-text-input>
      `;
    });
  });
  // errors.forEach((error) => {
  //   LabelVisible.forEach((label) => {
  //     tip.forEach((tip) => {
  //       sizes.forEach((size) => {
  //         filled.forEach((fill) => {
  //           if (error) {
  //             htmlContent += `
  //   <plmg-text-input size="${size}" label label-text="${size}" tip tip-text="helpful message" error=${error} error-message="User, we have an error" filled="${fill}" default="filled"></plmg-text-input>`;
  //           } else {
  //             htmlContent += `
  //       <plmg-text-input size="${size}" filled="${fill}" default="${size}"></plmg-text-input>`;
  //           }
  //         });
  //       });
  //     });
  //   });
  // });

  const el = document.createElement('div');

  el.innerHTML = htmlContent;
  el.style.display = 'grid';
  el.style.gap = '16px';
  el.style.gridTemplateColumns = '30px repeat(6, 1fr)';
  el.style.gridTemplateRows = 'repeat(6, 180px)';

  console.log(el);

  return el;
};
AllVariations.storyName = 'All variations';
