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

@Component({
  tag: 'plmg-text-input',
  styleUrl: 'plmg-text-input.scss',
  shadow: false,
})
export class TextInput {
  /**
   * Define disabled
   *
   * Allowed value: boolean
   *
   * Disables text input
   */
  @Prop() disabled: boolean = false;
  @Watch('disabled')
  validateDisabled(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('disabled must be boolean');
  }
  /**
   * Define error message
   *
   * Allowed value: any string
   *
   * Sets error style and error message
   */
  @Prop() errorMessage: string;
  @Watch('errorMessage')
  validateErrorMessage(newValue: string) {
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
  @Prop() label!: string;
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
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('show label must be boolean');
  }
  /**
   * Define readonly
   *
   * Allowed value: boolean
   *
   * Makes text input read only
   */
  @Prop() readOnly: boolean = false;
  @Watch('readOnly')
  validateReadOnly(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('readOnly must be boolean');
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
      throw new Error('required must be a boolean');
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
    if (
      typeof newValue !== 'string' ||
      newValue === '' ||
      !isPlmgTextInputSize(newValue)
    )
      throw new Error('size must be a valid value');
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
  /**
   * Control the text input's value
   *
   * Allowed values:
   * - Any string
   *
   * Sets the value of the text input
   */
  @Prop() value: string;
  @Watch('value')
  validateValue(newValue: string) {
    if (typeof newValue !== 'string') throw new Error('value must be a string');
  }
  @Watch('value')
  setValue(newValue: string) {
    this.internalValue = newValue;
  }

  @State() internalValue: string;
  private handleInputChange(ev) {
    this.internalValue = ev.target.value;
    this.valueUpdated.emit({ value: this.internalValue });
  }
  /**
   * Event emitted when value changed
   */
  @Event() valueUpdated: EventEmitter<{ value: string }>;

  connectedCallback() {
    this.internalValue = this.value;
  }

  componentWillLoad() {
    this.validateSize(this.size);
  }

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
            disabled={this.disabled}
            class={inputClasses}
            id={this.labelToId()}
            name={this.label}
            required={this.required}
            type={'text'}
            readonly={this.readOnly}
            value={this.internalValue}
            onInput={(ev) => this.handleInputChange(ev)}
          />
        </div>
        {this.tip && <span class={tipClasses}>{this.tip}</span>}
        {this.errorMessage && (
          <plmg-error-message
            size={this.size}
            class={'plmg-text-input-error-message'}
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
