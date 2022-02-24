import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-cruelty-free-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class CrueltyFreeIcon {
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
          <path d="M17 14c-.24-.24-.44-.49-.65-.75C17.51 11.5 19 8.56 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.56 1.49 6.5 2.65 8.25-.21.26-.41.51-.65.75-.25.25-2 1.39-2 3.5C5 19.98 7.02 22 9.5 22c1.5 0 2.5-.5 2.5-.5s1 .5 2.5.5c2.48 0 4.5-2.02 4.5-4.5 0-2.11-1.75-3.25-2-3.5zm-.12-9.97c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13zM7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5zm7.5 15c-1 0-1.8-.33-2.22-.56.42-.18.72-.71.72-.94 0-.28-.45-.5-1-.5s-1 .22-1 .5c0 .23.3.76.72.94-.42.23-1.22.56-2.22.56C8.12 20 7 18.88 7 17.5c0-.7.43-1.24 1-1.73.44-.36.61-.52 1.3-1.37.76-.95 1.09-1.4 2.7-1.4s1.94.45 2.7 1.4c.69.85.86 1.01 1.3 1.37.57.49 1 1.03 1 1.73 0 1.38-1.12 2.5-2.5 2.5zm-.5-4c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75zm-3 0c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75z" />
        </svg>
      </Host>
    );
  }
}
