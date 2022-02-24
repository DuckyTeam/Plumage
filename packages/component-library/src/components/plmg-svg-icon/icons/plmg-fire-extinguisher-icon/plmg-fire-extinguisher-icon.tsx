import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-fire-extinguisher-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class FireExtinguisherIcon {
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
          <path d="M7 19h10v1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-1zm0-1h10v-5H7v5zM17 3v6l-3.15-.66c-.01 0-.01.01-.02.02 1.55.62 2.72 1.98 3.07 3.64H7.1c.34-1.66 1.52-3.02 3.07-3.64-.33-.26-.6-.58-.8-.95L5 6.5v-1l4.37-.91C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66L17 3zm-4 3c-.03-.59-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z" />
        </svg>
      </Host>
    );
  }
}
