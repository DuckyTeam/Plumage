import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-view-comfy-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class ViewComfyIcon {
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
          <path d="M3 5v14h19V5H3zm17 4h-2.25V7H20v2zM9.25 11h2.25v2H9.25v-2zm-2 2H5v-2h2.25v2zm4.25-4H9.25V7h2.25v2zm2-2h2.25v2H13.5V7zm-2 8v2H9.25v-2h2.25zm2 0h2.25v2H13.5v-2zm0-2v-2h2.25v2H13.5zm4.25-2H20v2h-2.25v-2zM7.25 7v2H5V7h2.25zM5 15h2.25v2H5v-2zm12.75 2v-2H20v2h-2.25z" />
        </svg>
      </Host>
    );
  }
}
