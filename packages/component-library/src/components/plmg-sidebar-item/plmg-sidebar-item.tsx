import { Component, Element, h, State, Prop, Watch } from '@stencil/core';
import { PlmgSideBarItemLevel } from './plmg-sidebar-item.types';

@Component({
  tag: 'plmg-sidebar-item',
  styleUrl: 'plmg-sidebar-item.scss',
  shadow: true,
})
export class SidebarItem {
  /**
   * Reference to host HTML element.
   */
  @Element() el: HTMLElement;

  /**
   * Store the expanded status of the item.
   */
  @State() isExpanded: boolean;

  /**
   * Set this prop to True when this item is active.
   * It highlights the item.
   */
  @Prop() active: boolean = false;
  @Watch('active')
  validateActive(newValue: string) {
    if (typeof newValue !== 'boolean')
      throw new Error('active: must be boolean');
  }

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
   * The link to redirect to when this item is clicked.
   *
   * If this item has children, you cannot provide a href, because clicking the item
   * will instead expand/collapse the children list.
   */
  @Prop() href: string;
  @Watch('href')
  validateHref(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('href must be a string');
  }

  /**
   * The name of the icon to show on the left of the text.
   * It is optional to provide an icon.
   *
   * Items at level 2 should never have an icon. Icon will not be rendered even if provided.
   */
  @Prop() icon: string;
  @Watch('icon')
  validateIcon(newValue: string) {
    if (typeof newValue !== 'string') throw new Error('icon: must be string');
  }

  /**
   * Define links rel
   */
  @Prop() rel: string;
  @Watch('rel')
  validateRel(newValue: string) {
    if (newValue && !this.href)
      throw new Error('sidebar item must have a href to have a rel');
    if (newValue && typeof newValue !== 'string')
      throw new Error('rel must be a string');
  }

  /**
   * Define links target
   */
  @Prop() target: string;
  @Watch('target')
  validateTarget(newValue: string) {
    if (newValue && !this.href)
      throw new Error('sidebar item must have a href to have a target');
    if (newValue && typeof newValue !== 'string')
      throw new Error('target must be a string');
  }

  /**
   * The text to show on the item.
   * it is mandatory to provide a text.
   *
   * If the text is too long for the item, it will be truncated and will end with "...".
   * Example: "This name is too lon..."
   */
  @Prop() text: string;
  @Watch('text')
  validateText(newValue: string) {
    if (typeof newValue !== 'string') throw new Error('text: must be string');
  }

  /**
   * Lifecycle method, called once just after the component is first connected to the DOM.
   * Initialise the state.
   */
  componentWillLoad() {
    this.isExpanded = this.expanded;
  }

  render() {
    const containerClasses = {
      'plmg-sidebar-item-container': true,
      'plmg-sidebar-item-with-icon': this.hasIcon(),
      'plmg-sidebar-item-level-2': this.level() === 2,
      'plmg-sidebar-item-level-2-icon-shift': this.parentHasIcon(),
      'plmg-sidebar-item-with-children': this.hasChildren(),
      'plmg-sidebar-item-active': this.active,
    };

    if (this.hasChildren()) {
      return (
        <div class={'plmg-sidebar-item-top-container'}>
          <button
            class={containerClasses}
            title={this.text}
            onClick={() => (this.isExpanded = !this.isExpanded)}
          >
            {this.hasIcon() && (
              <plmg-svg-icon
                class={'plmg-sidebar-item-icon'}
                icon={this.icon}
              />
            )}
            <span class={'plmg-sidebar-item-content'}>{this.text}</span>
            {!this.isExpanded && (
              <plmg-svg-icon
                icon={'expandMore'}
                class={'plmg-sidebar-item-expand'}
              />
            )}
            {this.isExpanded && (
              <plmg-svg-icon
                icon={'expandLess'}
                class={'plmg-sidebar-item-expand'}
              />
            )}
          </button>
          {this.isExpanded && <slot />}
        </div>
      );
    } else {
      return (
        <a
          class={containerClasses}
          title={this.text}
          href={this.href}
          rel={this.rel}
          target={this.target}
        >
          {this.hasIcon() && (
            <plmg-svg-icon class={'plmg-sidebar-item-icon'} icon={this.icon} />
          )}
          <span class={'plmg-sidebar-item-content'}>{this.text}</span>
        </a>
      );
    }
  }

  /**
   * Indicate if this item has children.
   * Return false if the level is higher than 1 or has no children.
   */
  private hasChildren(): boolean {
    return this.level() === 1 && this.el.children.length > 0;
  }

  private hasIcon(): boolean {
    return this.level() === 1 && this.icon && this.icon !== '';
  }

  private level(): PlmgSideBarItemLevel {
    if (this.el.parentElement.tagName === 'plmg-sidebar-item'.toUpperCase())
      return 2;
    return 1;
  }

  private parentHasIcon(): boolean {
    return Boolean(
      this.el.parentElement.attributes.getNamedItem('icon')?.value
    );
  }
}
