import { Component, Host, h, Prop, Element, Watch, State } from '@stencil/core';
import {
  isPlmgTextInputSize,
  isPlmgTextInputType,
  PlmgTextInputSize,
  PlmgTextInputType,
} from './plmg-text-input.types';

@Component({
  tag: 'plmg-text-input',
  styleUrl: 'plmg-text-input.scss',
  shadow: true,
})
export class TextInput {
  /**
   * Reference to host HTML element.
   */
  @Element() el!: HTMLElement;
  /**
   * Reference to host HTML element.
   */
  @State() value: number | string;
  @State() hasFocus: boolean = false;
  @State() isActive: boolean = false;
  @State() isHovered: boolean = false;
  @State() isValidated: boolean = false;
  @State() isError: boolean = false;
  /**
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
   * Define text input's types.
   *
   * Sets type on the native HTML input element.
   *
   * Allowed values:
   *   - text
   *   - number
   *
   * Default: text
   */
  @Prop() type: PlmgTextInputType = 'text';
  @Watch('type')
  validateType(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('type: required');
    if (!isPlmgTextInputType(newValue))
      throw new Error('type: must be a valid value');
  }
  /**
   * Provide an name to label the input.
   *
   * Name is required for accessibility.
   */
  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (newValue && typeof newValue !== 'string' && !this.name)
      throw new Error('name must have a name and be a string');
  }
  /**
   * Define if the label is displayed.
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: true
   */
  @Prop() label: boolean = true;
  @Watch('label')
  validateLabel(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('label: must be boolean');
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
   * Define step
   *
   * When type is set to number, step will increase or decrease the stepValue of the input field
   *
   * Allowed values
   * - Any number
   *
   * When type is number and step is not defined, step defaults to 1
   */
  @Prop() step: number;
  @Watch('step')
  validateStep(newValue: number) {
    if (typeof newValue !== 'number' || newValue <= 0)
      throw new Error('step must be a positive number');
  }
  /**
   * Define min
   *
   * When type is set to number, min sets the minimum allowed value
   *
   * Allowed values
   * - Any number
   *
   * When type is number and step is not defined, min defaults to 0
   */
  @Prop() min: number;
  @Watch('min')
  validateMin(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('min must be a number');
  }
  /**
   * Define max
   *
   * When type is set to number, max sets the maximum allowed value
   *
   * Allowed values
   * - Any number
   *
   * When type is number and step is not defined, no max value is set
   */
  @Prop() max: number;
  @Watch('max')
  validateMax(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('max must be a number');
  }
  /**
   * Define defaultValue
   *
   * Allowed values
   * - Any number
   * - Any string
   *
   * When type is set to number
   */
  @Prop() defaultValue: number | string;
  @Watch('defaultValue')
  validateDefaultValue(newValue: number | string) {
    if (typeof newValue !== 'number' || 'string')
      throw new Error('defaultValue must be a number or string');
  }
  /**
   * Define if input value is pre-filled with defaultValue.
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: false
   */
  @Prop() filled: boolean = false;
  @Watch('filled')
  validateFilled(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('filled: must be boolean');
  }
  /**
   * Define tip text.
   *
   * Allowed value: any string
   */
  @Prop() tipText: string;
  @Watch('tipText')
  validateTipText(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('tip text must be a string');
  }
  /**
   * Define if tip text is displayed.
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: false
   */
  @Prop() tipTextShow: boolean = false;
  @Watch('tipTextShow')
  validateTipTextShow(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('tipTextShow: must be boolean');
  }
  /**
   * Define error message.
   *
   * Allowed value: any string
   *
   * Displayed when text input state is in error.
   */
  @Prop() errorMessage: string;
  @Watch('errorMessage')
  validateTipContent(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('text must be a string');
  }

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   *
   * import { State } from '@stencil/core';
   */
  // @State() isValidated: boolean;
  connectedCallback() {
    this.setValues();
  }

  private setValues() {
    // if (this.type === "text" && this.val)
    // this.min = this.rangeValues[0];
    // this.max = this.rangeValues[this.rangeValues.length - 1];
    // if (
    //   this.defaultValue >= this.minValue &&
    //   this.defaultValue <= this.maxValue
    // ) {
    //   this.updateValue(this.defaultValue);
    // } else {
    //   this.updateValue(this.minValue);
    // }
    // if (!this.step) {
    //   this.stepValue = (this.maxValue - this.minValue) / 100;
    // } else {
    //   this.stepValue = this.step;
    // }
  }

  private handleInputChange(ev) {
    this.value = ev.target.value;
  }

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   *
   * import { Prop, Watch } from '@stencil/core';
   */
  // @Prop() fullWidth: boolean = false;
  /** Prop lifecycle events SHOULD go just behind the Prop they listen to. */
  // @Watch('fullWidth')
  // validateFullWidth(newValue: boolean) {
  //   if (typeof newValue !== 'boolean')
  //     throw new Error('fullWidth: must be boolean');
  // }

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   *
   * import { Event, EventEmitter } from '@stencil/core';
   */
  // @Event() click: EventEmitter;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example WillLoad should go before DidLoad.
   */
  // connectedCallback() {}
  // componentWillLoad() {}
  // componentDidLoad() {}
  // disconnectedCallback() {}

  /**
   * 7. Listeners
   * It is ok to place them in a different location if makes more sense in the context.
   * Recommend starting a listener method with "on".
   * Always use two lines.
   *
   * import { Listen } from '@stencil/core';
   */
  // @Listen('click', {})
  // onClick(event: UIEvent) { ... }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Requires JSDocs for public API documentation.
   *
   * import { Method } from '@stencil/core';
   */
  // @Method()
  // open() { ... }

  render() {
    const classes = {
      'plmg-text-input': true,
      [this.size]: true,
    };

    return (
      <Host value={this.value}>
        <input
          class={classes}
          aria-labelledby={this.label}
          min={this.type == 'number' && this.min}
          max={this.type == 'number' && this.max}
          name={this.name}
          required={this.required}
          step={this.type == 'number' && this.step}
          type={this.type}
          value={this.value}
          onInput={(ev) => this.handleInputChange(ev)}
        />
      </Host>
    );
  }
}
