import {
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';

/**
 * Header sitting on top of the page.
 * Reveals the Sidebar when clicking the expand button (therefore, you must add PlmgSidebar as well).
 * This header must be wrapped inside a PlmgPageContainer, on the "header" slot.
 *
 * Note: only a single instance of PlmgHeader is allowed on a web page.
 *
 * @slot left - Content floating to the left
 * @slot right - Content floating to the right
 */
@Component({
  tag: 'plmg-header',
  styleUrl: 'plmg-header.scss',
  shadow: true,
})
export class Header {
  /**
   * Store the expanded status of the sidebar
   */
  @State() isSidebarExpanded: boolean;

  /**
   * Define if the sidebar is expanded on startup.
   */
  @Prop() sidebarExpanded: boolean = false;
  @Watch('sidebarExpanded')
  onSidebarExpandedChange(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('sidebarExpanded: must be boolean');
    this.isSidebarExpanded = newValue;
  }

  /**
   * Event dispatched when the button to expand the sidebar is clicked.
   */
  @Event() expandSidebar: EventEmitter<void>;

  /**
   * Lifecycle method, called once just after the component is first connected to the DOM.
   * Initialise the state.
   */
  componentWillLoad() {
    this.isSidebarExpanded = this.sidebarExpanded;
  }

  /**
   * Grab collapse sidebar event, from PlmgSidebar.
   * Reveals the "expand" icon and update the margin left.
   */
  @Listen('collapseSidebar', {})
  onCollapseSidebar() {
    this.sidebarCollapsedHandler();
  }

  /**
   * Invoke this method to reveals the "expand" icon and update the margin left
   */
  @Method()
  async sidebarCollapsedHandler() {
    this.isSidebarExpanded = false;
  }

  render() {
    const containerClasses = {
      'plmg-header-container': true,
      'plmg-header-sidebar-expanded': this.isSidebarExpanded,
    };
    return (
      <div class={containerClasses}>
        {!this.isSidebarExpanded && (
          <plmg-button
            class={'plmg-sidebar-expand-btn'}
            size={'medium'}
            design={'borderless'}
            icon-center={'menu'}
            label={'Expand sidebar'}
            onClick={() => {
              this.isSidebarExpanded = true;
              this.expandClickHandler();
            }}
          />
        )}
        <div class={'plmg-sidebar-content-container'}>
          <div class={'plmg-header-left-container'}>
            <slot name={'left'} />
          </div>
          <div class={'plmg-header-right-container'}>
            <slot name={'right'} />
          </div>
        </div>
      </div>
    );
  }

  private expandClickHandler() {
    this.expandSidebar.emit();
  }
}
