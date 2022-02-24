import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-rotate-90-degrees-cw-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class Rotate90DegreesCwIcon {
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
          <path d="M2 13c0 4.97 4.03 9 9 9 1.76 0 3.4-.51 4.79-1.38l-1.46-1.46c-.99.53-2.13.84-3.33.84-3.86 0-7-3.14-7-7s3.14-7 7-7h.17L9.59 7.59 11 9l4-4-4-4-1.42 1.41L11.17 4H11c-4.97 0-9 4.03-9 9zm9 0 6 6 6-6-6-6-6 6zm6 3.17L13.83 13 17 9.83 20.17 13 17 16.17z" />
        </svg>
      </Host>
    );
  }
}
