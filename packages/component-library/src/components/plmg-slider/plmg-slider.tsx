import { Component, h, Watch, Prop, State } from '@stencil/core';

@Component({
  tag: 'plmg-slider',
  styleUrl: 'plmg-slider.scss',
  shadow: false,
})
export class Slider {
  /**
   * Define minimum value
   *
   * Default: 0
   */
  @Prop() minValue: number = 0;
  @Watch('minValue')
  onMinValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('minValue must be a number');
    this.minValue = newValue;
  }

  /**
   * Define maximum value
   *
   * Default: 100
   */
  @Prop() maxValue: number = 100;
  @Watch('maxValue')
  onmaxValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('maxValue must be a number');
    this.maxValue = newValue;
  }

  /**
   * Define whether thumb label is visible
   *
   * Default: Visible
   */
  @Prop() thumbLabel: boolean = true;
  @Watch('thumbLabel')
  onThumbLabel(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('thumb label must be boolean');
    this.thumbLabel = newValue;
  }

  //  /**
  //  * Define if marks are used
  //  *
  //  * Default: false
  //  */
  //  @Prop() marks: boolean = true;
  //  @Watch('marks')
  //  onMarks(newValue: boolean) {
  //    if (typeof newValue !== 'boolean')
  //      throw new Error('marks must be a boolean');
  //    this.marks = newValue;
  //  }

  /**
   * Define step number
   *
   * Can be any number
   *
   * If no step provided the slider is continous
   * If step provided the slider is discrete
   */
  @Prop() step: number = 10;
  @Watch('step')
  onStep(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('step must be a number');
    this.isDiscrete = true;
    this.step = newValue;
  }

  //  /**
  //  * Define mark values are used
  //  *
  //  * Default: 10
  //  */
  @Prop() marks: number = 10;
  @Watch('marks')
  onTick(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('markLabel must be a number');
    this.marks = newValue;
  }

  /**
   * Store where slider is continuous or discrete
   */
  @State() isDiscrete: boolean;

  /**
   * Create state for the mark for values
   */
  @State() markLabels: Array<number>;

  componentWillLoad() {
    this.markLabels = this.setMarkLabels();
  }

  /**
   * Store current value is state
   */
  @State() currentValue: number = 0;

  handleChange(event) {
    this.currentValue = event.target.value;
  }

  // @EventEmitter
  // need to emit value somewhere ...

  /**se properties do not have the @Prop() decorator, they will not be exposed
   * publicly on the host eleme
   * nt, but only used internally.
   */
  // flag: boolean = false;

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   *
   * import { Element } from '@stencil/core';
   */
  // @Element() el: HTMLElement;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   *
   * import { State } from '@stencil/core';
   */
  // @State() isValidated: boolean;

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
    return (
      // <div class={'plmg-slider-container'}>
      <div class={'plmg-slider-slider-input-container'}>
        <div class={'plmg-slider-track-rail-container'}>
          <label htmlFor="input-range"></label>
          <input
            style={{ background: this.setBackgroundProgressFill() }}
            // name={rangeName}
            class="plmg-slider-input-value"
            step={this.step}
            type="range"
            id="input-range"
            min={this.minValue}
            max={this.maxValue}
            value={this.currentValue}
            onInput={(event) => this.handleChange(event)}
          />
          <label htmlFor="output-range"></label>
          {this.thumbLabel && (
            <output
              id="output-range"
              style={{ left: this.updateThumbLabelPosition() }}
              class={'plmg-slider-thumb-label'}
            >
              {this.currentValue}
            </output>
          )}
          <div class={'plmg-slider-tick-labels-container'}>
            {this.markLabels.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <label htmlFor="input-field"></label>
        <input
          class={'input-field'}
          type="number"
          step={this.step}
          min={this.minValue}
          max={this.maxValue}
          value={this.currentValue}
          onInput={(event) => this.handleChange(event)}
        />
      </div>
      // </div>
    );
  }

  private setBackgroundProgressFill(): string {
    // DOES NOT WORK RIGHT //
    const newValue = Number(
      ((this.currentValue - this.minValue) * this.maxValue) /
        (this.maxValue - this.minValue)
    );
    return `linear-gradient(to right, #008290 0%, #008290 ${newValue}%, #BFCBD1 ${newValue}%, #BFCBD1 100%)`;
  }

  private setMarkLabels(): Array<number> {
    // REFACTOR //
    console.log(this.maxValue, this.minValue, this.step, this.marks);
    const STEP_SIZE = (this.maxValue - this.minValue) / this.marks;
    let tickmarks = [];

    for (let i = 0; i <= this.marks; i++) {
      if (i === 0 && this.minValue === 0) {
        tickmarks.push(this.minValue);
      } else {
        const newValue = Math.round(STEP_SIZE * i) + this.minValue;
        tickmarks.push(newValue);
      }
    }
    return tickmarks;
  }

  private updateThumbLabelPosition(): string {
    const minVal = this.minValue ? this.minValue : 0;
    const maxVal = this.maxValue ? this.maxValue : 100;
    const newValue = Number(
      ((this.currentValue - minVal) * 100) / (maxVal - minVal)
    );
    return `calc(${newValue}% + (${8 - newValue * 0.15}px))`;
  }
}
