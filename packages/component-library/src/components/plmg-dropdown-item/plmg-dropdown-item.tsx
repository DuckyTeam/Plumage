import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'plmg-dropdown-item',
  styleUrl: 'plmg-dropdown-item.scss',
  shadow: true,
})
export class PlmgDropdownItem {
  /**
   * Set the dropdown item as selected.
   */
  @Prop() selected: boolean;
  @Watch('selected')
  validaeSelected(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('selected must be a boolean');
  }
  /**
   * Define href attribute of the anchor element.
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
   *
   * If the text is too long for the item, it will be truncated and will end with "...".
   * Example: "A very long text that will be trunc..."
   */
  @Prop() text: string;
  @Watch('text')
  validateText(newValue: string) {
    if (typeof newValue !== 'string') throw new Error('text: must be string');
  }

  render() {
    const classes = {
      'plmg-dropdown-item': true,
      'plmg-dropdown-item-selected': this.selected,
    };

    const iconClasses = {
      'plmg-dropdown-item-selected-icon': true,
      'plmg-dropdown-item-selected-icon-visible': this.selected,
    };

    return (
      <a class={classes} title={this.text} href={this.href} rel={this.rel}>
        {this.icon && (
          <plmg-svg-icon class={'plmg-dropdown-item-icon'} icon={this.icon} />
        )}
        <span class={'plmg-dropdown-item-content'}>{this.text}</span>
        <plmg-svg-icon class={iconClasses} icon={'check'} />
      </a>
    );
  }
}
