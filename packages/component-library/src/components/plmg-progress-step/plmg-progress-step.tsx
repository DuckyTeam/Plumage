import { Prop, Component, Watch, h } from '@stencil/core';
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
   * Define step as a link
   */
  @Prop() href: string;
  @Watch('href')
  validateHref(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('href must be a string');
  }

  /**
   * Define links rel
   */
  @Prop() rel: string;
  @Watch('rel')
  validateRel(newValue: string) {
    if (newValue && !this.href)
      throw new Error('step must have a href to have a rel');
    if (newValue && typeof newValue !== 'string')
      throw new Error('rel must be a string');
  }

  /**
   * Define links target
   */
  @Prop() target: string;
  @Watch('target')
  validateTarget(newValue: string) {
    if (newValue && !this.href)
      throw new Error('step must have a href to have a target');
    if (newValue && typeof newValue !== 'string')
      throw new Error('target must be a string');
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

  render() {
    const stepStateClasses = {
      active: this.active,
      completed: this.completed,
      disabled: this.disabled,
    };

    const linkClasses = {
      'plmg-progress-stepper': true,
      ...stepStateClasses,
    };

    const circleClasses = {
      'plmg-progress-stepper-circle': true,
      ...stepStateClasses,
    };

    const textClasses = {
      'plmg-progress-stepper-text': true,
      ...stepStateClasses,
    };

    if (this.href) {
      return (
        <a
          class={linkClasses}
          href={this.href}
          rel={this.rel}
          target={this.target}
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
        </a>
      );
    }

    return (
      <button class="plmg-progress-stepper">
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
}
