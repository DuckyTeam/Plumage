import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-keyboard-double-arrow-left-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class KeyboardDoubleArrowLeftIcon {
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
          <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
          <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
        </svg>
      </Host>
    );
  }
}
