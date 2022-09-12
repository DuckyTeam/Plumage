import { Component, Prop, Watch, h, Element, State } from '@stencil/core';

@Component({
  tag: 'plmg-dropdown-item',
  styleUrl: 'plmg-dropdown-item.scss',
  shadow: true,
})
export class SidebarItem {
  /**
   * Reference to host HTML element.
   */
  @Element() el: HTMLElement;

  /**
   * The link to redirect to when this item is clicked.
   */
  @Prop() href: string;
  @Watch('href')
  validateHref(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('href must be a string');
  }

  /**
   * Provide an optional icon to display to the left of the text.
   */
  @Prop() icon: string;
  @Watch('icon')
  validateIcon(newValue: string) {
    if (typeof newValue !== 'string') throw new Error('icon: must be string');
  }
  /**
   * Define width
   *
   * Allowed values:
   * - Any positive number
   *
   * Override the default width of the text input field with a pixel value
   *
   * Maximum width is 320px
   *
   * By default the width is set by content length
   */
  @Prop() width: number;
  @Watch('width')
  validateWidth(newValue: number) {
    if (typeof newValue !== 'number' || newValue <= 0 || newValue >= 320)
      throw new Error(
        'text input width must be a positive number less than 320'
      );
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

  render() {
    const containerClasses = {
      'plmg-dropdown-item-container': true,
    };

    if (!this.href) {
      return (
        <button
          class={containerClasses}
          title={this.text}
          style={{ width: this.width ? this.width + 'px' : 'auto' }}
        >
          {this.icon && (
            <plmg-svg-icon class={'plmg-dropdown-item-icon'} icon={this.icon} />
          )}
          {this.text}
          <plmg-svg-icon
            class={'plmg-dropdown-item-active-icon'}
            icon={'check'}
          />
        </button>
      );
    }
    return (
      <a
        class={containerClasses}
        title={this.text}
        href={this.href}
        rel={this.rel}
        target={this.target}
        style={{ width: this.width ? this.width + 'px' : 'auto' }}
      >
        {this.icon && (
          <plmg-svg-icon class={'plmg-dropdown-item-icon'} icon={this.icon} />
        )}
        <span class={'plmg-dropdown-item-content'}>{this.text}</span>
        <plmg-svg-icon
          class={'plmg-dropdown-item-active-icon'}
          icon={'check'}
        />
      </a>
    );
  }
}
