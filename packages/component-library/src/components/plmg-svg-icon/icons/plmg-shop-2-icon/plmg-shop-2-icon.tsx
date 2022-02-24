import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-shop-2-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class Shop2Icon {
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
          <path d="M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z" />
          <path d="M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z" />
          <path d="M12 8v7l5.5-3.5z" />
        </svg>
      </Host>
    );
  }
}
