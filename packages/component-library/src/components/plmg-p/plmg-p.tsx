import { Component, h } from '@stencil/core';

@Component({
  tag: 'plmg-p',
  styleUrl: 'plmg-p.scss',
  shadow: true,
})
export class PlmgP {
  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }
}
