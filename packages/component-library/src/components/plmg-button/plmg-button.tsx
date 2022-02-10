import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { isPlmgButtonVariant, PlmgButtonVariant } from './plmg-button.types';

@Component({
  tag: 'plmg-button',
  styleUrl: 'plmg-button.scss',
  shadow: true,
})
export class Button {
  /**
   * Define button's variant.
   *
   * Default: 'filled'
   */
  @Prop() variant: PlmgButtonVariant = 'filled';
  @Watch('variant')
  validateStyle(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('variant: required');
    if (!isPlmgButtonVariant(newValue))
      throw new Error('variant: must be a valid value');
  }

  render() {
    return (
      <Host>
        <button
          class={{
            [this.variant]: true,
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
