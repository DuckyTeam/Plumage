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
    const THUMB_WIDTH = 20;
    // Calculate the container width
    const CONTAINER_WIDTH = STRING_LENGTH * CHARACTER_SIZE;
    const CONTAINER_WIDTH_REL = CONTAINER_WIDTH * (TRACK_WIDTH / TRACK_WIDTH);
    const RELATIVE_POSITION_AS_PER_TRACK =
      RELATIVE_POSITION * (TRACK_WIDTH / TRACK_WIDTH);

    // Calculate thumb pixel offset
    // Example: 0%. Offset: -10.
    // Example: 50%. Offset: 0.
    // Example: 100%. Offset: 10.
    const THUMB_PIXEL_OFFSET =
      THUMB_WIDTH / 2 - (RELATIVE_POSITION / 100) * THUMB_WIDTH;
    // convert thumb pixel offset to %
    const THUMB_OFFSET_AS_PER = 1 - (THUMB_PIXEL_OFFSET / TRACK_WIDTH) * 100;
    // Calculate tick mark container offset

    const CONTAINER_OFFSET =
      1 -
      (CONTAINER_WIDTH_REL / 2 -
        (RELATIVE_POSITION / 100) * CONTAINER_WIDTH_REL);
    // convert conatiner offset to %
    const CONTAINER_OFFSET_AS_PER = (CONTAINER_OFFSET / TRACK_WIDTH) * 100;

    const ADJUSTED_RELATIVE_POSITION =
      RELATIVE_POSITION_AS_PER_TRACK <= 50
        ? RELATIVE_POSITION_AS_PER_TRACK +
          CONTAINER_OFFSET_AS_PER -
          THUMB_OFFSET_AS_PER
        : RELATIVE_POSITION - CONTAINER_OFFSET_AS_PER - THUMB_OFFSET_AS_PER;

    const ADJUST_RELATIVE_POSITION_FOR_THUMB_OFFSET =
      CONTAINER_OFFSET - THUMB_OFFSET_AS_PER;

    const ADJUST_RELATIVE_POSITION_FOR_CONTAINER_OFFEST =
      ADJUST_RELATIVE_POSITION_FOR_THUMB_OFFSET + CONTAINER_OFFSET;

    // Calculate the container width

    // Calculate offset.
    // at value 0% thumb positive 2.5% offset.
    // container offset is 0%
    // conatiner needs to be 0 - 2.5%
    // at value 50% thumb is 0% offset
    // container needs to be at 50 - 0
    // at value 100% thumb is negative 2.5% offset

    // first mark needs to be 2px in
    // last mark needs to be 2px out
    // or actually just relative to the thumb and the label
    // label needs to be positoned relative to the thumb offset - half of its width
    // console.log(
    //   'relative position as pixel % of track',
    //   RELATIVE_POSITION_AS_PER_TRACK,
    //   '%'
    // );
    console.log('current value', item);
    console.log('thumb pixel offset', THUMB_PIXEL_OFFSET, 'px');
    console.log('thumb percentage offset', THUMB_OFFSET_AS_PER, '%');
    console.log('container width', CONTAINER_WIDTH);
    console.log('container width', CONTAINER_WIDTH_REL);
    console.log('container pix offest', CONTAINER_OFFSET);
    console.log('container percentage offset', CONTAINER_OFFSET_AS_PER, '%');
    console.log('relative postion', RELATIVE_POSITION, '%');
    console.log('adjusted relative position', ADJUSTED_RELATIVE_POSITION);
    console.log('contained offset percent', CONTAINER_OFFSET_AS_PER);
    console.log(
      'adjust for container offset',
      ADJUST_RELATIVE_POSITION_FOR_CONTAINER_OFFEST
    );
    console.log('track width', TRACK_WIDTH, 'px');
    console.log('string length', STRING_LENGTH);
    console.log('container size', CONTAINER_WIDTH, 'px');

    return {
      width: `${CONTAINER_WIDTH}px`,
      left: `${ADJUSTED_RELATIVE_POSITION}%`,
    };
  }
}
