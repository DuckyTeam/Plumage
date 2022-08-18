import {
  Component,
  Element,
  State,
  Event,
  EventEmitter,
  Listen,
  Method,
  h,
} from '@stencil/core';

@Component({
  tag: 'plmg-tabs',
  styleUrl: 'plmg-tabs.scss',
  shadow: false,
})
export class Tabs {
  /**
   * Reference to host HTML element.
   */
  @Element()
  el: HTMLElement;

  /**
   * Store the tabs to be rendered in an array.
   */
  @State()
  tabs: HTMLPlmgTabElement[] = [];

  /**
   * Event tabChange is emitted for onChange events when switching tabs.
   */
  @Event({ eventName: 'tabChange' })
  onChange: EventEmitter;

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent, tabIndex: number) {
    event.preventDefault();
    event.stopPropagation();
    if (event.key === 'Enter') {
      console.log('enter', tabIndex);
      this.openTab(tabIndex);
    }
    if (event.key === 'ArrowLeft') {
      console.log('key index left', tabIndex);
      if (tabIndex > 0) this.activateTab(tabIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      console.log('key index right', tabIndex);
      if (tabIndex < this.tabs.length - 1) this.activateTab(tabIndex + 1);
    }
  }

  /**
   * On componentWillLoad dynamically grab tabs from the component to query and render.
   */
  componentWillLoad() {
    this.tabs = Array.from(this.el.querySelectorAll('plmg-tab'));
    if (this.tabs.length === 0) {
      throw new Error('<plmg-tabs> Must have at least one tab');
    }
  }

  /**
   * Invoke this method on tab change to update active state and emit onChange handler.
   */
  @Method()
  async openTab(index: number) {
    if (index >= this.tabs.length) {
      throw new Error(
        `<plmg-tabs> Index ${index} is out of bounds of tabs length`
      );
    }
    if (!this.tabs[index].disabled) {
      this.activateTab(index);
    }
  }

  render() {
    return (
      <div class={'plmg-tabs-list'} role={'tablist'}>
        {this.tabs.map((tab: HTMLPlmgTabElement, index: number) => {
          const tabClasses = {
            'plmg-tab-button': true,
            active: tab.active,
          };

          return (
            <button
              role={'tab'}
              tabindex={tab.active ? 0 : -1}
              aria-label={tab.label ? tab.label : tab.icon}
              aria-disabled={tab.disabled}
              class={tabClasses}
              onClick={() => this.openTab(index)}
              onKeyDown={(event) => this.handleKeyDown(event, index)}
            >
              {this.hasIcon(tab.icon) && (
                <plmg-svg-icon class={'plmg-tab-button-icon'} icon={tab.icon} />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
    );
  }

  private hasIcon(icon) {
    return icon && (icon as string) !== '';
  }

  private activateTab(tabIndex) {
    console.log('activate tabindex', tabIndex);
    this.tabs = this.tabs.map((tab, i) => {
      tab.active = i === tabIndex;
      // tab.setAttribute('tabindex', 0);
      if (i === tabIndex) {
        console.log('focus?', i);
        console.log('focus?', document.activeElement);
        console.log('tab', tab);
        const button = document.getElementsByClassName(
          'active'
        )[0] as HTMLElement | null;

        console.log('button', button);
        button.focus(); // need to focus on the button not the tab
        console.log('focus tab?', document.activeElement);
      }
      return tab;
    });
    this.onChange.emit({ tabId: tabIndex });
  }
}