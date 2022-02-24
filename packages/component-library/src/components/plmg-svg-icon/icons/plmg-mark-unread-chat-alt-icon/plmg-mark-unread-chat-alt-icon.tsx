import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-mark-unread-chat-alt-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class MarkUnreadChatAltIcon {
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
          <path d="M20 16H4V4h10.1c-.08-.39-.18-1.11 0-2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V6.98c-.58.44-1.26.77-2 .92V16z" />
          <circle cx="19" cy="3" r="3" />
          <path d="M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1c-1.21-.25-2.25-.95-2.97-1.9H6v2z" />
        </svg>
      </Host>
    );
  }
}
