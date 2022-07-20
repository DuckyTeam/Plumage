import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'plmg-tab',
  shadow: true,
})
export class Tab {
  /**
   * Define tabs text content.
   */
  @Prop() label: string;

  /**
   * Define tabs icon content.
   *
   * When providing an icon name to this prop, the corresponding icon will be displayed.
   */
  @Prop() icon: string;

  /**
   * Define tabs active state
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() active: boolean = false;

  /**
   * Define tabs disabled state
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop({ reflect: true }) disabled: boolean = false;
}
