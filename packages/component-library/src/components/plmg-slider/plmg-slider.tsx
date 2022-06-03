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
   * Define the range of value
   *
   * Array must include at least two items
   *
   * Required
   *
   * First and last items in the array set the minimum and max values
   *
   * Additional items set the mark values
   *
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
   * Define the default value
   *
   * Allowed: A number
   */
  @Prop() defaultValue: number;
  @Watch('defaultValue')
  validateDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('default value number be a number');
  }

  /**
   * Thumb label visibility
   *
   * Default: Visible
   */
  @Prop() thumbLabel: boolean = true;
  @Watch('thumbLabel')
  onThumbLabel(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('thumb label must be boolean');
  }

  /**
   *
   * Define step
   *
   * Can be any number
   */
  @Prop() step: number;
  @Watch('step')
  validateStep(newValue: number) {
    if (typeof newValue !== 'number' || newValue <= 0)
      throw new Error('step must be a positive number');
  }

  /**
   * Define if mark values are used
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
          <label htmlfor={'input-range'} />
          <input
            style={{ background: this.setBackgroundProgressFill() }}
            class={'plmg-slider-input'}
            step={this.step && this.step}
            type={'range'}
            id={'input-range'}
            aria-valuemin={this.minValue}
            aria-valuemax={this.maxValue}
            aria-valuenow={this.currentValue}
            min={this.minValue}
            max={this.maxValue}
            value={this.currentValue}
            onInput={(event) => this.handleChange(event)}
          />
        </div>

        <div class={'plmg-slider-thumb-label-container'}>
          <label htmlfor={'output-range'} />
          <output
            id={'output-range'}
            style={{
              left: this.updateThumbLabelPosition(),
            }}
            class={thumbClasses}
          >
            {this.currentValue}
          </output>
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
          <label htmlfor={'input-field'} />
          <input
            type={'number'}
            id={'input-field'}
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

  private calculateRelativePosition(value) {
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
