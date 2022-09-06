import { Component, Element, h } from '@stencil/core';

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

  render() {
    return (
      <div class={'plmg-stepper-container'} role={'tablist'}>
        <slot></slot>
      </div>
    );
  }
}
