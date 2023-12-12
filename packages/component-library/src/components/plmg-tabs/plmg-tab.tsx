import { Component, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'plmg-tab',
  shadow: true,
})
export class Tab {
  /**
   * Define tabs text content.
   */
  @Prop() label: string;
  @Event() labelChange: EventEmitter;

  @Watch('label')
  labelChanged() {
    this.labelChange.emit();
  }

  /**
   * Define tabs icon content.
   *
   * When providing an icon name to this prop, the corresponding icon will be displayed.
   */
  @Prop() icon: string;

  /**
   * Define tabs active state
   * Only need to define inital active tab. Once rendered the component handles switching of active tab.
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop({ reflect: true }) active: boolean = false;

  /**
   * Define tabs disabled state
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() disabled: boolean = false;
}
