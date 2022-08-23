import { Prop, Component, h, Watch } from '@stencil/core';
import {
  plmgColorBorderInfo,
  plmgColorBorderNeutral,
} from '@ducky/plumage-tokens';
//plmgSpacingX075
@Component({
  tag: 'plmg-progress-stepper',
  styleUrl: 'plmg-progress-stepper.scss',
  shadow: true,
})

// type StepperProps = {
//   index: number;
//   text: string;
//   completed?: boolean;
//   current?: boolean;
//   inactive?: boolean;
//   last?: boolean;
//   onClick: () => void;
// };
export class ProgressStepper {
  /**
   * Define disabled state
   *
   * Default: true
   */
  @Prop() disabled: boolean = false;
  @Watch('disabled')
  validateDisabled(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('completed must be boolean');
  }

  /**
   * Define completed state
   *
   * Default: false
   */
  @Prop() completed: boolean = false;
  @Watch('completed')
  validateCompleted(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('completed must be boolean');
  }

  /**
   * Define active state
   *
   * Default: false
   */
  @Prop() active: boolean = false;
  @Watch('active')
  validateActive(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('completed must be boolean');
  }

  /**
   * Define a description text for the stepper
   */
  @Prop() description: string;
  @Watch('description')
  validateDescription(newValue: boolean) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('description must be a string');
  }

  /**
   * Define completed state
   *
   * Default: false
   */
  @Prop() stepNumber: number;
  @Watch('stepNumber')
  validateStepNumber(newValue: number) {
    if (newValue && typeof newValue !== 'number')
      throw new Error('completed must be number');
  }

  render() {
    const stepStateClasses = {
      active: this.active,
      completed: this.completed,
      disabled: this.disabled,
    };
    const circleClasses = {
      'plmg-progress-stepper-circle': true,
      ...stepStateClasses,
    };

    const textClasses = {
      'plmg-progress-stepper-text': true,
      ...stepStateClasses,
    };

    return (
      <button class="plmg-progress-stepper">
        <div>
          <div class={circleClasses}>
            {this.completed ? (
              <plmg-svg-icon icon="check" />
            ) : (
              <span class="plmg-progress-stepper-circle-content">
                {this.stepNumber}
              </span>
            )}
          </div>
        </div>
        <div class={textClasses}>
          <slot></slot>
          <span class="plmg-progress-stepper-description">
            {this.description}
          </span>
        </div>
        <plmg-separator
          class="plmg-progress-stepper-separator"
          color={this.completed ? plmgColorBorderInfo : plmgColorBorderNeutral}
          thickness="thick"
        ></plmg-separator>
      </button>
    );
  }
}

//   completed ? ' completed-wrapper' : ''
// }${current ? ' current-wrapper' : ''}${
//   inactive ? ' inactive-wrapper' : ''
// }`

/* <div
          class={'stepper-class-not-class-clickable'}

          // class={`${
          //   inactive ? 'stepper-circle-not-clickable' : 'stepper-circle-clickable'
          // }`}
          // onClick={inactive ? () => {} : onClick}
        > */
