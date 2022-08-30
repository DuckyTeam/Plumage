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
    <plmg-progress-step step="1" href="#" completed description="done">completed</plmg-progress-step>
    <plmg-progress-step step="2" href="#" description="active" active>active</plmg-progress-step>
    <plmg-progress-step step="3" href="#" description="default">not completed</plmg-progress-step>
    <plmg-progress-step step="4" href="#" disabled separator="false" description="unclickable">disabled</plmg-progress-step>
  </plmg-progress-stepper>
  <br/>
  `;

  const el = document.createElement('div');
  el.innerHTML = htmlContent.trim();
  return el;
};
Stepper.storyName = 'Stepper';
