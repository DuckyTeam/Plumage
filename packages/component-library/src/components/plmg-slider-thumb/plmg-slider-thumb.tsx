import { Component, Watch, Prop, h } from '@stencil/core';

@Component({
  tag: 'plmg-slider-thumb',
  styleUrl: 'plmg-slider-thumb.scss',
  shadow: true,
})
export class SliderThumb {
  @Prop() value: number;
  @Watch('value')
  validateDefaultValue(newValue: number) {
    if (typeof newValue !== 'number')
      throw new Error('default value number be a number');
  }

  @Prop() calculatedThumbWidth: number;
  @Watch('calculatedThumbWidth')
  log(newValue: number) {
    console.log('thumb prop changed new value', newValue);
  }
  validateThumb(newValue: number) {
    if (newValue && typeof newValue !== 'number')
      throw new Error('name must be a number');
  }

  @Prop() name: string;
  @Watch('name')
  validateName(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('name must be a string');
  }

  @Prop() thumbLabel: boolean = true;
  @Watch('thumbLabel')
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

  render() {
    return (
      <div class={'plmg-slider-thumb-label-track'}>
        {this.thumbLabel && (
          <label htmlfor={this.name}>
            <div
              class={'plmg-slider-thumb-label-triangle-container'}
              style={this.setThumbPosition(this.value)}
            >
              <output class={'plmg-slider-thumb-label'} name={this.name}>
                {this.value}
              </output>
              <span class={'plmg-thumb-triangle'} />
            </div>
          </label>
        )}
      </div>
    );
  }

  private calculateRelativePosition(value: number) {
    // Get the relative position of the current value based on the range
    // TODO Account for floating point numbers
    return (Number(value - this.min) / (this.max - this.min)) * 100;
  }
  private setThumbPosition(value: number) {
    // label width. received as a prop
    const LABEL_WIDTH = this.calculatedThumbWidth;

    // width of the track. received as a prop
    const TRACK_WIDTH = this.trackWidth;

    // Store relative position
    const RELATIVE_POSITION = this.calculateRelativePosition(value);

    // Width of label as percent
    const HALF_LABEL_WIDTH_AS_PERCENTAGE_OF_TRACK =
      ((LABEL_WIDTH / TRACK_WIDTH) * 100) / 2;

    // Calculate offset.
    // Example: Label width: 23px. Offset at 0% = 11.5px. 50% = 0. 100% = -11.5px.
    const LABEL_OFFSET_PIXEL_VALUE =
      LABEL_WIDTH / 2 - (RELATIVE_POSITION / 100) * LABEL_WIDTH;

    // Calculate relative offset in pixels as % of the track width.
    // Example: Track width = 200px. Label width: 23px. Position: 0%. Offset value = 20px
    // Example: Track width = 200px. Label width: 30px. Position: 100%. Offset value = -15px
    const LABEL_OFFSET_RELATIVE_VALUE =
      LABEL_OFFSET_PIXEL_VALUE + (RELATIVE_POSITION * TRACK_WIDTH) / 100;

    // Convert from pixel offset to % offset
    // Example: Track width = 200px. Label width: 30px. Position: 100%. Offset value = 15px. Offset value = -15%.
    // Example: Track width = 200px. Label width: 30px. Position: 100%. Offset value = -15%. Offset value = -15%.
    // Example: Track width = 500px. Label width: 60px. Position: 25%. Offset value = 30px. Offset value = 30%.
    const LABEL_OFFSET_AS_PERCENT_OF_TRACK =
      (LABEL_OFFSET_RELATIVE_VALUE / TRACK_WIDTH) * 100;

    // Remove half of the label width as percent of the track
    const ADJUSTED_LABEL_OFFSET =
      LABEL_OFFSET_AS_PERCENT_OF_TRACK -
      HALF_LABEL_WIDTH_AS_PERCENTAGE_OF_TRACK;

    // console.log('label width', LABEL_WIDTH, 'px');
    // console.log('track width', TRACK_WIDTH, 'px');
    // console.log('relative position', RELATIVE_POSITION, '%');
    // console.log('label offset', LABEL_OFFSET_PIXEL_VALUE, 'px');
    // console.log('label offset', LABEL_OFFSET_RELATIVE_VALUE, '%');
    // console.log(
    //   'half of label as per of track',
    //   HALF_LABEL_WIDTH_AS_PERCENTAGE_OF_TRACK
    // );
    // console.log(
    //   'label offset as % of track',
    //   LABEL_OFFSET_AS_PERCENT_OF_TRACK,
    //   '%'
    // );
    // console.log('adjusted label offset', ADJUSTED_LABEL_OFFSET);

    return {
      left: `${ADJUSTED_LABEL_OFFSET}%`,
    };
  }
}
