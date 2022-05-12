import { Component, h, Prop, Watch } from '@stencil/core';
import { plmgColorBorderNeutral } from '@ducky/plumage-tokens';

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
   * Define icon's color.
   *
   * Can be any valid CSS color value.
   *
   * Default is plmgColorBorderNeutral
   */

  @Prop() color: string = plmgColorBorderNeutral;
  @Watch('color')
  validateColor(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('color: must be a valid value');
  }
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
    const seperatorClasses = {
      'plmg-separator': true,
      [this.thickness]: true,
      [this.direction]: true,
    };

    const backgroundColorStyle = {
      backgroundColor: this.color ?? plmgColorBorderNeutral,
    };

    return (
      <div class={`plmg-separator-container-${this.direction}`}>
        <hr class={seperatorClasses} style={backgroundColorStyle} />
      </div>
    );
  }
}
