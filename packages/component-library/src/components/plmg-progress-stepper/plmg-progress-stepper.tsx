import { Component, Element, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'plmg-progress-stepper',
  styleUrl: 'plmg-progress-stepper.scss',
  shadow: true,
})
export class ProgressStepper {
  /**
   * Reference to host HTML element.
   */
  @Element()
  el: HTMLElement;

  /**
   * Store the steps to be rendered in an array.
   */
  @State() steps: HTMLPlmgProgressStepElement[] = [];

  /**
   * On componentWillLoad dynamically grab tabs from the component to query and render.
   */

  // set prop with active step

  @Prop() activeStep: number = 0;
  @Watch('activeStep')
  validateActiveStep(newValue: number) {
    if (typeof newValue !== 'number' || newValue === 0)
      throw new Error('activeStep: required');
  }

  componentWillLoad() {
    this.steps = Array.from(this.el.querySelectorAll('plmg-progress-step'));
    if (this.steps.length === 0) {
      throw new Error('<plmg-stepper> Must have at least one step');
    }
    this.steps.forEach((step, index) => {
      if (index === this.activeStep) {
        step.active = true;
      }
    });
  }

  render() {
    return (
      <div class={'plmg-progress-stepper'}>
        <slot></slot>
      </div>
    );
  }
}
