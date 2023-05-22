import {
  Component,
  h,
  Prop,
  Watch,
  State,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';
import {
  isPlmgTextInputSize,
  PlmgTextInputType,
  isPlmgTextInputType,
  PlmgTextInputSize,
} from './plmg-text-input.types';

@Component({
  tag: 'plmg-text-input',
  styleUrl: 'plmg-text-input.scss',
  shadow: false,
})
export class TextInput {
  private inputId: string;
  /**
   * Reference to host HTML element.
   */
  @Element()
  el: HTMLElement;
  /**
   * Define autocomplete
   *
   * Allowed value: any string
   *
   * Default: off
   */
  @Prop() autoComplete: string = 'off';
  @Watch('autoComplete')
  validateAutocomplete(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('autoComplete must be string');
  }

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
   * Define a label for the input field.
   *
   * Allowed values:
   * - Any string
   *
   * A unique label for each element in a form is required for accessibility
   */
  @Prop() label!: string;
  @Watch('label')
  validateLabel(newValue: string) {
    if (typeof newValue !== 'string' || !this.label)
      throw new Error('label text is required and must be string');
  }

  /**
   * Define the maximum value when type is number
   *
   * Allowed values:
   * - Any number
   *
   * Only vaiid for type: number
   *
   * Default: none
   */
  @Prop() max: number;
  @Watch('max')
  validateMax(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('max must be a number');
  }

  /**
   * Define the maximum character length
   *
   * Allowed values:
   * - Any number
   *
   * Only valid for types: text, search, url, tel, email, and password
   *
   * Default: none
   */
  @Prop() maxLength: number;
  @Watch('maxLength')
  validateMaxLength(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('max length must be a number');
  }

  /**
   * Define the min value when type is number
   *
   * Allowed values:
   * - Any number
   *
   * Only vaiid for type: number
   */
  @Prop() min: number;
  @Watch('min')
  validateMin(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('min must be a number');
  }

  /**
   * Define the mininum character length
   *
   * Allowed values:
   * - Any number
   *
   * Only valid for types: text, search, url, tel, email, and password
   *
   * Default: none
   */
  @Prop() minLength: number;
  @Watch('minLength')
  validateMxinLength(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('min length must be a number');
  }

  /**
   * Define a name for the input field.
   *
   * Allowed values:
   * - Any string
   *
   * Provide each input element with a unique name
   */
  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (typeof newValue !== 'string' || !this.name)
      throw new Error('name must be string');
  }

  /**
   * Define a regular expression pattern for constraint validation
   *
   * Allowed value: any string
   *
   * Only valid for types: text, search, url, tel, email, and password
   *
   * Default: none
   */
  @Prop() pattern: string;
  @Watch('pattern')
  validatePattern(newValue: string) {
    if (typeof newValue !== 'string')
      throw new Error('pattern must be a string');
  }

  /**
   * Define a placeholder text
   *
   * Allowed value: any string
   *
   * Placeholder does not set a value.
   *
   * Default: none
   */
  @Prop() placeholder: string;
  @Watch('placeholder')
  validatePlaceholder(newValue: string) {
    if (typeof newValue !== 'string')
      throw new Error('placeholder must be a string');
  }

  /**
   * Define readonly
   *
   * Allowed value: boolean
   *
   * Makes text input read only
   *
   * Default: false
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
   * Define the step value when type is number.
   *
   * Allowed values:
   * - Any number
   *
   * Only vaiid for type: number
   *
   * Default: 1
   */
  @Prop() step: number;
  @Watch('step')
  validateStep(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('step must be a number');
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
   * Define type
   *
   * Allowed values:
   * -text
   * -email
   * -password
   * -tel
   * -url
   * -search
   * -number
   *
   * Set the type of the input field
   *
   * Default: text
   */
  @Prop() type: PlmgTextInputType = 'text';
  @Watch('type')
  validateTypes(newValue: string) {
    if (
      typeof newValue !== 'string' ||
      newValue === '' ||
      !isPlmgTextInputType(newValue)
    )
      throw new Error('type must be a valid value');
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

  /**
   * Define width
   *
   * Allowed values:
   * - Any positive number greater than 0
   *
   * Sets the width of the text input, by default width is set to 100% of the parent container
   */
  @Prop() width: number;
  @Watch('width')
  validateWidth(newValue: number) {
    if (typeof newValue !== 'number' || newValue < 1)
      throw new Error('width must be a positive number');
  }

  @State() internalValue: string;
  private handleInputChange = (target: EventTarget) => {
    this.internalValue = (target as HTMLInputElement).value;
    const validityState = this.el.querySelector('input').validity;
    this.valueUpdated.emit({
      value: this.internalValue,
      validityState: validityState,
    });
  };
  /**
   * Event emitted when value changed. Event emitted is an object with the following properties:
   * - value: value of the input
   * - validityState: object containing constraint validityState properties
   */
  @Event() valueUpdated: EventEmitter<{
    value: string;
    validityState: ValidityState;
  }>;

  connectedCallback() {
    this.internalValue = this.value;
  }

  componentWillLoad() {
    this.validateSize(this.size);
    this.inputId = this.generateId();
  }

  render() {
    const inputClasses = {
      [this.size]: true,
      ['full-width']: !this.width,
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
        <label class={labelClasses} htmlFor={this.inputId}>
          {this.label}
          {this.showLabel && this.required && <span class={'required'}>*</span>}
        </label>
        <input
          id={this.inputId}
          autoComplete={this.autoComplete}
          class={inputClasses}
          disabled={this.disabled}
          max={this.max}
          maxlength={this.maxLength}
          min={this.min}
          minlength={this.minLength}
          name={this.name}
          onInput={(event) => this.handleInputChange(event.target)}
          pattern={this.pattern}
          placeholder={this.placeholder}
          readonly={this.readOnly}
          required={this.required}
          step={this.step}
          style={{
            width: this.width && this.width + 'px',
          }}
          // supress the default browser validation popup
          title={''}
          type={this.type}
          value={this.internalValue}
          onWheel={(e) => {
            if (e.target instanceof HTMLElement) {
              e.target.blur();
            }
          }}
        />
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

  private generateId() {
    return `plmg-${uuidv4()}`;
  }
}
