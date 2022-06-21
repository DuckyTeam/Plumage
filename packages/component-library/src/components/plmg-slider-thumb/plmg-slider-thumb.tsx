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

  render() {
    return (
      <div class={'plmg-slider-thumb-label-track'}>
        {this.thumbLabel && (
          // <label htmlfor={this.name}>
          <div
            class={'plmg-slider-thumb-label-container'}
            style={this.setThumbPosition(this.value)}
          >
            <output class={'plmg-slider-thumb-label'} name={this.name}>
              {this.value}
            </output>
            <span class={'plmg-thumb-triangle'} />
          </div>
          // </label>
        )}
      </div>
    );
  }

  private calculateRelativePosition(value: number) {
    // Does not account for floating point numbers
    return (Number(value - this.min) / (this.max - this.min)) * 100;
  }
  private setThumbPosition(value: number) {
    //  offset of half of the calculate thumb
    //  we need the difference between the center of the label and the thumb
    // proportional to the distance travelled along the track

    const RELATIVE_POSITION = this.calculateRelativePosition(value);
    const OFFSET =
      (1 - (this.width - this.calculatedThumbWidth / 2) / this.width) * 100;
    const HALF_THUMB_WIDTH_PER = (1 - (this.width - 10) / this.width) * 100;
    console.log(RELATIVE_POSITION);
    console.log('half thumb %', HALF_THUMB_WIDTH_PER);
    console.log('track width', this.width);
    console.log('calculate thumb', this.calculatedThumbWidth);
    console.log('rel pos %', this.calculateRelativePosition(value));
    console.log('offset', OFFSET);

    return {
      left: `${RELATIVE_POSITION - OFFSET + HALF_THUMB_WIDTH_PER}%`,
    };
  }
}

// at the start it should be 0
// at the end it should be 348
