import {
  Component,
  Host,
  h,
  State,
  Prop,
  Watch,
  Event,
  EventEmitter,
  Fragment,
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
   * Define the default value
   *
   * Sets the starting value for the slider
   *
   * Allowed values:
   * - any number
   *
   * If default value is outside of min and max range or undefined
   * default value is set to the min value
   */
  @Prop() defaultValue: number;
  @Watch('defaultValue')
  validateDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('default value be a number');
  }
  /**
   *
   * Define mark visibility
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
   * Define a descriptive name for the slider
   *
   * Allowed values:
   * - any string
   *
   * Used internally by the component to connect inputs and outputs
   *
   * Required for accessibility and should be a unique and descriptive
   *
   */
  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (newValue && typeof newValue !== 'string' && !this.name)
      throw new Error('name must be a string');
  }

  /**
   * Define a range of values
   *
   * Allowed values:
   * - An array of with at least two items
   *
   * Must be a list of values with at least two items
   * with the first and last items set min and max values
   * additional values set additional marks and labels
   * sort the string passed to component on the client
   * component will not sort the array
   */
  @Prop() rangeValues: Array<number>;
  Event: any;
  @Watch('rangeValues')
  validateRangeValues(newValue: Array<number>) {
    if (!Array.isArray(newValue) || newValue.length < 2)
      throw new Error('rangeValues must be an array with at least two items');
  }

  /**
   * Define thumb label visibility
   *
   * Allowed values:
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
   * Allowed values:
   * - Any number
   *
   * Slider's value will increase or decrease by stepValue
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
   * Store value, min, max, trackwidth, inputfield and step states
   *
   * trackWidth stores the width of container after the component loads to calculate relative positions.
   *
   */

  @State() min: number;
  @State() max: number;
  @State() trackWidth: number;
  @State() stepValue: number;
  @State() inputFieldValue: number;
  @State() value: number;

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
            {this.trackWidth && (
              <Fragment>
                {this.thumbLabel && (
                  <div class={'plmg-thumb-label-container'}>
                    <output
                      style={this.setThumbPosition()}
                      class={'plmg-slider-thumb-label'}
                      htmlFor={this.name}
                      aria-labelleby={this.name}
                    >
                      {this.value}
                      <span class={'plmg-thumb-triangle'} />
                    </output>
                  </div>
                )}
                {this.trackWidth && (
                  <Fragment>
                    <label htmlFor={'slider'}></label>
                    <input
                      min={this.min}
                      max={this.max}
                      name={this.name}
                      step={this.stepValue}
                      onInput={(ev) => this.handleSliderChange(ev)}
                      style={{ background: this.setBackgroundProgressFill() }}
                      id={'slider'}
                      type={'range'}
                      value={this.value}
                      aria-valuemin={this.min}
                      aria-valuemax={this.max}
                      aria-valuenow={this.value}
                    />
                  </Fragment>
                )}

                {this.marks && (
                  <div class={'plmg-marks'}>
                    {this.rangeValues.map((labelvalue, index) => (
                      <div
                        class={'plmg-mark-label'}
                        key={index}
                        style={{ transform: this.setLabelPosition(labelvalue) }}
                      >
                        <span class={'plmg-mark-tick'}>&#8205;</span>
                        <span>{labelvalue}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Fragment>
            )}
          </div>

          <div class={'plmg-slider-input-field-container'}>
            <label htmlfor="slider-input">
              <input
                type={'number'}
                name={'slider-input'}
                step={this.stepValue}
                aria-valuemin={this.min}
                aria-valuemax={this.max}
                aria-valuenow={this.value}
                min={this.min}
                max={this.max}
                value={this.inputFieldValue}
                onInput={(Event) => this.handleInputFieldChange(Event)}
              />
            </label>
          </div>
        </div>
      </Host>
    );
  }

  private setBackgroundProgressFill(): string {
    return `linear-gradient(to right, ${plmgColorBackgroundPrimaryStrong} 0%, ${plmgColorBackgroundPrimaryStrong} ${this.calculateValueAsDecimalFraction(
      null,
      100
    )}%, ${plmgColorBorderNeutralWeak} ${this.calculateValueAsDecimalFraction(
      null,
      100
    )}%,${plmgColorBorderNeutralWeak} 100%)`;
  }

  private calculateValueAsDecimalFraction(labelvalue?, multipler?) {
    if (multipler && this.value) {
      return ((this.value - this.min) / (this.max - this.min)) * multipler;
    }
    if (labelvalue || labelvalue === 0) {
      return (labelvalue - this.min) / (this.max - this.min);
    }
    if (this.value) {
      return (this.value - this.min) / (this.max - this.min);
    }
    // return default if no value available
    return 0;
  }

  private setThumbPosition() {
    const trackBasis = 12;
    const thumbDiameter = 1.5;

    return {
      minWidth: `calc(.6em * ${this.value.toString().length})`,
      transform: `translate(calc(${this.calculateValueAsDecimalFraction()}em * (${
        this.trackWidth
      } / ${trackBasis} - ${thumbDiameter}) - 50%)`,
    };
  }

  private setLabelPosition(labelvalue) {
    const trackBasis = 12;
    const thumbDiameter = 1.5;
    return `translate(calc(${this.calculateValueAsDecimalFraction(
      labelvalue
    )}em * (${this.trackWidth} / ${trackBasis} - ${thumbDiameter}) - 50%)`;
  }
}
