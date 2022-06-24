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

  @Prop() trackWidth: number;
  @Watch('value')
  validateWidth(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('trackWidth number be a number');
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
    console.log(this.trackWidth);
  }
  render() {
    return (
      <div class={'plmg-slider-mark-container'}>
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
    );
  }

  private calculateRelativePosition(value: number) {
    // Get the relative position of the current value based on the range
    // TODO Account for floating point numbers
    return (Number(value - this.min) / (this.max - this.min)) * 100;
  }

  private setTickLabelPosition(item: number) {
    // Store relative position
    const RELATIVE_POSITION = this.calculateRelativePosition(item);
    // width of the track. received as a prop
    const TRACK_WIDTH = this.trackWidth;
    // Get length of each string
    const STRING_LENGTH = item.toString().length;
    // Define size of each character
    const CHARACTER_SIZE = 8;
    // All ticks are postioned with 2px left and right
    // const MARGIN_LEFT_RIGHT = 2;
    // Calculate the container width
    const CONTAINER_WIDTH = STRING_LENGTH * CHARACTER_SIZE;
    // Calculate offset.
    const CONTAINER_OFFSET_PIXEL_VALUE =
      CONTAINER_WIDTH / 2 - (RELATIVE_POSITION / 100) * CONTAINER_WIDTH;
    // Calculate position. px as % of track
    const CONTAINER_OFFSET_RELATIVE_VALUE =
      CONTAINER_OFFSET_PIXEL_VALUE + (RELATIVE_POSITION * TRACK_WIDTH) / 100;
    const CONTAINER_OFFSET_AS_PERCENT_OF_TRACK =
      (CONTAINER_OFFSET_RELATIVE_VALUE / TRACK_WIDTH) * 100;

    console.log('current value', item);
    console.log('relative postion', RELATIVE_POSITION);
    console.log('track width', TRACK_WIDTH);
    console.log('string length', STRING_LENGTH);
    console.log('container size', CONTAINER_WIDTH, 'px');
    console.log('container offset', CONTAINER_OFFSET_PIXEL_VALUE, 'px'),
      console.log('conatainer offset value', CONTAINER_OFFSET_PIXEL_VALUE, '%');
    console.log(
      'conataine offset relative ',
      CONTAINER_OFFSET_AS_PERCENT_OF_TRACK,
      '%'
    );

    return {
      width: `${CONTAINER_WIDTH}px`,
      background: 'pink',
      left: `${CONTAINER_OFFSET_AS_PERCENT_OF_TRACK}%`,
    };
  }
}
