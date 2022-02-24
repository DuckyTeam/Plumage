import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-emergency-share-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class EmergencyShareIcon {
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
          <path d="M12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41C14.63 6.56 13.38 6 12 6s-2.63.56-3.54 1.46L7.05 6.05C8.32 4.78 10.07 4 12 4zm7.78-.77-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23zM12 11c1.94 0 4 1.45 4 4.15 0 .94-.55 2.93-4 6.17-3.45-3.24-4-5.23-4-6.17 0-2.7 2.06-4.15 4-4.15zm0-2c-3.15 0-6 2.41-6 6.15 0 2.49 2 5.44 6 8.85 4-3.41 6-6.36 6-8.85C18 11.41 15.15 9 12 9zm1.5 6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z" />
        </svg>
      </Host>
    );
  }
}
