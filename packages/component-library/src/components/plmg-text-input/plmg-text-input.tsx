import { Component, h, Prop, Watch, State } from '@stencil/core';
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
   * Define default
   *
   * Allowed values
   * - Any string
   */
  @Prop() default: string;
  @Watch('default')
  validateDefaultValue(newValue: string) {
    if (typeof newValue !== 'string')
      throw new Error('default value must be a string');
  }
  /**
   * Toggle error state:
   *
   * Allowed values:
   * - true
   * - false
   */
  @Prop() error: boolean = false;
  @Watch('error')
  validateError(newValue: boolean) {
    if (typeof newValue !== 'boolean') throw new Error('error must be boolean');
  }
  /**
   * Define error message
   *
   * Allowed value: any string
   *
   * Displayed when text input state is in error
   */
  @Prop() errorMessage: string;
  @Watch('errorMessage')
  validateErrorMessage(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('error message must be a string');
  }
  /**
   * Define if input value is pre-filled with default.
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: false
   *
   */
  @Prop() filled: boolean = false;
  @Watch('filled')
  validateFilled(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('filled: must be boolean');
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
   * Define if the label is displayed.
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: true
   */
  @Prop() labelText: string;
  @Watch('labelText')
  validateLabelMessage(newValue: string) {
    if (typeof newValue !== 'string')
      throw new Error('label text must be string');
  }
  /**
   * Provide an name to label the input.
   *
   * Name is required for accessibility.
   */
  // @Prop() name: string;
  // @Watch('name')
  // validateName(newValue: string) {
  //   if (newValue && typeof newValue !== 'string' && !this.name)
  //     throw new Error('name must have a name and be a string');
  // }
  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error(' must have a name and be a string');
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
   * Define tip text
   *
   * Allowed value: any string
   *
   * Displayed when tip text show is enabled.
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
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   *
   * import { State } from '@stencil/core';
   */
  // @State() isValidated: boolean;

  /**
   * Reference to host HTML element.
   */
  @State() value: number | string;
  @State() isValidated: boolean = false;
  @State() isError: boolean = false;

  private handleInputChange(ev) {
    this.value = ev.target.value;
  }
  /**
   * Life Cycle Methods & Event Listeners
   */
  connectedCallback() {
    if (this.filled) {
      this.value = this.default;
    }
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
    const inputClasses = {
      [this.size]: true,
    };

    const tipClasses = {
      [this.size]: true,
      tip: true,
    };

    const labelClasses = {
      [this.size]: true,
      label: true,
    };

    return (
      <div class={'plmg-text-input-wrapper'}>
        {this.label && <span class={labelClasses}>{this.labelText}</span>}
        <label>
          <input
            class={inputClasses}
            aria-labelledby={this.label}
            name={this.name}
            required={this.required}
            type={'text'}
            value={this.value}
            onInput={(ev) => this.handleInputChange(ev)}
          />
        </label>
        {this.tipText && <span class={tipClasses}>{this.tipText}</span>}
        {this.error && (
          <plmg-error-message
            size={this.size}
            message={this.errorMessage}
          ></plmg-error-message>
        )}
      </div>
    );
  }
}
