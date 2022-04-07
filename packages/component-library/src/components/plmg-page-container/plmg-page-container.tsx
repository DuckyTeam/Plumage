import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';

/**
 * Container for the entire web page. Wraps everything.
 * If you use PlmgSidebar and/or PlmgHeader, you must use this wrapper.
 * Place a PlmgSidebar component on the "sidebar" slot.
 * Place a PlmgHeader component on the "header" slot.
 *
 * @slot sidebar - Side navigation bar, a PlmgSidebar component.
 * @slot header - Top navigation bar, a PlmgHeader component.
 * @slot content - Main content of the web page.
 */
@Component({
  tag: 'plmg-page-container',
  styleUrl: 'plmg-page-container.scss',
  shadow: true,
})
export class PageContainer {
  private sidebar: HTMLPlmgSidebarElement;
  private header: HTMLPlmgHeaderElement;

  /**
   * Store the expanded status of the sidebar.
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
   * Lifecycle method, called once just after the component is first connected to the DOM.
   * Initialise the state.
   */
  componentWillLoad() {
    this.isSidebarExpanded = this.sidebarExpanded;
  }

  /**
   * Lifecycle method, called once just after the component is fully loaded and the first render() occurs.
   */
  componentDidLoad() {
    this.sidebar = document.querySelector('plmg-sidebar');
    this.header = document.querySelector('plmg-header');
  }

  /**
   * Listen to the expandSidebar event, triggered from the PlmgHeader,
   * and dispatch it to PlmgSidebar and PlmgContent.
   *
   * @param e
   */
  @Listen('expandSidebar', {})
  onExpandSidebar(e: Event) {
    this.isSidebarExpanded = true;
    const sidebarCopy = new Event(e.type);
    this.sidebar.dispatchEvent(sidebarCopy);
  }

  /**
   * Listen to the collapseSidebar event, triggered from the PlmgSidebar,
   * and dispatch it to PlmgHeader and PlmgContent.
   *
   * @param e
   */
  @Listen('collapseSidebar', {})
  onCollapseSidebar(e: Event) {
    this.isSidebarExpanded = false;
    const headerCopy = new Event(e.type);
    this.header.dispatchEvent(headerCopy);
  }

  render() {
    const contentClasses = {
      'plmg-content': true,
      'plmg-content-with-sidebar': this.isSidebarExpanded,
    };

    return (
      <div class={'plmg-page-container'}>
        <slot name={'sidebar'} />
        <slot name={'header'} />
        <div class={contentClasses}>
          <slot name={'content'} />
        </div>
        <slot name={'footer'} />
      </div>
    );
  }
}
