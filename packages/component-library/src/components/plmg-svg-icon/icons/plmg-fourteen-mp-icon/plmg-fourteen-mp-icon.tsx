import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-fourteen-mp-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class FourteenMpIcon {
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
          <path d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6-1.5v6H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zm3 3H15V14h1.5v1.5z" />
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
          <path d="M8.5 11.5H10v-6H7V7h1.5zm6.5 0h1.5V10h1V8.5h-1v-3H15v3h-1.5v-3H12V10h3z" />
        </svg>
      </Host>
    );
  }
}
