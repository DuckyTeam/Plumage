import { Component, h, Prop, Watch } from '@stencil/core';
import { PlmgAvatarSize, isPlmgAvatarSize } from './plmg-avatar.types';

@Component({
  tag: 'plmg-avatar',
  styleUrl: 'plmg-avatar.scss',
  shadow: true,
})
export class Avatar {
  /**
   * Define imageUrl
   *
   * Allowed value:
   * - Any string
   *
   * If no image url is passed, default icon is displayed.
   **/
  @Prop() imageUrl: string;
  @Watch('imageUrl')
  validateImageUrl(newValue: string) {
    if (typeof newValue !== 'string')
      throw new Error('imageUrl must be a string');
  }

  /**
   * Define userDeleted
   *
   * Displays the deleted user icon
   *
   * Allowed values:
   * - true
   * - false
   *
   * Default: false
   **/
  @Prop() userDeleted: boolean = false;
  @Watch('userDeleted')
  validateUserDeleted(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('userDeleted must be a boolean');
  }

  /**
   * Define size
   *
   * Allowed values:
   * - small
   * - medium
   * - large
   * - extra-large
   *
   * Required
   **/
  @Prop() size!: PlmgAvatarSize;
  @Watch('size')
  validateSize(newValue: string) {
    if (typeof newValue !== 'string') throw new Error('size must be a string');
    if (!this.size) throw new Error('size prop is required');
    if (!isPlmgAvatarSize(newValue)) {
      throw new Error('size must be a valid value');
    }
  }

  render() {
    const classes = {
      'plmg-avatar': true,
      [this.size]: true,
    };

    return (
      <div
        tabIndex={0}
        class={classes}
        style={
          !this.userDeleted && { backgroundImage: `url(${this.imageUrl})` }
        }
      >
        {(!this.imageUrl || this.userDeleted) && (
          <plmg-svg-icon
            icon={this.userDeleted ? 'personOff' : 'personOutline'}
          ></plmg-svg-icon>
        )}
      </div>
    );
  }
}
