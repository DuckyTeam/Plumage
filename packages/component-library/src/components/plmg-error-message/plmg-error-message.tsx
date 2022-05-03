import { Component, Prop, Watch, h } from '@stencil/core';
import {
  PlmgErrorMessageSize,
  isPlmgErrorMessageSize,
} from './plmg-error-message.types';
@Component({
  tag: 'plmg-error-message',
  styleUrl: 'plmg-error-message.scss',
  shadow: false,
})
export class ErrorMessage {
  /**
   * Define error message's size
   *
   * Allowed values:
   *   - medium
   *   - large
   *
   * Default: medium
   */
  @Prop() size: PlmgErrorMessageSize = 'medium';
  @Watch('size')
  validateSize(newValue: string) {
    if (!isPlmgErrorMessageSize(newValue))
      throw new Error('size: must be a valid value');
  }

  /**
   * Define error message's message
   */
  @Prop() message: string;
  @Watch('message')
  validateMessage(newValue: string) {
    if (typeof newValue !== 'string' || newValue === '')
      throw new Error('message: required');
  }

  render() {
    const errorClasses = {
      large: this.size === 'large',
      medium: this.size === 'medium',
      'error-message-wrapper': true,
    };
    return (
      <div class={errorClasses}>
        <plmg-svg-icon icon="warningAmber" />
        <span>{this.message}</span>
      </div>
    );
  }
}
