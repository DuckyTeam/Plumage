import * as Utils from '../../stories/StencilStorybookUtils';
import { sizes } from '../plmg-radio-button/plmg-radio-button.types';

export default {
  title: 'Component/RadioButtonGroup',
  parameters: {},
  decorators: [],
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    ['required']: {
      options: [true, false],
    },
    ['error-message']: {
      control: { type: 'text' },
    },
    ['values']: {
      control: { type: 'array' },
    },
  },
};

const PROPS = ['name', 'size', 'label', 'required', 'error-message'];
const JS_PROPS = ['values'];

const Template = (args) => {
  const el = document.createElement('plmg-radio-button-group');
  Utils.bindProps(el, PROPS, args);
  Utils.bindJSProps(el, JS_PROPS, args);
  return el;
};

export const Primary = Template.bind({});
Primary.storyName = 'RadioButtonGroup';
Primary.args = {
  name: 'Formy McFormFace',
  size: 'medium',
  label: 'Click One',
  ['required']: true,
  ['values']: ['Option 1', 'Option 2'],
};

export const AllSizes = (args) => {
  const htmlContent = sizes
    .map((size) => {
      return `<plmg-radio-button-group size="${size}" label="${size}" name="${size}" values='[
        "some",
        "${size}",
        "radio",
        "buttons"
      ]'></plmg-radio-button-group>`;
    })
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

export const AllRequired = (args) => {
  const htmlContent = [true, false]
    .map(
      (
        required
      ) => `<plmg-radio-button-group size="medium" required="${required}" label="${
        required ? 'Required' : 'Not Required'
      }" name="${required ? 'Required' : 'Not Required'}" values='[
        "some",
        "${required ? 'required' : 'not required'}",
        "radio",
        "buttons"
      ]'></plmg-radio-button-group>`
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
AllRequired.storyName = 'All required';

export const AllErrors = (args) => {
  const htmlContent = [
    `<plmg-radio-button-group size="medium" error-message="Uh Oh! Something awful has happened!!!" label="With Error" name="error" values='[
    "some",
    "error-riddled",
    "radio",
    "buttons"
  ]'></plmg-radio-button-group>`,
    `<plmg-radio-button-group size="medium" label="Without Error" name="no error" values='[
    "some",
    "error-free",
    "radio",
    "buttons"
  ]'></plmg-radio-button-group>`,
  ]
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllErrors.storyName = 'All errors';

export const AllLabels = (args) => {
  const htmlContent = [
    `<plmg-radio-button-group size="medium" name="no label" values='[
    "No",
    "label",
    "here"
  ]'></plmg-radio-button-group>`,
    `<plmg-radio-button-group size="medium" label="With label" name="label" values='[
    "Look",
    "at this",
    "label"
  ]'></plmg-radio-button-group>`,
  ]
    .join('')
    .trim();

  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style['flex-wrap'] = 'wrap';
  return el;
};
AllLabels.storyName = 'All labels';
