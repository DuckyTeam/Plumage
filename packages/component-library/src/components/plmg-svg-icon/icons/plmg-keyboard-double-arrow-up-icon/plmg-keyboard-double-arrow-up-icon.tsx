import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-keyboard-double-arrow-up-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class KeyboardDoubleArrowUpIcon {
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
          <path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z" />
          <path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z" />
        </svg>
      </Host>
    );
  }
}
