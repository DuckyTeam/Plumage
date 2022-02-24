import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-thirty-fps-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class ThirtyFpsIcon {
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
          <path d="M2 5v3h6v2.5H3v3h5V16H2v3h6c1.66 0 3-1.34 3-3v-1.9c0-1.16-.94-2.1-2.1-2.1 1.16 0 2.1-.94 2.1-2.1V8c0-1.66-1.34-3-3-3H2zm17 3v8h-4V8h4m0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3z" />
        </svg>
      </Host>
    );
  }
}
