import { Component, h, Listen } from '@stencil/core';

/**
 * Container for the entire web page. Wraps everything.
 * If you use PlmgSidebar and/or PlmgHeader, please use this wrapper.
 *
 * @slot sidebar - Side navigation bar, typically a PlmgSidebar component.
 * @slot header - Top navigation bar, typically a PlmgHeader component.
 * @slot content - Main content of the web page.
 * @slot footer - Footer of the web page.
 */
@Component({
  tag: 'plmg-page-container',
  styleUrl: 'plmg-page-container.scss',
  shadow: true,
})
export class PageContainer {
  private sidebar: HTMLPlmgSidebarElement;
  private header: HTMLPlmgHeaderElement;
  private content: HTMLPlmgContentElement;

  componentDidLoad() {
    this.sidebar = document.querySelector('plmg-sidebar');
    this.content = document.querySelector('plmg-main-content');
  }

  /**
   * Listen to the expandSidebar event, triggered from the PlmgHeader,
   * and dispatch it to PlmgSidebar and PlmgContent.
   *
   * @param e
   */
  @Listen('expandSidebar', {})
  onExpandSidebar(e: Event) {
    const sidebarCopy = new Event(e.type);
    this.sidebar.dispatchEvent(sidebarCopy);
    const contentCopy = new Event(e.type);
    this.content.dispatchEvent(contentCopy);
  }

  /**
   * Listen to the collapseSidebar event, triggered from the PlmgSidebar,
   * and dispatch it to PlmgHeader and PlmgContent.
   *
   * @param e
   */
  @Listen('collapseSidebar', {})
  onCollapseSidebar(e: Event) {
    const headerCopy = new Event(e.type);
    this.header.dispatchEvent(headerCopy);
    const contentCopy = new Event(e.type);
    this.content.dispatchEvent(contentCopy);
  }

  render() {
    return (
      <div class={'plmg-page-container'}>
        <slot name={'sidebar'}></slot>
        <slot name={'header'}></slot>
        <slot name={'content'}></slot>
        <slot name={'footer'}></slot>
      </div>
    );
  }
}

// <plmg-page-container>
//     <plmg-sidebar slot="sidebar">
//         <plmg-sidebar-item></plmg-sidebar-item>
//         <plmg-sidebar-item></plmg-sidebar-item>
//         <plmg-sidebar-item></plmg-sidebar-item>
//         <plmg-sidebar-item></plmg-sidebar-item>
//     </plmg-sidebar>
//     <plmg-header slot="header">
//     // Header
//     </plmg-header>
//     <plmg-content>
//
//     </plmg-content>
// </plmg-page-container>
