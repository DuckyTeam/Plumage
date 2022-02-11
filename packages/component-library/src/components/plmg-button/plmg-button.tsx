import { Component, Host, h, Prop, Watch } from '@stencil/core';
import {
  isPlmgButtonSize,
  isPlmgButtonVariant,
  PlmgButtonSize,
  PlmgButtonVariant,
} from './plmg-button.types';

@Component({
  tag: 'plmg-button',
  styleUrl: 'plmg-button.scss',
  shadow: true,
})
export class Button {
  /**
   * Define button's variant.
   *
   * Allowed values:
   *   - filled
   *   - filled-round
   *   - outline
   *   - outline-round
   *   - borderless
   *
   * Default: filled
   */
  @Prop() variant: PlmgButtonVariant = 'filled';
  @Watch('variant')
  validateVariant(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('variant: required');
    if (!isPlmgButtonVariant(newValue))
      throw new Error('variant: must be a valid value');
  }

  /**
   * Define button's size
   *
   * Allowed values:
   *   - small
   *   - medium
   *   - large
   *   - extra-large
   *
   * Default: medium
   */
  @Prop() size: PlmgButtonSize = 'medium';
  @Watch('size')
  validateSize(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('size: required');
    if (!isPlmgButtonSize(newValue))
      throw new Error('size: must be a valid value');
  }

  render() {
    return (
      <Host>
        <button
          class={{
            [this.variant]: true,
            [this.size]: true,
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
