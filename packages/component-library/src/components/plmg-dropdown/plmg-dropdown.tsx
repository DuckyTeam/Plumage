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
  // private ref: HTMLSlotElement;
  @State() isVisible: boolean = false;
  private abortDropdownListener: AbortController;
  private targetElement: HTMLSlotElement;
  /**
   * Reference to host HTML element.
   */
  @Element() host: HTMLElement;

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
   * Disable click events on the dropdown.
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
   * Use this method when the event listeners are disabled.
   */
  @Method()
  async toggleVisible(): Promise<void> {
    this.isVisible = !this.isVisible;
  }

  /**
   * Close the dropdown when a click event or escape key is pressed anywhere in the document.
   */
  @Listen('click', { target: 'document' })
  closeDropdown(event) {
    if (this.disableListeners) return;
    if (!this.host.contains(event.target)) this.isVisible = false;
  }
  @Listen('keydown', { target: 'document' })
  handleEscape(event: KeyboardEvent) {
    if (this.disableListeners) return;
    if (event.key === 'Escape') this.isVisible = false;
  }

  /**
   * Open the the dropdown when a click event or escape key is pressed anywhere in the document.
   */
  @Listen('click')
  handleClick() {
    if (this.disableListeners) return;
    this.isVisible = !this.isVisible;
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (this.disableListeners) return;
    if (event.key === 'Enter') {
      this.isVisible = !this.isVisible;
    }
  }

  // grab the first element in the trigger slot and add a cursor pointer
  componentDidLoad() {
    this.targetElement = this.host.querySelector('[slot="trigger"]');
    if (this.targetElement instanceof HTMLElement) {
      this.targetElement.style.cursor = 'pointer';
    }
  }

  disconnectedCallback() {
    if (this.abortDropdownListener) this.abortDropdownListener.abort();
  }

  render() {
    const classes = {
      'plmg-dropdown-menu': true,
      right: this.align === 'right',
    };

    return (
      <div class={'plmg-dropdown'}>
        <div tabIndex={0}>
          <slot name={'trigger'} />
        </div>
        {this.isVisible && (
          <div class={classes}>
            <slot name={'menu'} />
          </div>
        )}
      </div>
    );
  }
}
