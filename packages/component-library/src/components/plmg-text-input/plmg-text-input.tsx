import {
  Component,
  h,
  Prop,
  Watch,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
import {
  isPlmgTextInputSize,
  PlmgTextInputSize,
} from './plmg-text-input.types';
import * as tokens from '@ducky/plumage-tokens';

@Component({
  tag: 'plmg-text-input',
  styleUrl: 'plmg-text-input.scss',
  shadow: false,
})
export class TextInput {
  @State() value: string;
  /**
   * Define error message
   *
   * Allowed value: any string
   *
   * Sets error style and error message
   */
  @Prop() errorMessage: string;
  @Watch('errorMessage')
  validateError(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('error message must be a string');
  }
  /**
   * Define a label name for the input field.
   *
   * Allowed values:
   * - Any string
   *
   * A unique label name for each element in a form is required for accessibility
   */
  @Prop() label: string;
  @Watch('label')
  validateLabel(newValue: string) {
    if (typeof newValue !== 'string' || !this.label)
      throw new Error('label text is required and must be string');
  }
  /**
   * Define if the label is shown
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: true
   */
  @Prop() showLabel: boolean = true;
  @Watch('showLabel')
  validateShowLabel(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('show label must be boolean');
  }
  /**
   * Define if an input is required.
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: false
   */
  @Prop() required: boolean = false;
  @Watch('required')
  validateRequired(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('required: must be boolean');
  }
  /**
   *
   * Define text input's size
   *
   * Allowed values:
   *   - medium
   *   - large
   *
   * Default: medium
   */
  @Prop() size: PlmgTextInputSize = 'medium';
  @Watch('size')
  validateSize(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('size: required');
    if (!isPlmgTextInputSize(newValue))
      throw new Error('size: must be a valid value');
  }
  /**
   * Define tip
   *
   * Allowed value: any string
   *
   * Displays a tip message
   */
  @Prop() tip: string;
  @Watch('tip')
  validateTipText(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('tip text must be a string');
  }

  private handleInputChange(ev) {
    this.value = ev.target.value;
    this.valueUpdated.emit({ value: this.value });
  }
  /**
   * Event emitted when value changed
   */
  @Event() valueUpdated: EventEmitter;
  /**
   * Life Cycle Methods & Event Listeners
   */

  render() {
    const inputClasses = {
      [this.size]: true,
      ['error']: !!this.errorMessage,
    };

    const tipClasses = {
      'plmg-text-input-tip': true,
      [this.size]: true,
    };

    const labelClasses = {
      [this.size]: true,
      ['visually-hidden']: !this.showLabel,
      'plmg-text-input-label': true,
    };

    return (
      <div class={'plmg-text-input-wrapper'}>
        <label class={labelClasses} htmlFor={this.labelToId()}>
          {this.label}
          {this.showLabel && this.required && <span class={'required'}>*</span>}
        </label>
        <div class={'plmg-text-input-field-wrapper'} tabIndex={0}>
          <input
            class={inputClasses}
            id={this.labelToId()}
            name={this.label}
            required={this.required}
            type={'text'}
            value={this.value}
            onInput={(ev) => this.handleInputChange(ev)}
          />
        </div>
        {this.tip && <span class={tipClasses}>{this.tip}</span>}
        {this.errorMessage && (
          <plmg-error-message
            size={this.size}
            style={{
              marginTop: tokens.plmgSpacingX05,
            }}
            message={this.errorMessage}
          ></plmg-error-message>
        )}
      </div>
    );
  }

  private labelToId() {
    return this.label.toLowerCase().replace(/\s+/g, '-');
  }
}
