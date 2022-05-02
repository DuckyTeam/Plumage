import { Component, h, Prop, Watch } from '@stencil/core';
import {
  isPlmgSeparatorDirection,
  isPlmgSeparatorThickness,
} from './plmg-separator.types';

@Component({
  tag: 'plmg-separator',
  styleUrl: 'plmg-separator.scss',
  shadow: true,
})
export class Separator {
  /**
   * Define separator's direction.
   *
   * Allowed values:
   *   - vertical
   *   - horizontal
   *
   * Default: horizontal
   */
  @Prop() direction: string = 'horizontal';
  @Watch('direction')
  validateDirection(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('direction: required');
    if (!isPlmgSeparatorDirection(newValue))
      throw new Error('direction: must be a valid value');
  }
  /**
   * Define separator's thickness.
   *
   * Allowed values:
   *   - thin
   *   - thick
   *
   * Default: thin
   */
  @Prop() thickness: string = 'thin';
  @Watch('thickness')
  validateThickness(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('thickness: required');
    if (!isPlmgSeparatorThickness(newValue))
      throw new Error('thickness: must be a valid value');
  }

  render() {
    const classes = {
      'plmg-separator': true,
      [this.thickness]: true,
      horizontal: this.direction !== 'vertical',
    };

    return (
      <div class={this.direction === 'vertical' && 'plmg-separator-container'}>
        <hr class={classes} />
      </div>
    );
  }
}
