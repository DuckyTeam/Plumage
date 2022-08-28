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
   * If default is outside of min and max range or undefined
   * default is set to the min value
   */
  @Prop() default: number;
  @Watch('default')
  validateDefault(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('default must be a number');
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
   *
   * Required
   */
  @Prop() range!: string;
  @Watch('range')
  validateRange(newValue: string) {
    if (
      typeof newValue !== 'string' ||
      newValue === '' ||
      newValue.split(',').length < 2 ||
      newValue.split(',').some((value) => isNaN(Number(value)))
    )
      throw new Error(
        'range is required. range must be a comma separated list of numbers with at least two items'
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
   * Control the value of the slider
   *
   * Allowed values:
   * - Any number
   *
   * Sets the value of the slider
   */
  @Prop() value: number;
  @Watch('value')
  validateValue(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('value must be a number');
  }
  @Watch('value')
  setValue(newValue: number) {
    this.validateTextInput(newValue);
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
  @State() internalValue: number;
  @State() internalRange: number[];
  @State() allowedInputs: number[];

  /**
   * The event "valueUpdated" is triggered when the slider value changes either by moving the thumb or entering in the text field.
   */
  @Event() valueUpdated: EventEmitter;

  private setAllowedInputs() {
    const range = Array.from(
      { length: (this.max - this.min) / this.stepValue + 1 },
      (_, i) => this.min + i * this.stepValue
    );
    if (this.stepValue < 1) {
      return range.map(
        (value) => Math.round((value + Number.EPSILON) * 1000000) / 1000000
      );
    }
    return range;
  }

  private updateValue(newValue) {
    this.internalValue = newValue;
    this.inputFieldValue = newValue;
    this.valueUpdated.emit({ value: this.internalValue });
  }

  private handleInputFieldChange(event) {
    this.inputFieldValue = event.target.value;
  }

  private handleSliderChange(event) {
    this.updateValue(event.target.value);
  }

  private getClosestValidValue(value) {
    return this.allowedInputs.reduce((previous, current) =>
      Math.abs(current - value) < Math.abs(previous - value)
        ? current
        : previous
    );
  }

  private handleTextInput(event) {
    const { value } = event.target;
    this.validateTextInput(value);
  }

  private validateTextInput(value) {
    if (!value) {
      return (this.inputFieldValue = this.internalValue);
    }
    if (value < this.min) {
      return this.updateValue(this.min);
    }
    if (value > this.max) {
      return this.updateValue(this.max);
    }
    if (this.allowedInputs.includes(value)) {
      return this.updateValue(value);
    }
    this.updateValue(this.getClosestValidValue(value));
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
      return this.handleTextInput(event);
    }
  }

  private setInitialValue(value) {
    if (this.allowedInputs.includes(value)) return (this.internalValue = value);
    return (this.internalValue = this.min);
  }

  connectedCallback() {
    this.validateRange(this.range);
    this.internalRange = this.range.split(',').map((value) => Number(value));
    this.min = this.internalRange[0];
    this.max = this.internalRange[this.internalRange.length - 1];
    this.stepValue = this.step ? this.step : (this.max - this.min) / 100;
    this.allowedInputs = this.setAllowedInputs();
    this.value
      ? this.setInitialValue(this.value)
      : this.setInitialValue(this.default);
    this.inputFieldValue = this.internalValue;
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
      <Host value={this.internalValue}>
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
                      {this.internalValue}
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
                  value={this.internalValue}
                  aria-valuemin={this.min}
                  aria-valuemax={this.max}
                  aria-valuenow={this.internalValue}
                />

                {this.marks ? (
                  <div class={'plmg-marks'}>
                    {this.internalRange.map((labelValue, index) => (
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
                aria-valuenow={this.internalValue}
                min={this.min}
                max={this.max}
                value={this.inputFieldValue}
                onInput={(event) => this.handleInputFieldChange(event)}
                onBlur={(event) => this.handleTextInput(event)}
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
      return (
        ((this.internalValue - this.min) / (this.max - this.min)) * multipler
      );
    }
    if (labelValue || labelValue === 0) {
      return (labelValue - this.min) / (this.max - this.min);
    }
    return (this.internalValue - this.min) / (this.max - this.min);
  }

  private setThumbPosition() {
    const trackBasis = 12;
    const thumbDiameter = 1.5;

    return {
      minWidth: `calc(.6em * ${this.internalValue.toString().length})`,
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
