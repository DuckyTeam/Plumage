import {
  Component,
  Prop,
  Watch,
  h,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'plmg-dropdown-item',
  styleUrl: 'plmg-dropdown-item.scss',
  shadow: true,
})
export class PlmgDropdownItem {
  /**
   * Reference to host HTML element.
   */
  @Element() el: HTMLElement;

  /**
   * Define button as a link
   */
  @Prop() href: string;
  @Watch('href')
  validateHref(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('href must be a string');
  }

  /**
   * Provide an optional icon to display to the left of the text
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
      throw new Error('dropdownItem must have a href to have a rel');
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
      throw new Error('dropdownItem must have a href to have a target');
    if (newValue && typeof newValue !== 'string')
      throw new Error('target must be a string');
  }

  /**
   * The text to show on the item.
   * it is mandatory to provide a text.
   *
   * If the text is too long for the item, it will be truncated and will end with "...".
   * Example: "A very long text that will be trunc..."
   */
  @Prop() text: string;
  @Watch('text')
  validateText(newValue: string) {
    if (typeof newValue !== 'string') throw new Error('text: must be string');
  }
  /**
   * Click event dispatched when icon is a button and not a link
   */
  @Event() dropdownItemClick: EventEmitter<MouseEvent>;

  render() {
    if (!this.href) {
      return (
        <button
          class={'plmg-dropdown-item'}
          title={this.text}
          onClick={(ev) => this.dropdownItemClick.emit(ev)}
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
        class={'plmg-dropdown-item'}
        title={this.text}
        href={this.href}
        rel={this.rel}
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
