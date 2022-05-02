import { Component, h, Prop, Watch } from '@stencil/core';
import {
  isPlmgSeparatorDirection,
  isPlmgSeparatorWidth,
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
   * Define separator's width.
   *
   * Allowed values:
   *   - thin
   *   - thick
   *
   * Default: thin
   */
  @Prop() width: string = 'thin';
  @Watch('width')
  validateWidth(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('width: required');
    if (!isPlmgSeparatorWidth(newValue))
      throw new Error('width: must be a valid value');
  }
  /**
   * Define separator's color.
   *
   * Allowed values:
   *   - TODO
   *
   * Default: $plmg-border-neutral
   */
  @Prop() color: string = '$plmg-border-neutral';
  @Watch('color')
  validateColor(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('color: required');
  }

  render() {
    const classes = {
      'plmg-separator': true,
      [this.width]: true,
      vertical: this.direction === 'vertical',
    };

    return <hr class={classes} />;
  }
}
