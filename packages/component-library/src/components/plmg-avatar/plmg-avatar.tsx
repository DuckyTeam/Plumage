import { Component, h, Prop, Watch, Event, EventEmitter } from '@stencil/core';
import { PlmgAvatarSize, isPlmgAvatarSize } from './plmg-avatar.types';
import {
  plmgColorBackgroundNeutralMedium,
  plmgColorIconNeutral,
} from '@ducky/plumage-tokens';

@Component({
  tag: 'plmg-avatar',
  styleUrl: 'plmg-avatar.scss',
  shadow: true,
})
export class Avatar {
  /**
   * Define background color.
   *
   * Can be any valid CSS color value.
   *
   * Default is plmgColorBorderNeutralMedium.
   */
  @Prop() backgroundColor: string = plmgColorBackgroundNeutralMedium;
  @Watch('backgroundColor')
  validateBackgroundColor(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('color: must be a valid value');
  }
  /**
   * Define icon color.
   *
   * Can be any valid CSS color value.
   *
   * Default is plmgColorIconNeutral
   */
  @Prop() iconColor: string = plmgColorIconNeutral;
  @Watch('iconColor')
  validateIconColor(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('color: must be a valid value');
  }
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
   * Define if avatar can be interacted with
   *
   * Allowed values:
   * - true
   * - false
   *
   * If false, the avatar displays an non-interactive image
   *
   * Default: false
   **/
  @Prop() interactive: boolean = false;
  @Watch('interactive')
  validateInteractive(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('interactive must be a boolean');
  }

  /**
   * An accessible label. If no label is supplied, the icon or image is hidden from assistive technology.
   */
  @Prop() label: string | undefined = undefined;
  @Watch('label')
  validateLabel(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('label must be a string');
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
   * Exposes click handler event. Only exposed when interactive is true.
   **/
  @Event() avatarClick: EventEmitter<MouseEvent>;

  render() {
    const classes = {
      'plmg-avatar': true,
      [this.size]: true,
    };

    const backgroundColorStyle = {
      backgroundColor: this.backgroundColor ?? plmgColorBackgroundNeutralMedium,
    };

    return (
      <div
        tabIndex={this.interactive ? 0 : -1}
        onClick={this.interactive ? (e) => this.avatarClick.emit(e) : null}
        class={classes}
        style={(!this.imageUrl || this.userDeleted) && backgroundColorStyle}
        aria-label={this.label}
        role={this.interactive ? 'button' : 'img'}
      >
        {!this.imageUrl || this.userDeleted ? (
          <plmg-svg-icon
            color={this.iconColor ? this.iconColor : plmgColorIconNeutral}
            icon={this.userDeleted ? 'personOff' : 'personOutline'}
          ></plmg-svg-icon>
        ) : (
          <img class={'plmg-avatar-image'} src={this.imageUrl} alt="" />
        )}
      </div>
    );
  }
}
