import * as Utils from '../../stories/StencilStorybookUtils';

export default {
  title: 'Component/ProgressStepper',
  parameters: {},
  decorators: [],
  argTypes: {},
};

export const Stepper = () => {
  const htmlContent = `
  <plmg-progress-stepper>
    <plmg-progress-step step="1" completed="false" disabled="false" active="false">step 1</plmg-progress-step>
    <plmg-progress-step step="2" completed="false" disabled="false" active="false">step 2</plmg-progress-step>
    <plmg-progress-step step="3" completed="false" disabled="false" active="false">step 3</plmg-progress-step>
  </plmg-progress-stepper>
  <br/>
  `;

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
Stepper.storyName = 'Stepper';
