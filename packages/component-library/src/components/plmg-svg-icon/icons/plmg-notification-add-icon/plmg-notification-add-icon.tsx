import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-notification-add-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class NotificationAddIcon {
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
          <path d="M16 14v3H8v-7c0-2.21 1.79-4 4-4 .85 0 1.64.26 2.28.72l1.43-1.43c-.64-.51-1.39-.88-2.21-1.09v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H4v2h16v-2h-2v-3h-2zm-4 8c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM24 8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z" />
        </svg>
      </Host>
    );
  }
}
