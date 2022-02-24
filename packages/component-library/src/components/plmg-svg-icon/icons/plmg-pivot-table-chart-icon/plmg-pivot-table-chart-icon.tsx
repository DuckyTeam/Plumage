import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-pivot-table-chart-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class PivotTableChartIcon {
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
          <path d="M21 5c0-1.1-.9-2-2-2h-9v5h11V5zM3 19c0 1.1.9 2 2 2h3V10H3v9zM3 5v3h5V3H5c-1.1 0-2 .9-2 2zm15 3.99L14 13l1.41 1.41 1.59-1.6V15c0 1.1-.9 2-2 2h-2.17l1.59-1.59L13 14l-4 4 4 4 1.41-1.41L12.83 19H15c2.21 0 4-1.79 4-4v-2.18l1.59 1.6L22 13l-4-4.01z" />
        </svg>
      </Host>
    );
  }
}
