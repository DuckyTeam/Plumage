import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-panorama-horizontal-select-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class PanoramaHorizontalSelectIcon {
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
          <path d="M12 5.5c-3.89 0-6.95-.84-8.69-1.43-.64-.22-1.31.26-1.31.95V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45.65.21 1.31-.27 1.31-.95V5c0-.68-.66-1.17-1.31-.95-2.03.68-4.83 1.45-8.69 1.45z" />
        </svg>
      </Host>
    );
  }
}
