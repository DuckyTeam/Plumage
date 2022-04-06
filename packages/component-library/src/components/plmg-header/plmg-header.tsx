import { Component, Event, EventEmitter, Host, h } from '@stencil/core';

@Component({
  tag: 'plmg-header',
  styleUrl: 'plmg-header.scss',
  shadow: true,
})
export class Header {
  /**
   * Event dispatched when the button to expand the sidebar is clicked.
   */
  @Event() expandSidebar: EventEmitter;

  render() {
    return (
      <Host>
        <plmg-button onClick={() => this.expandClickHandler()}>
          Expand
        </plmg-button>
      </Host>
    );
  }

  private expandClickHandler() {
    this.expandSidebar.emit();
  }
}
