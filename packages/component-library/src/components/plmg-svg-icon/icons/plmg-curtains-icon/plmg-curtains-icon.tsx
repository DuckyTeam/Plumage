import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-curtains-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class CurtainsIcon {
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
          <path d="M20 19V3H4v16H2v2h20v-2h-2zm-2-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18v5.86zM15.81 12c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7zM9.94 5c-.3 2.93-1.89 5.27-3.94 5.86V5h3.94zM6 13.14c2.05.58 3.64 2.93 3.94 5.86H6v-5.86zM14.06 19c.3-2.93 1.89-5.27 3.94-5.86V19h-3.94z" />
        </svg>
      </Host>
    );
  }
}
