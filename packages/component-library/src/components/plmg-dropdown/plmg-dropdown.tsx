import {
  Component,
  Element,
  h,
  State,
  Listen,
  Method,
  Prop,
  Watch,
} from '@stencil/core';

import {
  PlmgDropdownAlignments,
  isPlmgDropdownAligment,
} from './plmg-dropdown.types';

@Component({
  tag: 'plmg-dropdown',
  styleUrl: 'plmg-dropdown.scss',
  shadow: true,
})
export class Dropdown {
  /**
   * Reference to host HTML element.
   */
  @Element() host: HTMLElement;
  /**
   * Store the expanded status of the dropdown
   */
  @State() isVisible: boolean = false;

  /**
   * Store an array of all the links in the dropdown
   */
  @State() links: HTMLPlmgDropdownItemElement[] = [];
  private targetElement: HTMLSlotElement;

  /**
   * Define the alignment of the dropdown menu.
   *
   * Allowed values:
   *   - left
   *   - right
   *
   * Default: left
   */
  @Prop() align: PlmgDropdownAlignments = 'left';
  @Watch('align')
  validateAlign(newValue: string) {
    if (!isPlmgDropdownAligment(newValue))
      throw new Error('align: must be a valid value');
  }

  /**
   * Disable document scoped event listeners.
   *
   * Does not disable the click event on the trigger element or keyboard events.
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() disableListeners: boolean = false;
  validateDisableListeners(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('disableListeners: must be a boolean');
  }

  /**
   * Invoke this method to manually toggle the dropdown's visibility.
   *
   * Use this method when the document scoped event listeners are disabled.
   */
  @Method()
  async toggleVisible(): Promise<void> {
    this.isVisible = !this.isVisible;
  }

  /**
   * Document scoped events to close the dropdown when the user clicks outside of the dropdown.
   */
  @Listen('click', { target: 'document' })
  closeDropdown(event) {
    if (this.disableListeners) return;
    if (!this.host.contains(event.target)) this.isVisible = false;
  }
  @Listen('keydown', { target: 'document' })
  handleEscape(event: KeyboardEvent) {
    if (this.disableListeners) return;
    if (event.key === 'Escape') this.isVisible = !this.isVisible;
  }

  /**
   * Toggle the dropdown visibility when the trigger element is clicked.
   */
  @Listen('click')
  handleClick() {
    if (this.disableListeners) return;
    this.isVisible = !this.isVisible;
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    //  Toggle the dropdown visibility when the user presses enter on the trigger element. * If enter is pressed on a link, the link's href will be followed.
    if (event.key === 'Enter' && event.target === this.host) {
      event.preventDefault();
      event.stopPropagation();
      return (this.isVisible = !this.isVisible);
    }
    if (this.isVisible && event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      return (this.isVisible = false);
    }
    //  Close the dropdown when the user tabs out of the dropdown.
    if (this.isVisible && event.key === 'Tab' && !event.shiftKey) {
      const lastLink = this.links[this.links.length - 1];
      if (document.activeElement === lastLink) {
        event.preventDefault();
        event.stopPropagation();
        return (this.isVisible = false);
      }
    }
    //  Close the dropdown when the user shift tabs up out of the dropdown or away the component.
    if (this.isVisible && event.key === 'Tab' && event.shiftKey) {
      if (
        document.activeElement === this.links[0] ||
        event.target === this.host
      ) {
        this.isVisible = false;
      }
    }
  }

  // get all the links in the dropdown and add them to the links array
  connectedCallback() {
    this.links = Array.from(this.host.querySelectorAll('plmg-dropdown-item'));
  }

  // grab the first element in the trigger slot
  componentWillRender() {
    this.targetElement = this.host.querySelector('[slot="trigger"]');
    if (this.targetElement instanceof HTMLElement) {
      this.targetElement.style.cursor = 'pointer';
      this.targetElement.tabIndex = -1;
    }
  }

  render() {
    const classes = {
      'plmg-dropdown-menu': true,
      right: this.align === 'right',
    };

    return (
      <nav class={'plmg-dropdown'} tabIndex={0}>
        <slot name={'trigger'} />
        {this.isVisible && (
          <div class={classes}>
            <slot name={'menu'} />
          </div>
        )}
      </nav>
    );
  }
}
