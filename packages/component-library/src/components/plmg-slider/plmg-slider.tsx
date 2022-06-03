import { Component, h, Watch, Prop, State } from '@stencil/core';
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
  @Watch('rangeValues')
  validateRangeValues(newValue: Array<number>) {
    if (!Array.isArray(newValue) || newValue.length < 2)
      throw new Error('rangeValues must be an array with at least two items');
  }
  @Watch('rangeValues')
  onRangeValuesChanged() {
    this.setValues();
  }

  /**
   * Define the default value.
   *
   * Sets the starting value for the slider.
   *
   * Allowed: Any number
   *
   * When the default value is outside of the min and max values or is undefined the starting value is set to the min value.
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
      throw new Error('input Id must be a string with no white space');
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
   * Slider's value will increase or decrease in steps
   *
   * Allowed values
   * - Any number
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
   * Store current value in state
   */
  @State() currentValue: number;
  @State() minValue: number;
  @State() maxValue: number;

  private setValues() {
    if (!this.rangeValues) return;

    this.minValue = this.rangeValues[0];
    this.maxValue = this.rangeValues[this.rangeValues.length - 1];
    if (
      this.defaultValue >= this.minValue &&
      this.defaultValue <= this.maxValue
    ) {
      this.currentValue = this.defaultValue;
    } else {
      this.currentValue = this.minValue;
    }
  }

  connectedCallback() {
    this.setValues();
  }

  handleChange(event) {
    this.currentValue = event.target.value;
  }

  render() {
    const thumbClasses = {
      'plmg-slider-thumb-label': true,
      hidden: !this.thumbLabel,
    };

    return (
      <div class={'plmg-slider-component-container'}>
        <div class={'plmg-slider-track-rail-container'}>
          <label htmlfor={this.name}>
            <input
              id={this.inputId}
              role="slider"
              style={{ background: this.setBackgroundProgressFill() }}
              class={'plmg-slider-input'}
              step={this.step && this.step}
              type={'range'}
              name={this.name}
              aria-valuemin={this.minValue}
              aria-valuemax={this.maxValue}
              aria-valuenow={this.currentValue}
              min={this.minValue}
              max={this.maxValue}
              value={this.currentValue}
              onInput={(event) => this.handleChange(event)}
            />
          </label>
        </div>

        <div class={'plmg-slider-thumb-label-container'}>
          <label htmlfor={this.name}>
            <output
              name={this.name}
              style={{
                left: this.updateThumbLabelPosition(),
              }}
              class={thumbClasses}
            >
              {this.currentValue}
            </output>
          </label>
        </div>

        {this.marks && (
          <div class={'plmg-slider-mark-container'}>
            {this.rangeValues.map((item, index) => (
              <span
                key={index}
                style={{
                  left: this.setTickPositions(item),
                }}
              ></span>
            ))}
          </div>
        )}

        <div class={'plmg-slider-mark-labels-container'}>
          {this.marks && (
            <datalist>
              {this.rangeValues.map((item, index) => (
                <option
                  class={'plmg-slider-mark-label-item'}
                  key={index}
                  style={{
                    left: this.setTickPositions(item),
                  }}
                >
                  {item}
                </option>
              ))}
            </datalist>
          )}
        </div>

        <div class={'plmg-slider-input-field-container'}>
          <label htmlfor={this.name} />
          <input
            type={'number'}
            name={this.name}
            tabIndex={0}
            step={this.step && this.step}
            aria-valuemin={this.minValue}
            aria-valuemax={this.maxValue}
            aria-valuenow={this.currentValue}
            min={this.minValue}
            max={this.maxValue}
            value={this.currentValue}
            onInput={(event) => this.handleChange(event)}
          />
        </div>
      </div>
    );
  }

  private calculateRelativePosition(value: number) {
    return (
      (Number(value - this.minValue) / (this.maxValue - this.minValue)) * 100
    );
  }

  private updateThumbLabelPosition(): string {
    const THUMB_POSITION = this.calculateRelativePosition(this.currentValue);
    return `calc(${THUMB_POSITION}% + (${8 - THUMB_POSITION * 0.15}px))`;
  }

  private setTickPositions(item: number): string {
    const CALCULATE_TICK_POSITION = this.calculateRelativePosition(item);
    return `calc(${CALCULATE_TICK_POSITION}% + (${
      3 - CALCULATE_TICK_POSITION * 0.15
    }px))`;
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
