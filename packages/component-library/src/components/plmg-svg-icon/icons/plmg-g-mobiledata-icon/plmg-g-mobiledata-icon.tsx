import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-g-mobiledata-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class GMobiledataIcon {
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
          <path d="M12 11v2h2v2H9V9h7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4z" />
        </svg>
      </Host>
    );
  }
}
