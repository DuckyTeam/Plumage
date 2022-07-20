import {
  Component,
  Element,
  State,
  Event,
  EventEmitter,
  Method,
  h,
} from '@stencil/core';

@Component({
  tag: 'plmg-tabs',
  styleUrl: 'plmg-tabs.scss',
  shadow: true,
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
      this.tabs = this.tabs.map((tab, i) => {
        tab.active = i === index;
        return tab;
      });
      this.onChange.emit({ tabId: index });
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
              aria-label={tab.label ? tab.label : `${tab.icon}-icon`}
              disabled={tab.disabled}
              class={tabClasses}
              onClick={() => this.openTab(index)}
            >
              {this.hasIcon(tab.icon) && (
                <plmg-svg-icon
                  class={'plmg-tab-button-icon'}
                  icon={tab.icon}
                  size={'28px'}
                />
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
}
