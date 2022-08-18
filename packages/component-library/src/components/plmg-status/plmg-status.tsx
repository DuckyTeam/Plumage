import { Component, h, Watch, Prop } from '@stencil/core';
import { PlmgStatusVariant, isPlmgStatusVariant } from './plmg-status.types';

@Component({
  tag: 'plmg-status',
  styleUrl: 'plmg-status.scss',
  shadow: true,
})
export class Status {
  /**
   * Define status variant
   *
   * Allowed values:
   *   - neutral
   *   - danger
   *   - info
   *   - warning
   *   - success
   *
   * Sets background and text colors
   *
   * required
   */
  @Prop() variant!: PlmgStatusVariant;
  @Watch('variant')
  validateVariant(newValue: string) {
    if (!isPlmgStatusVariant(newValue))
      throw new Error('variant must be a valid value');
  }

  /**
   * Define status's left icon.
   *
   * When providing an icon name to this prop, the corresponding icon will be displayed.
   * it will be placed to the left of the text slot.
   */
  @Prop() iconLeft: string = undefined;
  @Watch('iconLeft')
  validateIconLeft(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('iconLeft must be a string');
  }

  /**
   * Define status's right icon.
   *
   * When providing an icon name to this prop, the corresponding icon will be displayed.
   * it will be placed to the right of the text slot.
   */
  @Prop() iconRight: string = undefined;
  @Watch('iconRight')
  validateIconRight(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('iconRight must be a string');
  }

  componentWillLoad() {
    this.validateVariant(this.variant);
    this.validateIconRight(this.iconLeft);
    this.validateIconRight(this.iconRight);
  }

  render() {
    const classes = {
      'plmg-status': true,
      [this.variant]: true,
    };

    return (
      <span class={classes}>
        {this.hasIconLeft() && (
          <plmg-svg-icon class={'icon-left'} icon={this.iconLeft} />
        )}
        <slot></slot>
        {this.hasIconRight() && (
          <plmg-svg-icon class={'icon-right'} icon={this.iconRight} />
        )}
      </span>
    );
  }

  private hasIconLeft() {
    return this.iconLeft && (this.iconLeft as string) !== '';
  }

  private hasIconRight() {
    return this.iconRight && (this.iconRight as string) !== '';
  }
}
