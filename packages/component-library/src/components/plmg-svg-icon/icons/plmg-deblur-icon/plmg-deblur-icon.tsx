import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-deblur-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class DeblurIcon {
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
          <circle cx="6" cy="14" r="1" />
          <circle cx="6" cy="18" r="1" />
          <circle cx="6" cy="10" r="1" />
          <circle cx="3" cy="10" r=".5" />
          <circle cx="6" cy="6" r="1" />
          <circle cx="3" cy="14" r=".5" />
          <circle cx="10" cy="21" r=".5" />
          <circle cx="10" cy="3" r=".5" />
          <circle cx="10" cy="6" r="1" />
          <circle cx="10" cy="14" r="1.5" />
          <circle cx="10" cy="10" r="1.5" />
          <circle cx="10" cy="18" r="1" />
          <path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z" />
        </svg>
      </Host>
    );
  }
}
