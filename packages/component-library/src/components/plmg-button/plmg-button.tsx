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
  render() {
    const classes = {
      'plmg-button': true,
      [this.design]: true,
      [this.size]: true,
      [this.color]: true,
      'full-width': this.fullWidth,
      shadow: this.shadow,
    };

    if (this.href) {
      return (
        <a class={classes} href={this.href} rel={this.rel} target={this.target}>
          <slot></slot>
        </a>
      );
    }

    return (
      <button class={classes} type={this.type}>
        <slot></slot>
      </button>
    );
  }
}
