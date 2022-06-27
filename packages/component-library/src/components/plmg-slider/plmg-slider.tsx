import { Component, Host, h, State, Prop, Watch } from '@stencil/core';
// import {
//   plmgColorBorderNeutralWeak,
//   plmgColorBackgroundPrimaryStrong,
// } from '@ducky/plumage-tokens';

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
  @State() value: number;
  @State() min: number;
  @State() max: number;
  @State() trackWidth: number;
  @State() stepValue: number;

  private handleSliderChange(ev) {
    this.updateValue(ev.target.value);
  }

  private updateValue(newValue) {
    this.value = newValue;
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
    return (
      <Host value={this.value}>
        <div
          class={'plmg-slider-container'}
          ref={(el) => (this.ref = el as HTMLDivElement)}
        >
          <input
            min={this.min}
            max={this.max}
            step={this.stepValue}
            onInput={(ev) => this.handleSliderChange(ev)}
            // style={{ background: this.setBackgroundProgressFill() }}
            id="range"
            type="range"
            value={this.value}
          />
          {this.thumbLabel && (
            <output
              style={this.setThumbPosition()}
              class={'plmg-slider-thumb-label'}
              htmlFor="range"
            >
              {this.value}
              <span class={'plmg-thumb-triangle'} />
            </output>
          )}
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
        </div>
      </Host>
    );
  }

  // To Do:
  // restore background progress fill
  // pull into input field
  // tidy up scss
  // Check aria accessibilty
  // focus state
  // polyfill
  // tests
  // storybook - proper examples
  // Check react functioning

  // private setBackgroundProgressFill(): string {
  //   const RELATIVE_POSITION = (this.value - this.min) / (this.max - this.min);
  //   return `linear-gradient(to right,
  //     ${plmgColorBackgroundPrimaryStrong} 0%,
  //     ${plmgColorBackgroundPrimaryStrong} ${RELATIVE_POSITION}%,
  //     ${plmgColorBorderNeutralWeak} ${RELATIVE_POSITION}%,
  //     ${plmgColorBorderNeutralWeak} 100%)`;
  // }

  private setThumbPosition() {
    const RELATIVE_POSITION = (this.value - this.min) / (this.max - this.min);

    // console.log(`calc(1.5em * ${this.getLongestCharacterLength}`);
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
