import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-timer-off-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class TimerOffIcon {
  /**
   * Set SVG size (width and height)
   *
   * Allowed values:
   *   - small
   *   - medium
   *   - large
   *   - extra-large
   *   - <number><unit>
   *
   * Default: 1em
   */
  @Prop() size: string | 'small' | 'medium' | 'large' | 'extra-large' = '1em';

  render() {
    return (
      <Host class={{ 'plmg-svg-icon': true }}>
        <svg
          class={{ 'plmg-svg-icon-svg': true }}
          xmlns={'http://www.w3.org/2000/svg'}
          width={sizes[this.size] ?? this.size}
          height={sizes[this.size] ?? this.size}
          viewBox={'0 0 24 24'}
        >
          <path d="M9 1h6v2H9zm3 5c3.87 0 7 3.13 7 7 0 .94-.19 1.83-.52 2.65l1.5 1.5C20.63 15.91 21 14.5 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.5 0-2.91.37-4.15 1.02l1.5 1.5C10.17 6.19 11.06 6 12 6z" />
          <path d="m11 8.17 2 2V8h-2zM2.81 2.81 1.39 4.22l3.4 3.4C3.67 9.12 3 10.98 3 13c0 4.97 4.02 9 9 9 2.02 0 3.88-.67 5.38-1.79l2.4 2.4 1.41-1.41L2.81 2.81zM12 20c-3.87 0-7-3.13-7-7 0-1.47.45-2.83 1.22-3.95l9.73 9.73C14.83 19.55 13.47 20 12 20z" />
        </svg>
      </Host>
    );
  }
}
