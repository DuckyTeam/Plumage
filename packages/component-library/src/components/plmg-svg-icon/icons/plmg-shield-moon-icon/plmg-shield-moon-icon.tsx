import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-shield-moon-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class ShieldMoonIcon {
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
          <path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" />
          <path d="M9.01 14.33c1.75 2.17 5.12 2.24 6.96.07.23-.27.08-.68-.26-.74-1.29-.21-2.48-.98-3.18-2.2-.71-1.22-.78-2.63-.32-3.86.12-.33-.16-.66-.51-.6-3.34.62-4.89 4.61-2.69 7.33z" />
        </svg>
      </Host>
    );
  }
}
