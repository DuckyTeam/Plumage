import { Prop, Component, Watch, h, Event, EventEmitter } from '@stencil/core';
import {
  plmgColorBorderInfo,
  plmgColorBorderNeutral,
} from '@ducky/plumage-tokens';

@Component({
  tag: 'plmg-progress-step',
  styleUrl: 'plmg-progress-step.scss',
  shadow: true,
})
export class ProgressStep {
  /**
   * Define active state
   *
   * Default: false
   */
  @Prop() active: boolean = false;
  @Watch('active')
  validateActive(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('active must be boolean');
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
   * Define a description text for the stepper
   */
  @Prop() description: string;
  @Watch('description')
  validateDescription(newValue: boolean) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('description must be a string');
  }

  /**
   * Define disabled state
   *
   * Default: true
   */
  @Prop() disabled: boolean = false;
  @Watch('disabled')
  validateDisabled(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('disabled must be boolean');
  }

  /**
   * Define if separator should be rendered
   *
   * Default: true
   */
  @Prop() separator: boolean = true;
  @Watch('separator')
  validateSeparator(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('separator must be boolean');
  }
  /**
   * Define step number
   *
   * Required
   */
  @Prop() step!: number;
  @Watch('step')
  validateStepNumber(newValue: number) {
    if (newValue && typeof newValue !== 'number')
      throw new Error('completed must be number');
  }
  /**
   * Exposes click handler event. Only exposed when interactive is true.
   **/
  @Event() stepClick: EventEmitter<MouseEvent>;

  render() {
    const stepClasses = {
      active: this.active,
      completed: this.completed,
      disabled: this.disabled,
      'plmg-progress-step': true,
    };

    const circleClasses = {
      'plmg-progress-stepper-circle': true,
      ...stepClasses,
    };

    const textClasses = {
      'plmg-progress-stepper-text': true,
      ...stepClasses,
    };

    return (
      <button
        class={stepClasses}
        onClick={
          !this.disabled || !this.active ? (e) => this.stepClick.emit(e) : null
        }
        disabled={this.disabled}
      >
        <div class={circleClasses}>
          {this.completed ? (
            <plmg-svg-icon icon="check" />
          ) : (
            <span class="plmg-progress-stepper-circle-content">
              {this.step}
            </span>
          )}
        </div>

        <div class={textClasses}>
          <slot></slot>
          <span class="plmg-progress-stepper-description">
            {this.description}
          </span>
        </div>
        {this.separator ? (
          <plmg-separator
            class="plmg-progress-stepper-separator"
            color={
              this.completed ? plmgColorBorderInfo : plmgColorBorderNeutral
            }
            thickness="thick"
          ></plmg-separator>
        ) : null}
      </button>
    );
  }
}
