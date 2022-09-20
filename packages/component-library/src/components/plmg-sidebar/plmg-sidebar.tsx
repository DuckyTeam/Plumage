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
   * Define if the item is expanded on startup.
   */
  @Prop() expanded: boolean = false;
  @Watch('expanded')
  onExpandedChange(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('expanded: must be boolean');
    this.isExpanded = newValue;
  }

  /**
   * "src" property of the logo img.
   */
  @Prop() logoSrc: string;
  @Watch('logoSrc')
  validateLogoSrc(newValue: string) {
    if (typeof newValue !== 'string')
      throw new Error('logoSrc: must be string');
    if (newValue && newValue !== '' && (!this.logoHref || this.logoHref === ''))
      throw new Error('logoSrc: provide logoHref as well');
  }

  /**
   * Path to redirect when clicking on the logo.
   */
  @Prop() logoHref: string;
  @Watch('logoHref')
  validateLogoHref(newValue: string) {
    if (typeof newValue !== 'string')
      throw new Error('logoHref: must be string');
    if (newValue && newValue !== '' && (!this.logoSrc || this.logoSrc === ''))
      throw new Error('logoHref: provide logoSrc as well');
  }

  /**
   * Event dispatched when the button to collapse the sidebar is clicked.
   */
  @Event() collapseSidebar: EventEmitter<void>;

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

  /**
   * Invoke this method to collapse the sidebar.
   */
  @Method()
  async collapse() {
    this.isExpanded = false;
  }

  render() {
    const containerClasses = {
      'plmg-sidebar': true,
      'plmg-sidebar-expanded': this.isExpanded,
    };

    return (
      <nav class={containerClasses}>
        <div class={'plmg-sidebar-top'}>
          {this.hasLogo() && (
            <a href={this.logoHref} class={'plmg-sidebar-home-link'}>
              <img
                src={this.logoSrc}
                class={'plmg-sidebar-logo'}
                alt={'logo'}
              />
            </a>
          )}
          {!this.hasLogo() && <p class={'plmg-sidebar-home-link'} />}
          <plmg-button
            iconCenter={'menuOpen'}
            label={'Close Sidebar'}
            design={'borderless'}
            size={'medium'}
            class={'plmg-sidebar-collapse-btn'}
            onClick={() => {
              this.isExpanded = false;
              this.collapseSidebar.emit();
            }}
          />
        </div>
        <slot />
      </nav>
    );
  }

  private hasLogo() {
    return (
      this.logoSrc &&
      this.logoSrc !== '' &&
      this.logoHref &&
      this.logoHref !== ''
    );
  }
}
