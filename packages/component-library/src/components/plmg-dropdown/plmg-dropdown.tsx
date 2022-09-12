import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'plmg-dropdown',
  styleUrl: 'plmg-dropdown.scss',
  shadow: true,
})
export class Dropdown {
  @State() isVisible: boolean = false;

  render() {
    const containerClasses = {
      'plmg-dropdown': true,
      'plmg-dropdown-visible': this.isVisible,
    };

    return [
      <div
        class="plmg-dropdown-trigger"
        onMouseEnter={() => (this.isVisible = true)}
      >
        <slot name={'target'} />
      </div>,

      <nav
        class={containerClasses}
        onMouseLeave={() => (this.isVisible = false)}
      >
        <slot name={'plmg-dropdown-items'} />
      </nav>,
    ];
  }
}
