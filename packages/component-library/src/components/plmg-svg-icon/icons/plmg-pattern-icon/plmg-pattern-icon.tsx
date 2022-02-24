import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-pattern-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class PatternIcon {
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
          <path d="M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-.02 6c-.74 0-1.37.4-1.72 1h-2.54c-.34-.6-.98-1-1.72-1s-1.37.4-1.72 1H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57c.34.6.98 1 1.72 1s1.37-.4 1.72-1h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2z" />
        </svg>
      </Host>
    );
  }
}
