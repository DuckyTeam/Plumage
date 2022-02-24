import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-kebab-dining-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class KebabDiningIcon {
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
          <path d="M17.75 7h.75C19.88 7 21 5.88 21 4.5S19.88 2 18.5 2h-.75V1h-1.5v1h-.75C14.12 2 13 3.12 13 4.5S14.12 7 15.5 7h.75v1H13v5h3.25v1h-.75c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h.75v4h1.5v-4h.75c1.38 0 2.5-1.12 2.5-2.5S19.88 14 18.5 14h-.75v-1H21V8h-3.25V7zM15.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1h-4v-1h4zM7.75 7h.75C9.88 7 11 5.88 11 4.5S9.88 2 8.5 2h-.75V1h-1.5v1H5.5C4.12 2 3 3.12 3 4.5S4.12 7 5.5 7h.75v1H3v5h3.25v1H5.5C4.12 14 3 15.12 3 16.5S4.12 19 5.5 19h.75v4h1.5v-4h.75c1.38 0 2.5-1.12 2.5-2.5S9.88 14 8.5 14h-.75v-1H11V8H7.75V7zM5.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1H5v-1h4z" />
        </svg>
      </Host>
    );
  }
}
