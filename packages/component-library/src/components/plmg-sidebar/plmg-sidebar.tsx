import {
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  State,
  Prop,
  Watch,
  Method,
} from '@stencil/core';

/**
 * A collapsable Sidebar, rendered to the left of the screen.
 * Hidden by default on extra-small and small devices, this sidebar is revealed when clicking the expand button
 * on the PlmgHeader (therefore, you must add PlmgHeader as well).
 * This sidebar must be wrapped inside a PlmgPageContainer, on the "sidebar" slot.
 *
 * Note: only a single instance of PlmgSidebar is allowed on a web page.
 *
 * @slot default - Add one or more PlmgSidebarItem to this default slot.
 */
@Component({
  tag: 'plmg-sidebar',
  styleUrl: 'plmg-sidebar.scss',
  shadow: true,
})
export class Sidebar {
  /**
   * Store the expanded status of the item.
   */
  @State() isExpanded: boolean;

  /**
   * Define if the item is expanded.
   * Only valid when this item has children.
   */
  @Prop() expanded: boolean = false;
  @Watch('expanded')
  onExpandedChange(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('expanded: must be boolean');
    this.isExpanded = newValue;
  }

  /**
   * Event dispatched when the button to collapse the sidebar is clicked.
   */
  @Event() collapseSidebar: EventEmitter;

  /**
   * Lifecycle method, called once just after the component is first connected to the DOM.
   * Initialise the state.
   */
  componentWillLoad() {
    this.isExpanded = this.expanded;
  }

  /**
   * Grab expand sidebar event, from PlmgHeader.
   * Expand the sidebar.
   */
  @Listen('expandSidebar', {})
  onClick() {
    this.expand();
  }

  /**
   * Invoke this method to expand the sidebar.
   */
  @Method()
  async expand() {
    this.isExpanded = true;
  }

  render() {
    const containerClasses = {
      'plmg-sidebar': true,
      'plmg-sidebar-expanded': this.isExpanded,
    };

    return (
      <nav class={containerClasses}>
        <plmg-button
          iconCenter={'menuOpen'}
          label={'Close Sidebar'}
          design={'borderless'}
        />
        <slot></slot>
      </nav>
    );
  }
}
