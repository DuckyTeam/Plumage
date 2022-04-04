import { Component, h, Prop, Watch } from '@stencil/core';
import {
  isPlmgButtonColor,
  isPlmgButtonSize,
  isPlmgButtonDesign,
  isPlmgButtonType,
  PlmgButtonColor,
  PlmgButtonSize,
  PlmgButtonDesign,
  PlmgButtonType,
} from './plmg-button.types';

/**
 * @slot default - Text content of the button
 */
@Component({
  tag: 'plmg-button',
  styleUrl: 'plmg-button.scss',
  shadow: false,
})
export class Button {
  /**
   * Define button's design.
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
  @Prop() design: PlmgButtonDesign = 'filled';
  @Watch('design')
  validateDesign(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('design: required');
    if (!isPlmgButtonDesign(newValue))
      throw new Error('design: must be a valid value');
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

  /**
   * Define button's color
   *
   * Allowed values:
   *   - primary
   *   - neutral
   *   - standout
   *   - danger
   *
   * Default: primary
   */
  @Prop() color: PlmgButtonColor = 'primary';
  @Watch('color')
  validateColor(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('color: required');
    if (!isPlmgButtonColor(newValue))
      throw new Error('color: must be a valid value');
  }

  /**
   * Define button's width
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() fullWidth: boolean = false;
  @Watch('fullWidth')
  validateFullWidth(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('fullWidth: must be boolean');
  }

  /**
   * Define button's shadow
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() shadow: boolean = false;
  @Watch('shadow')
  validateShadow(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('shadow: must be boolean');
  }

  /**
   * Define button's type
   *
   * Allowed values:
   *   - button
   *   - submit
   *   - reset
   *
   * Default: button
   */
  @Prop() type: PlmgButtonType = 'button';
  @Watch('type')
  validateType(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('type: required');
    if (!isPlmgButtonType(newValue))
      throw new Error('type: must be a valid value');
  }

  /**
   * Define button as a link
   */
  @Prop() href: string;
  @Watch('href')
  validateHref(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('href must be a string');
  }

  /**
   * Define links rel
   */
  @Prop() rel: string;
  @Watch('rel')
  validateRel(newValue: string) {
    if (newValue && !this.href)
      throw new Error('button must have a href to have a rel');
    if (newValue && typeof newValue !== 'string')
      throw new Error('rel must be a string');
  }

  /**
   * Define links target
   */
  @Prop() target: string;
  @Watch('target')
  validateTarget(newValue: string) {
    if (newValue && !this.href)
      throw new Error('button must have a href to have a target');
    if (newValue && typeof newValue !== 'string')
      throw new Error('target must be a string');
  }

  /**
   * Define button's left icon.
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
   * Define button's right icon.
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

  /**
   * Define button's centered icon.
   *
   * When providing an icon name to this prop, the corresponding icon will be displayed.
   * it will be placed to the center.
   *
   * You must provide a label.
   *
   * When providing a center icon, you should not provide a text slot.
   * That is because the center icon will be bigger than the text, to render with the same height as other buttons.
   * If you do provide both the center icon and the text slot, the icon will appear just before the text slot.
   */
  @Prop() iconCenter: string = undefined;
  @Watch('iconCenter')
  validateIconCenter(newValue: string) {
    if (newValue && !this.label)
      throw new Error(
        'Icon Button must have a label for accessibility reasons'
      );
    if (newValue && typeof newValue !== 'string')
      throw new Error('iconCenter must be a string');
  }

  /**
   * An accessible label for the Icon Button. If no label is supplied, the icon is hidden from assistive technology.
   *
   * You must provide this when providing iconCenter.
   */
  @Prop() label: string | undefined = undefined;
  @Watch('label')
  validateLabel(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('label must be a string');
  }

  render() {
    const classes = {
      'plmg-button': true,
      [this.design]: true,
      [this.size]: true,
      [this.color]: true,
      'full-width': this.fullWidth,
      shadow: this.shadow,
      'icon-button': this.hasIconCenter(),
    };

    if (this.href) {
      return (
        <a
          class={classes}
          href={this.href}
          rel={this.rel}
          target={this.target}
          aria-label={this.label}
        >
          {this.hasIconLeft() && (
            <plmg-svg-icon class={'icon-left'} icon={this.iconLeft} />
          )}
          {this.hasIconCenter() && (
            <plmg-svg-icon class={'icon-center'} icon={this.iconCenter} />
          )}
          <slot></slot>
          {this.hasIconRight() && (
            <plmg-svg-icon class={'icon-right'} icon={this.iconRight} />
          )}
        </a>
      );
    }

    return (
      <button class={classes} type={this.type} aria-label={this.label}>
        {this.hasIconLeft() && (
          <plmg-svg-icon class={'icon-left'} icon={this.iconLeft} />
        )}
        {this.hasIconCenter() && (
          <plmg-svg-icon class={'icon-center'} icon={this.iconCenter} />
        )}
        <slot></slot>
        {this.hasIconRight() && (
          <plmg-svg-icon class={'icon-right'} icon={this.iconRight} />
        )}
      </button>
    );
  }

  private hasIconLeft() {
    return this.iconLeft && (this.iconLeft as string) !== '';
  }

  private hasIconRight() {
    return this.iconRight && (this.iconRight as string) !== '';
  }

  private hasIconCenter() {
    return this.iconCenter && (this.iconCenter as string) !== '';
  }
}
