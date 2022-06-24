import {
  Component,
  h,
  Watch,
  Prop,
  State,
  Host,
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
  shadow: false,
})
export class Slider {
  private ref: HTMLDivElement;
  /**
   * Define the range of values
   *
   * Must be a list of values with at least two items
   *
   * First and last items set min and max values
   *
   * Additional values set mark additional labels
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
   * Define the default value.
   *
   * Sets the starting value for the slider.
   *
   * Allowed: Any number
   *
   * When the default value is outside of the min and max values or undefined, default value is set to the min value.
   */
  @Prop() defaultValue: number;
  @Watch('defaultValue')
  validateDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('default value number be a number');
  }

  /**
   * Define a name for the slider
   *
   * Any string
   */
  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('name must be a string');
  }

  /**
   * Define an id attribute for the input
   *
   * Any string
   */
  @Prop() inputId: string;
  @Watch('inputId')
  validateID(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('input id must be a string');
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
   * Slider's value will increase or decrease in stepValue
   *
   * Allowed values
   * - Any number
   *
   * When step is not provided step, step is set to 1% of the range
   */
  @Prop() step: number;
  @Watch('step')
  validateStep(newValue: number) {
    if (typeof newValue !== 'number' || newValue <= 0)
      throw new Error('step must be a positive number');
  }

  /**
   * Define if marks and marks labels are visible
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
   * Store currentValue, min, max and step states
   */
  @State() currentValue: number;
  @State() inputFieldValue: number;
  @State() minValue: number;
  @State() maxValue: number;
  @State() stepValue: number;
  @State() allowedInputs: Array<number>;
  @State() trackWidth: number;

  private setValues() {
    if (!this.rangeValues) return;
    this.minValue = this.rangeValues[0];
    this.maxValue = this.rangeValues[this.rangeValues.length - 1];
    if (
      this.defaultValue >= this.minValue &&
      this.defaultValue <= this.maxValue
    ) {
      this.updateValue(this.defaultValue);
    } else {
      this.updateValue(this.minValue);
    }
    if (!this.step) {
      this.stepValue = (this.maxValue - this.minValue) / 100;
    } else {
      this.stepValue = this.step;
    }
  }

  private getAllowedInputs() {
    let inputs = [];
    inputs.push(this.minValue);
    while (inputs[inputs.length - 1] <= this.maxValue) {
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

  connectedCallback() {
    this.setValues();
  }

  componentDidLoad() {
    this.trackWidth = this.ref.getBoundingClientRect().width;
    console.log(this.trackWidth);
  }

  private handleSliderChange(ev) {
    this.updateValue(ev.target.value);
  }

  private handleInputFieldChange(ev) {
    // Ignore Empty Strings
    if (ev.target.value == '') return;
    // Get an array of allowed inputs
    const SET_ALLOWED_INPUTS = this.getAllowedInputs();
    // Check input is allowed value, within range and one of the allowed inputs
    const newValue = parseFloat(ev.target.value);
    if (
      isNaN(newValue) ||
      newValue > this.maxValue ||
      newValue < this.minValue ||
      !SET_ALLOWED_INPUTS.includes(newValue)
    )
      return;
    this.updateValue(newValue);
  }

  private updateValue(newValue) {
    this.currentValue = newValue;
    if (this.inputFieldValue !== this.currentValue) {
      this.inputFieldValue = this.currentValue;
    }
    this.valueUpdated.emit({ value: this.currentValue });
  }

  @Event() valueUpdated: EventEmitter;

  render() {
    return (
      <Host value={this.currentValue}>
        <div class={'plmg-slider-component-container'}>
          <div class={'plmg-thumb-track-rail-container'}>
            <div class={'plmg-slider-thumb-label-track'}>
              {this.thumbLabel && (
                <label htmlfor={this.name}>
                  <div
                    id={'fake-thumb'}
                    class={'plmg-slider-thumb-label-triangle-container'}
                  >
                    <output class={'plmg-slider-thumb-label'} name={this.name}>
                      {this.currentValue}
                    </output>
                    <span class={'plmg-thumb-triangle'} />
                  </div>
                </label>
              )}

              {this.trackWidth && (
                <plmg-slider-thumb
                  calculatedThumbWidth={this.calculateThumb()}
                  thumbLabel={this.thumbLabel}
                  value={this.currentValue}
                  name={this.name}
                  trackWidth={this.trackWidth}
                  min={this.minValue}
                  max={this.maxValue}
                />
              )}
            </div>

            <div
              ref={(el) => (this.ref = el as HTMLDivElement)}
              class={'plmg-slider-track-rail-container'}
            >
              <label htmlfor={this.name} tabIndex={0}>
                <input
                  id={this.inputId}
                  role="slider"
                  style={{ background: this.setBackgroundProgressFill() }}
                  class={'plmg-slider-input'}
                  step={this.stepValue}
                  type={'range'}
                  name={this.name}
                  min={this.minValue}
                  max={this.maxValue}
                  value={this.currentValue}
                  aria-valuemin={this.minValue}
                  aria-valuemax={this.maxValue}
                  aria-valuenow={this.currentValue}
                  onInput={(ev) => this.handleSliderChange(ev)}
                />
              </label>
            </div>

            {this.trackWidth && (
              <div class={'plmg-slider-marks-container'}>
                {this.marks && (
                  <plmg-slider-marks
                    range={this.rangeValues}
                    marks={this.marks}
                    value={this.currentValue}
                    name={this.name}
                    trackWidth={this.trackWidth}
                    min={this.minValue}
                    max={this.maxValue}
                  />
                )}
              </div>
            )}
          </div>
          <div class={'plmg-slider-input-field-container'}>
            <label htmlfor={this.name} />
            <input
              type={'number'}
              name={this.name}
              step={this.stepValue}
              aria-valuemin={this.minValue}
              aria-valuemax={this.maxValue}
              aria-valuenow={this.currentValue}
              min={this.minValue}
              max={this.maxValue}
              value={this.inputFieldValue}
              onInput={(Event) => this.handleInputFieldChange(Event)}
            />
          </div>
        </div>
      </Host>
    );
  }

  private calculateThumb() {
    const elmnt = document.getElementById('fake-thumb');
    console.log(elmnt);
    if (elmnt) {
      return elmnt.offsetWidth;
    }
  }

  private calculateRelativePosition(value: number) {
    // Does not account for floating point numbers

    // console.log(
    //   'value - this.minValue',
    //   value - this.minValue,
    //   'this.maxValue - this.minValue',
    //   this.maxValue - this.minValue
    // );
    // console.log(this.getTrackWidth());
    //
    return (
      (Number(value - this.minValue) / (this.maxValue - this.minValue)) * 100
    );
  }

  private setBackgroundProgressFill(): string {
    const FILL_PERCENT = this.calculateRelativePosition(this.currentValue);
    return `linear-gradient(to right,
      ${plmgColorBackgroundPrimaryStrong} 0%,
      ${plmgColorBackgroundPrimaryStrong} ${FILL_PERCENT}%,
      ${plmgColorBorderNeutralWeak} ${FILL_PERCENT}%, 
      ${plmgColorBorderNeutralWeak} 100%)`;
  }
}
