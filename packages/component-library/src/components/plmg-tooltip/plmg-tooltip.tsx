import { Component, h, Prop, Watch } from '@stencil/core';
import {
  PlmgTooltipBgColor,
  isPlmgTooltipBgColor,
  PlmgTooltipArrowSide,
  isPlmgTooltipArrowSide,
  PlmgTooltipArrowPosition,
  isPlmgTooltipArrowPosition,
} from './plmg-tooltip.types';

/**
 * @slot tooltip-text - Text content of the tooltip
 */

@Component({
  tag: 'plmg-tooltip',
  styleUrl: 'plmg-tooltip.scss',
  shadow: true,
})
export class Tooltip {
  // @State() isToolTipVisible: boolean;

  // @Prop() toolTipVisible: boolean = false;
  // @Watch('toolTipVisible')
  // onToolTipVisible(newValue: boolean) {
  //   if (typeof newValue !== 'boolean')
  //     throw new Error('toolTipVisible: must be boolean');
  //   this.isToolTipVisible = newValue;
  // }

  @Prop() bgColor: PlmgTooltipBgColor = 'neutral';
  @Watch('bgColor')
  validateBgColor(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('bgColor must be a string');
    if (!isPlmgTooltipBgColor(newValue))
      throw new Error('bgColor must be a valid value');
  }

  // arrow is missing my default
  // so if arrow is not none then add a arrow class and selectors

  @Prop() arrowSide: PlmgTooltipArrowSide = 'none';
  @Watch('arrowSide')
  validateArrowSide(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('arrow side must be a string');
    if (!isPlmgTooltipArrowSide(newValue))
      throw new Error('arrow side: must be a valid value');
  }

  @Prop() arrowPosition: PlmgTooltipArrowPosition = 'middle';
  @Watch('arrowPosition')
  validateArrowPosition(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('arrow position must be a string');
    if (!isPlmgTooltipArrowPosition(newValue))
      throw new Error('arrow postion: must be a valid value');
  }

  // @Prop() label: string | undefined = undefined;
  // @Watch('label')
  // validateLabel(newValue: string) {
  //   if (newValue && typeof newValue !== 'string')
  //     throw new Error('label must be a string');
  // }

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   *
   * import { Element } from '@stencil/core';
   */
  // @Element() el: HTMLElement;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   *
   * import { State } from '@stencil/core';
   */
  // @State() isValidated: boolean;

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   *
   * import { Prop, Watch } from '@stencil/core';
   */
  // @Prop() fullWidth: boolean = false;
  /** Prop lifecycle events SHOULD go just behind the Prop they listen to. */
  // @Watch('fullWidth')
  // validateFullWidth(newValue: boolean) {
  //   if (typeof newValue !== 'boolean')
  //     throw new Error('fullWidth: must be boolean');
  // }

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   *
   * import { Event, EventEmitter } from '@stencil/core';
   */
  // @Event() click: EventEmitter;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example WillLoad should go before DidLoad.
   */
  // connectedCallback() {}
  // componentWillLoad() {}
  // componentDidLoad() {}
  // disconnectedCallback() {}

  /**
   * 7. Listeners
   * It is ok to place them in a different location if makes more sense in the context.
   * Recommend starting a listener method with "on".
   * Always use two lines.
   *
   * import { Listen } from '@stencil/core';
   */
  // @Listen('click', {})
  // onClick(event: UIEvent) { ... }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Requires JSDocs for public API documentation.
   *
   * import { Method } from '@stencil/core';
   */
  // @Method()
  // open() { ... }

  render() {
    const classes = {
      'plmg-tool-tip': true,
      // conditionally include arrow classes
      ...(this.hasArrow() && { [this.arrowSide]: true }),
      ...(this.hasArrow() && { [this.arrowPosition]: true }),
      [this.bgColor]: true,
    };

    return (
      <div class={classes}>
        <span>
          <slot />
        </span>
      </div>
    );
  }

  // check if tooltip needs an arrow
  private hasArrow() {
    return this.arrowSide !== 'none' && (this.arrowSide as string) !== '';
  }
}
