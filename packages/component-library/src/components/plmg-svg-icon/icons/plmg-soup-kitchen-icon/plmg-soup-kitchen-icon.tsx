import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-soup-kitchen-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class SoupKitchenIcon {
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
          <path d="M6.4 7c-.34.55-.4.97-.4 1.38C6 9.15 7 11 7 12c0 .95-.4 1.5-.4 1.5H5.1s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38h1.5zm5 0c-.34.55-.4.97-.4 1.38 0 .77 1 2.62 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38h-1.5zM8.15 7c-.34.55-.4.97-.4 1.38 0 .77 1 2.63 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38h-1.5zM18.6 2c-1.54 0-2.81 1.16-2.98 2.65L14.53 15H4.01c-.6 0-1.09.53-1 1.13C3.53 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .3-.1 1.25-.1 1.25l1.97.25s.13-1.06.13-1.5c0-1.65-1.35-3-3-3zM9.75 20c-1.94 0-3.67-1.23-4.43-3h8.79c-.72 1.78-2.42 3-4.36 3z" />
        </svg>
      </Host>
    );
  }
}
