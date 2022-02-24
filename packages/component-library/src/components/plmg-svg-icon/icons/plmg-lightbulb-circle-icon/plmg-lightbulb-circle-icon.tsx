import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-lightbulb-circle-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class LightbulbCircleIcon {
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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 19c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5zm-3-4h6v1.5H9zm3-10c-2.76 0-5 2.24-5 5 0 1.64.8 3.09 2.03 4h5.95c1.22-.91 2.02-2.36 2.02-4 0-2.76-2.24-5-5-5zm2.43 7.5H9.57c-.68-.66-1.07-1.55-1.07-2.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.39 1.84-1.07 2.5z" />
        </svg>
      </Host>
    );
  }
}
