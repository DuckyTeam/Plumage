import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-auto-fix-off-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class AutoFixOffIcon {
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
          <path d="m20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17c.39-.39.39-1.02 0-1.41l-2.83-2.83c-.19-.19-.44-.29-.7-.29-.26 0-.51.1-.71.29l-2.17 2.17 1.41 1.41 1.47-1.45zM1.39 4.22l7.07 7.07-6.17 6.17c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l6.17-6.17 7.07 7.07 1.41-1.41L2.81 2.81 1.39 4.22zm9.9 9.9-5.46 5.46-1.41-1.41 5.46-5.46 1.41 1.41z" />
        </svg>
      </Host>
    );
  }
}
