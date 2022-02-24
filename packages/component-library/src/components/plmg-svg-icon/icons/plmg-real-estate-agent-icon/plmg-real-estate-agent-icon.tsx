import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-real-estate-agent-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class RealEstateAgentIcon {
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
          <path d="M21 6.5V14h-2V7.5L14 4 9 7.5V9H7V6.5l7-5 7 5zm-5.5.5h-1v1h1V7zm-2 0h-1v1h1V7zm2 2h-1v1h1V9zm-2 0h-1v1h1V9zm5.5 7h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM3 20v-7h2v7H3zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56l-5.93 1.84z" />
        </svg>
      </Host>
    );
  }
}
