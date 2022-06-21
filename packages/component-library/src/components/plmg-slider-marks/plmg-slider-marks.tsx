import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'plmg-slider-marks',
  styleUrl: 'plmg-slider-marks.scss',
  shadow: true,
})
export class SliderMarks {
  @Prop() value: number;
  @Watch('value')
  validateDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('default value number be a number');
  }

  @Prop() range: Array<number>;
  Event: any;
  @Watch('range')
  validateRange(newValue: Array<number>) {
    if (!Array.isArray(newValue) || newValue.length < 2)
      throw new Error('range must be an array with at least two items');
  }

  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('name must be a string');
  }

  @Prop() marks: boolean = true;
  @Watch('marks')
  onThumbLabel(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('thumb label must be boolean');
  }

  @Prop() width: number;
  @Watch('value')
  validateWidth(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('width number be a number');
  }

  @Prop() min: number;
  @Watch('value')
  validateMin(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('min number be a number');
  }

  @Prop() max: number;
  @Watch('value')
  validateMax(newValue: number) {
    if (typeof newValue !== 'number') throw new Error('max number be a number');
  }

  connectedCallback() {
    console.log(this.width);
  }
  render() {
    return (
      <div class={'plmg-slider-mark-container'}>
        {this.marks && (
          <div class={'plmg-slider-inner'}>
            {this.range.map((item, index) => (
              <div
                key={index}
                class={'plmg-slider-mark-label-item'}
                style={this.setTickLabelPosition(item)}
              >
                <span class={'plmg-slider-tick'}>&#8205;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  private calculateRelativePosition(value: number) {
    // Does not account for floating point numbers
    return (Number(value - this.min) / (this.max - this.min)) * 100;
  }

  private setTickLabelPosition(item: number) {
    const STRING_LENGTH = item.toString().length;
    const CHARACTER_SIZE = 8;

    const CONTAINER_WIDTH = STRING_LENGTH * CHARACTER_SIZE;
    const OFFSET =
      (this.calculateRelativePosition(item) / 100) * this.width -
      CONTAINER_WIDTH / 2;

    return {
      width: `${CONTAINER_WIDTH}px`,
      left: `${OFFSET}px`,
    };
  }
}
