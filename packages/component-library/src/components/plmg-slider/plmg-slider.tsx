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
  @State() minValue: number;
  @State() maxValue: number;
  @State() stepValue: number;

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

  connectedCallback() {
    this.setValues();
  }

  private handleSliderChange(ev) {
    this.updateValue(ev.target.value);
  }

  private updateValue(newValue) {
    this.currentValue = newValue;
    this.valueUpdated.emit({ value: this.currentValue });
  }

  @Event() valueUpdated: EventEmitter;

  render() {
    const thumbLabelContainerClasses = {
      'plmg-slider-thumb-label-container': true,
      hidden: !this.thumbLabel,
    };

    return (
      <Host value={this.currentValue}>
        <div class={'plmg-slider-component-container'}>
          <div class={'plmg-slider-thumb-label-track'}>
            <label htmlfor={this.name}>
              <div
                class={thumbLabelContainerClasses}
                style={{
                  left: `${this.calculateRelativePosition(this.currentValue)}`,
                }}
              >
                <div class={'plmg-slider-thumb-label'}>
                  <span>{this.currentValue}</span>
                </div>
                <span class={'plmg-thumb-triangle'} />
              </div>
            </label>
          </div>

          <div
            ref={(el) => (this.ref = el as HTMLDivElement)}
            class={'plmg-slider-track-rail-container'}
          >
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
            <label htmlfor={this.name} tabIndex={0}></label>
          </div>

          {this.marks && (
            <div class={'plmg-slider-mark-container'}>
              {this.rangeValues.map((item, index) => (
                <span
                  key={index}
                  style={{
                    left: `${this.setTickLabelPosition(item)}px`,
                  }}
                ></span>
              ))}
            </div>
          )}

          <div class={'plmg-slider-mark-labels-container'}>
            {this.marks && (
              <div>
                {this.rangeValues.map((item, index) => (
                  <span
                    class={'plmg-slider-mark-label-item'}
                    key={index}
                    style={{
                      left: `${this.setTickMarkPosition(item)}px`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Host>
    );
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

  // calculate label offest
  // that is going to be the width of the label - number of characters plus padding
  // using a monospaced font, each character is 6px except decimals which are 3px
  // let work out the offest without decimals to start with

  private calculateTextWidth(value: number) {
    return value.toString().length;
  }

  private setTickLabelPosition(item: number): number {
    // this needs to change
    const FONT_SIZE = 6;
    const RELATIVE_POSITION_PERCENT = this.calculateRelativePosition(item);
    const TEXT_WIDTH = this.calculateTextWidth(item) * FONT_SIZE;
    const TRACK_WIDTH = this.getTrackWidth();
    // const CALCULATE_TICK_POSITION = this.calculateRelativePosition(item);

    // move from % to proporition of the track width
    // console.log(
    //   'relative position',
    //   RELATIVE_POSITION_PERCENT,
    //   'text-width',
    //   TEXT_WIDTH,
    //   'track-width',
    //   TRACK_WIDTH
    // );
    return (RELATIVE_POSITION_PERCENT / 100) * TRACK_WIDTH - TEXT_WIDTH / 2;
  }

  private setTickMarkPosition(item: number): number {
    const TICK_MARK_WIDTH = 2;
    const RELATIVE_POSITION_PERCENT = this.calculateRelativePosition(item);
    const TRACK_WIDTH = this.getTrackWidth();
    // const CALCULATE_TICK_POSITION = this.calculateRelativePosition(item);

    // move from % to proporition of the track width

    return (
      (RELATIVE_POSITION_PERCENT / 100) * TRACK_WIDTH - TICK_MARK_WIDTH / 2
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

  /**
   * Grab the width of the track rail container.
   * If the element is not available yet, return a default value.
   * @private
   */
  private getTrackWidth() {
    if (this.ref) return this.ref.getBoundingClientRect().width;
    return 100;
  }
}
