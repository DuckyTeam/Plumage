import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'plmg-content',
  styleUrl: 'plmg-content.scss',
  shadow: true,
})
export class Content {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
