import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-wifi-2-bar-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class Wifi2BarIcon {
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
          <path d="M12 10c3.03 0 5.78 1.23 7.76 3.22l-2.12 2.12C16.2 13.9 14.2 13 12 13c-2.2 0-4.2.9-5.64 2.35l-2.12-2.12C6.22 11.23 8.97 10 12 10zm0 6c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54c-.9-.9-2.15-1.46-3.53-1.46z" />
        </svg>
      </Host>
    );
  }
}
