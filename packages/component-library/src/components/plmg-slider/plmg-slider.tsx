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
   * If defaultValue is outside of min and max range or undefined
   * defaultValue is set to the min value
   */
  @Prop() defaultValue: number;
  @Watch('defaultValue')
  validateDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('defaultValue must be a number');
  }
  /**
   *
   * Define mark visibility
   *
   * Default: true
   */
  @Prop() marks: boolean = true;
  @Watch('marks')
  validateMarks(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('marks must be a boolean');
  }
  /**
   * Define a descriptive name for the slider
   *
   * Allowed values:
   * - any string
   *
   * Required for accessibility and should be a unique and descriptive
   *
   * Used to generate internal ids linking label and inputs
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
   * - A comma separated list of numbers
   *
   * Must be a comma separated list of numbers with at least two items
   * The first and last items set min and max values
   * Additional values set additional marks and labels
   * Pass values in the ascending order, the component does not sort the list
   */
  @Prop() rangeValues: string;
  @Watch('rangeValues')
  validateRangeValues(newValue: string) {
    if (
      !Array.isArray(this.stringToNumberArray(newValue)) ||
      this.stringToNumberArray(newValue).length < 2
    )
      throw new Error(
        'rangeValues must be a comma separated list with at least two items'
      );
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
  validateThumbLabel(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('thumbLabel must be boolean');
  }

  /**
   * Define step
   *
   * Allowed values:
   * - Any number
   *
   * Slider's value will increase or decrease by the step value
   *
   * When step is not provided the step value is set to 1% of the range
   */
  @Prop() step: number;
  @Watch('step')
  validateStep(newValue: number) {
    if (typeof newValue !== 'number' || newValue <= 0)
      throw new Error('step must be a positive number');
  }

  /**
   * Store value, min, max, trackWidth, inputFieldValue and stepValue states
   *
   * trackWidth stores the width of container after the component loads to calculate relative positions.
   */
  @State() min: number;
  @State() max: number;
  @State() trackWidth: number;
  @State() stepValue: number;
  @State() inputFieldValue: number;
  @State() value: number;
  @State() internalRangeValues: number[];
  @State() allowedInputs: number[];

  /**
   * The event "valueUpdated" is triggered when the slider value changes either by moving the thumb or entering in the text field.
   */
  @Event() valueUpdated: EventEmitter;

  private stringToNumberArray(newValue: string) {
    return newValue.split(',').map(Number);
  }

  private handleSliderChange(ev) {
    this.updateValue(ev.target.value);
  }

  private updateValue(newValue) {
    this.value = newValue;
    this.inputFieldValue = newValue;
    this.valueUpdated.emit({ value: this.value });
  }

  private setAllowedInputs() {
    const range = Array.from(
      { length: (this.max - this.min) / this.stepValue + 1 },
      (_, i) => this.min + i * this.stepValue
    );
    const rounded = range.map(
      (value) => Math.round((value + Number.EPSILON) * 1000000) / 1000000
    );
    return rounded;
  }

  private handleInputFieldChange(event) {
    this.inputFieldValue = event.target.value;
  }

  private validateInputField(event) {
    if (!event.target.value) {
      this.inputFieldValue = this.value;
      return;
    }
    if (event.target.value < this.min) {
      return this.updateValue(this.min);
    }
    if (event.target.value > this.max) {
      return this.updateValue(this.max);
    }
    if (this.allowedInputs.includes(event.target.value)) {
      return this.updateValue(event.target.value);
    }
    return this.updateValue(
      this.allowedInputs.reduce((previous, current) =>
        Math.abs(current - event.target.value) <
        Math.abs(previous - event.target.value)
          ? current
          : previous
      )
    );
  }

  private setValues() {
    if (!this.rangeValues) return;
    this.internalRangeValues = this.stringToNumberArray(this.rangeValues);
    this.min = this.internalRangeValues[0];
    this.max = this.internalRangeValues[this.internalRangeValues.length - 1];
    this.defaultValue >= this.min && this.defaultValue <= this.max
      ? (this.value = this.defaultValue)
      : (this.value = this.min);
    !this.step
      ? (this.stepValue = (this.max - this.min) / 100)
      : (this.stepValue = this.step);
    this.allowedInputs = this.setAllowedInputs();
    this.inputFieldValue = this.value;
  }

  private resizeHandler() {
    this.trackWidth = this.ref.getBoundingClientRect().width;
  }

  private handleKeyUp(event) {
    if (
      event.key === 'Enter' ||
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown'
    ) {
      return this.validateInputField(event);
    }
  }

  connectedCallback() {
    this.setValues();
  }

  // This usage creates the warning 'The state/prop "trackWidth" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()'
  // The component has to appear in the DOM before we can get the ref to calculate relative positons based on the track width.
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
            {this.trackWidth ? (
              <Fragment>
                {this.thumbLabel ? (
                  <div class={'plmg-thumb-label-container'}>
                    <output
                      style={this.setThumbPosition()}
                      class={'plmg-slider-thumb-label'}
                      htmlFor={this.nameToId('-range-input')}
                      aria-label={this.name}
                    >
                      {this.value}
                      <span class={'plmg-thumb-triangle'} />
                    </output>
                  </div>
                ) : null}

                <label
                  aria-label={this.name}
                  htmlFor={this.nameToId('-range-input')}
                ></label>
                <input
                  min={this.min}
                  max={this.max}
                  name={this.name}
                  step={this.stepValue}
                  onInput={(event) => this.handleSliderChange(event)}
                  style={{ background: this.setBackgroundProgressFill() }}
                  id={this.nameToId('-range-input')}
                  type={'range'}
                  value={this.value}
                  aria-valuemin={this.min}
                  aria-valuemax={this.max}
                  aria-valuenow={this.value}
                />

                {this.marks ? (
                  <div class={'plmg-marks'}>
                    {this.internalRangeValues.map((labelValue, index) => (
                      <div
                        class={'plmg-mark-label'}
                        key={index}
                        style={{ transform: this.setLabelPosition(labelValue) }}
                      >
                        <span class={'plmg-mark-tick'}>&#8205;</span>
                        <span>{labelValue}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </Fragment>
            ) : null}
          </div>
          <div class={'plmg-slider-input-field-container'} tabIndex={0}>
            <label
              aria-label={this.name}
              htmlfor={this.nameToId('-number-input')}
            >
              <input
                type={'number'}
                id={this.nameToId('-number-input')}
                name={this.name}
                step={this.stepValue}
                aria-valuemin={this.min}
                aria-valuemax={this.max}
                aria-valuenow={this.value}
                min={this.min}
                max={this.max}
                value={this.inputFieldValue}
                onInput={(event) => this.handleInputFieldChange(event)}
                onBlur={(event) => this.validateInputField(event)}
                onKeyUp={(event) => this.handleKeyUp(event)}
              />
            </label>
          </div>
        </div>
      </Host>
    );
  }

  private nameToId(inputType) {
    return this.name.toLowerCase().replace(/\s+/g, '-') + inputType;
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

  private calculateValueAsDecimalFraction(labelValue?, multipler?) {
    if (multipler) {
      return ((this.value - this.min) / (this.max - this.min)) * multipler;
    }
    if (labelValue || labelValue === 0) {
      return (labelValue - this.min) / (this.max - this.min);
    }
    return (this.value - this.min) / (this.max - this.min);
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

  private setLabelPosition(labelValue) {
    const trackBasis = 12;
    const thumbDiameter = 1.5;
    return `translate(calc(${this.calculateValueAsDecimalFraction(
      labelValue
    )}em * (${this.trackWidth} / ${trackBasis} - ${thumbDiameter}) - 50%)`;
  }
}
