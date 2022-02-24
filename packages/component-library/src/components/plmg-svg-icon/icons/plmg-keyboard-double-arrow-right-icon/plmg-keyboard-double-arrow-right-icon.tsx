import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-keyboard-double-arrow-right-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class KeyboardDoubleArrowRightIcon {
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
          <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
          <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
        </svg>
      </Host>
    );
  }
}
