import { Component, Host, h, Prop } from '@stencil/core';

import sizes from '../../sizes';

@Component({
  tag: 'plmg-remove-road-icon',
  styleUrl: '../../plmg-svg-icon.scss',
  shadow: false,
})
export class RemoveRoadIcon {
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
          <path d="M18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm11.5.41L21.09 15 19 17.09 16.91 15l-1.41 1.41 2.09 2.09-2.09 2.09L16.91 22 19 19.91 21.09 22l1.41-1.41-2.09-2.09z" />
        </svg>
      </Host>
    );
  }
}
