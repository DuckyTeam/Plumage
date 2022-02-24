import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-tornado-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class TornadoIcon {
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
          <path d="M23 3H1l11 19L23 3zm-3.47 2-1.74 3H6.21L4.47 5h15.06zm-9.27 10h3.48L12 18.01 10.26 15zm4.64-2H9.1l-1.74-3h9.27l-1.73 3z" />
        </svg>
      </Host>
    );
  }
}
