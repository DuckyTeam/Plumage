import {
  Component,
  Element,
  h,
  State,
  Event,
  EventEmitter,
  Fragment,
} from '@stencil/core';

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
  @State()
  steps: HTMLPlmgProgressStepElement[] = [];

  /**
   * On componentWillLoad dynamically grab steps from the component to query and render.
   */
  componentWillLoad() {
    this.steps = Array.from(this.el.querySelectorAll('plmg-progress-step'));
    if (this.steps.length === 0) {
      throw new Error('<plmg-stepper> Must have at least one step');
    }
  }

  render() {
    return (
      <div class={'plmg-stepper-container'} role={'tablist'}>
        <slot>
          {this.steps.map(
            (step: HTMLPlmgProgressStepElement, index: number) => step
          )}
        </slot>
      </div>
    );
  }
}
