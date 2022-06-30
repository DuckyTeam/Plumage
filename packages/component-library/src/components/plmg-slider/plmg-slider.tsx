import {
  Component,
  Host,
  h,
  State,
  Prop,
  Watch,
  Event,
  EventEmitter,
} from '@stencil/core';
import {
  plmgColorBorderNeutralWeak,
  plmgColorBackgroundPrimaryStrong,
} from '@ducky/plumage-tokens';

@Component({
  tag: 'plmg-slider',
  styleUrl: 'plmg-slider.scss',
  shadow: true,
})
export class Slider {
  private ref: HTMLDivElement;
  private abortResizeListener: AbortController;

  /**
   * Define the range of values
   *
   * Must be a list of values with at least two items
   *
   * First and last items set min and max values
   *
   * Additional values set additional marks and labels
   *
   * The string passed to the rangeValues array has to be sorted on the client
   *
   * The component will not sort the array
   *
   * Required
   */
  @Prop() rangeValues: Array<number>;
  Event: any;
  @Watch('rangeValues')
  validateRangeValues(newValue: Array<number>) {
    if (!Array.isArray(newValue) || newValue.length < 2)
      throw new Error('rangeValues must be an array with at least two items');
  }

  /**
   * Define the default value
   *
   * Sets the starting value for the slider
   *
   * Allowed: Any number
   *
   * When the default value is outside of the min and max values or undefined, default value is set to the min value
   */
  @Prop() defaultValue: number;
  @Watch('defaultValue')
  validateDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('default value be a number');
  }

  /**
   * Define a descriptive name for the slider
   *
   * Allowed: Any string
   *
   * Used internally by the component to connect inputs and outputs
   *
   * Required for accessibility
   *
   * Sould be unique and descriptive
   *
   */
  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (newValue && typeof newValue !== 'string' && !this.name)
      throw new Error('name must be a string');
  }

  /**
   * Define thumb label visibility
   *
   * Allowed values
   *  - true
   *  - false
   *
   * Default: true
   */
  @Prop() thumbLabel: boolean = true;
  @Watch('thumbLabel')
  onThumbLabel(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('thumb label must be boolean');
  }

  /**
   * Define step
   *
   * Slider's value will increase or decrease by stepValue
   *
   * Allowed values
   * - Any number
   *
   * When step is not provided the stepValue is set to 1% of the range
   */
  @Prop() step: number;
  @Watch('step')
  validateStep(newValue: number) {
    if (typeof newValue !== 'number' || newValue <= 0)
      throw new Error('step must be a positive number');
  }

  /**
   *
   * Define if marks and mark labels are visible
   *
   * Default: true
   */
  @Prop() marks: boolean = true;
  @Watch('marks')
  onMarks(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('marks must be a boolean');
  }

  /**
   *
   * Store value, min, max, trackwidth, inputfield and step states
   *
   * trackWidth stores the width of container after the component loads to calculate relative positions.
   *
   */
  @State() value: number;
  @State() min: number;
  @State() max: number;
  @State() trackWidth: number;
  @State() stepValue: number;
  @State() inputFieldValue: number;

  private handleSliderChange(ev) {
    this.updateValue(ev.target.value);
  }

  private updateValue(newValue) {
    this.value = newValue;
    if (this.inputFieldValue !== this.value) {
      this.inputFieldValue = this.value;
    }
    this.valueUpdated.emit({ value: this.value });
  }

  @Event() valueUpdated: EventEmitter;

  private getAllowedInputs() {
    let inputs = [];
    inputs.push(this.min);
    while (inputs[inputs.length - 1] <= this.max) {
      const PREV = inputs[inputs.length - 1];
      // Correct for floating point errors by rounding when necessary
      const NEXT =
        Math.round((PREV + this.stepValue + Number.EPSILON) * 1000000) /
        1000000;
      // Escape valve in case of over rounding
      if (!(NEXT > PREV)) return;
      inputs.push(NEXT);
    }
    return inputs;
  }
  private handleInputFieldChange(ev) {
    // Ignore Empty Strings
    if (ev.target.value == '') return;
    // Get an array of allowed inputs
    const SET_ALLOWED_INPUTS = this.getAllowedInputs();
    // Check if input is allowed value, within range and one of the allowed inputs
    const newValue = parseFloat(ev.target.value);
    if (
      isNaN(newValue) ||
      newValue > this.max ||
      newValue < this.min ||
      !SET_ALLOWED_INPUTS.includes(newValue)
    )
      return;
    this.updateValue(newValue);
  }

  private setValues() {
    if (!this.rangeValues) return;
    this.min = this.rangeValues[0];
    this.max = this.rangeValues[this.rangeValues.length - 1];
    if (this.defaultValue >= this.min && this.defaultValue <= this.max) {
      this.updateValue(this.defaultValue);
    } else {
      this.updateValue(this.min);
    }
    if (!this.step) {
      this.stepValue = (this.max - this.min) / 100;
    } else {
      this.stepValue = this.step;
    }
  }

  private resizeHandler() {
    this.trackWidth = this.ref.getBoundingClientRect().width;
  }

  connectedCallback() {
    this.setValues();
  }

  componentDidLoad() {
    this.trackWidth = this.ref.getBoundingClientRect().width;
    this.abortResizeListener = new AbortController();
    window.addEventListener('resize', () => this.resizeHandler(), {
      signal: this.abortResizeListener.signal,
    });
  }

  disconnectedCallback() {
    if (this.abortResizeListener) this.abortResizeListener.abort();
  }
  render() {
    const containerClasses = {
      'plmg-slider-container': true,
      marks: this.marks,
    };

    return (
      <Host value={this.value}>
        <div class={'plmg-component-container'}>
          <div
            class={containerClasses}
            ref={(el) => (this.ref = el as HTMLDivElement)}
          >
            {this.thumbLabel && (
              <div class={'thumb-label-container'}>
                <output
                  style={this.setThumbPosition()}
                  class={'plmg-slider-thumb-label'}
                  htmlFor={this.name}
                >
                  {this.value}
                  <span class={'plmg-thumb-triangle'} />
                </output>
              </div>
            )}

            <input
              min={this.min}
              max={this.max}
              name={this.name}
              value={this.value}
              aria-valuemin={this.min}
              aria-valuemax={this.max}
              aria-valuenow={this.value}
              step={this.stepValue}
              onInput={(ev) => this.handleSliderChange(ev)}
              style={{ background: this.setBackgroundProgressFill() }}
              id="range"
              type="range"
            />

            {this.marks && (
              <div class={'labels'}>
                {this.rangeValues.map((item, index) => (
                  <div
                    class={'label'}
                    key={index}
                    style={{ transform: this.setLabelPosition(item) }}
                  >
                    <span class={'tick'}>&#8205;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <label htmlfor={this.name} tabIndex={0}>
            <div class={'plmg-slider-input-field-container'}>
              <label htmlfor={this.name} />
              <input
                type={'number'}
                name={this.name}
                step={this.stepValue}
                aria-valuemin={this.min}
                aria-valuemax={this.max}
                aria-valuenow={this.value}
                min={this.min}
                max={this.max}
                value={this.inputFieldValue}
                onInput={(Event) => this.handleInputFieldChange(Event)}
              />
            </div>
          </label>
        </div>
      </Host>
    );
  }

  private setBackgroundProgressFill(): string {
    const RELATIVE_POSITION =
      ((this.value - this.min) / (this.max - this.min)) * 100;
    return `linear-gradient(to right,
      ${plmgColorBackgroundPrimaryStrong} 0%,
      ${plmgColorBackgroundPrimaryStrong} ${RELATIVE_POSITION}%,
      ${plmgColorBorderNeutralWeak} ${RELATIVE_POSITION}%,
      ${plmgColorBorderNeutralWeak} 100%)`;
  }

  private setThumbPosition() {
    const RELATIVE_POSITION = (this.value - this.min) / (this.max - this.min);

    // Use the longest character in the range to set a min width. Prevents rapid shrink / expand as non-monospaced font varies width of the thumb label.
    return {
      minWidth: `calc(.5em * ${this.getLongestCharacterLength()}`,
      transform: `translate(calc(${RELATIVE_POSITION}em * (${this.trackWidth} / 12 - 1.5) - 50%)`,
    };
  }

  private setLabelPosition(item) {
    const RELATIVE_POSITION = (item - this.min) / (this.max - this.min);
    return `translate(calc(${RELATIVE_POSITION}em * (${this.trackWidth} / 12 - 1.5) - 50%)`;
  }

  private getLongestCharacterLength() {
    return Math.max(...this.rangeValues.map((item) => item.toString().length));
  }
}
