import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-baby-changing-station-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class BabyChangingStationIcon {
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
          <path d="M14 8v2h-3L8.31 8.82 7 12.75V22H3V12l1.58-4.63c.38-1.12 1.64-1.68 2.72-1.19l4.15 1.83L14 8zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm1 18h12v-2H9v2zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM13 12c0-.55-.45-1-1-1H9v2h2v1c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3h-2v2h-2v-1z" />
        </svg>
      </Host>
    );
  }
}
