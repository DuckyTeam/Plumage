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
   * Define default value
   *
   * Default: 0
   *
   * Ignored if default value exceeds maxValue
   */
  @Prop() defaultValue: number = 0;
  @Watch('defaultValue')
  onDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('minValue must be a number');
    this.minValue = newValue;
  }

  /**
   * Define
   *
   * Default: 100
   */
  @Prop() customMarks: {
    label: string;
    value: number;
  }[];
  @Watch('customMarks')
  onCustomMarks(newValue: any): void {
    this.maxValue = newValue;
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
    if (typeof newValue !== 'number' || newValue <= 0)
      throw new Error('step must be a positive integer');
    this.step = newValue;
  }
  //  /**
  //  * Define mark values are used
  //  *
  //  * Default: true
  //  */
  @Prop() marks: boolean = true;
  @Watch('marks')
  onMarks(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('marks must be a boolean');
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
    this.customMarks && (this.markLabels = this.setCustomMarkLabels());
    this.step !== 0 && (this.markLabels = this.setAutoMarkLabels());
    this.step && (this.isDiscrete = false);
    this.defaultValue && this.defaultValue <= this.maxValue
      ? (this.currentValue = this.defaultValue)
      : (this.defaultValue = this.minValue);
  }

  /**
   * Store current value is state
   */
  @State() currentValue: number = 0;

  handleChange(event) {
    this.currentValue = event.target.value;
  }

  // create an object with label names and relative positions

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
    const thumbClasses = {
      'plmg-slider-thumb-label': true,
      hidden: !this.thumbLabel,
    };

    return (
      <div class={'plmg-slider-component-container'}>
        <div class={'plmg-slider-thumb-label-container'}>
          <output
            id="output-range"
            style={{ left: this.updateThumbLabelPosition() }}
            class={thumbClasses}
          >
            {this.currentValue}
          </output>
        </div>
        <div class={'plmg-slider-track-rail-container'}>
          <input
            style={{ background: this.setBackgroundProgressFill() }}
            class="plmg-slider-input"
            step={this.isDiscrete && this.step}
            type="range"
            id="input-range"
            min={this.minValue}
            max={this.maxValue}
            value={this.currentValue}
            onInput={(event) => this.handleChange(event)}
          />
        </div>

        {this.marks ? (
          <datalist class={'plmg-slider-mark-labels-container'}>
            {this.markLabels.map((item, index) => (
              <option class="plmg-slider-mark-label-item" key={index}>
                {item}
              </option>
            ))}
          </datalist>
        ) : (
          <div class={'plmg-slider-marks-labels-container'} />
        )}
        <div class={'plmg-slider-input-field-container'}>
          <input
            type="number"
            step={this.isDiscrete && this.step}
            min={this.minValue}
            max={this.maxValue}
            value={this.currentValue}
            onInput={(event) => this.handleChange(event)}
          />
        </div>
      </div>
    );
  }

  private setBackgroundProgressFill(): string {
    const FILL_PERCENT =
      (Number(this.currentValue - this.minValue) /
        (this.maxValue - this.minValue)) *
      100;
    return `linear-gradient(to right, 
      ${plmgColorBackgroundPrimaryStrong} 0%,
      ${plmgColorBackgroundPrimaryStrong} ${FILL_PERCENT}%,
      ${plmgColorBorderNeutralWeak} ${FILL_PERCENT}%, 
      ${plmgColorBorderNeutralWeak} 100%)`;
  }

  private setCustomMarkLabels(): Array<number> {
    // DO

    let tickArray = [this.minValue];
    let accumulator = this.step + this.minValue;
    while (accumulator < this.maxValue) {
      tickArray.push(accumulator);
      const pos =
        ((accumulator - this.minValue) / (this.maxValue / this.minValue)) * 100;
      console.log(pos);
      accumulator += this.step;
    }
    tickArray.push(this.maxValue);
    return tickArray;
  }

  private setAutoMarkLabels(): Array<number> {
    let tickArray = [this.minValue];
    let accumulator = this.step + this.minValue;
    while (accumulator < this.maxValue) {
      tickArray.push(accumulator);
      const pos =
        ((accumulator - this.minValue) / (this.maxValue / this.minValue)) * 100;
      console.log(pos);
      accumulator += this.step;
    }
    tickArray.push(this.maxValue);
    return tickArray;
  }

  private updateThumbLabelPosition(): string {
    const REL_POS = Number(
      ((this.currentValue - this.minValue) * 100) /
        (this.maxValue - this.minValue)
    );
    return `calc(${REL_POS}% + (${8 - REL_POS * 0.15}px))`;
  }
}
