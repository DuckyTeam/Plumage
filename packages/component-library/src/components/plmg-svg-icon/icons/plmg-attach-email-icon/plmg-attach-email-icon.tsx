import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-attach-email-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class AttachEmailIcon {
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
          <path d="m3 6 8 5 8-5v3h2V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h10v-2H3V6zm16-2-8 5-8-5h16z" />
          <path d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5c0-1.38-1.12-2.5-2.5-2.5S15 12.12 15 13.5V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z" />
        </svg>
      </Host>
    );
  }
}
