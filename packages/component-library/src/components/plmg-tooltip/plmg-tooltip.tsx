import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';
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
  /**
   * Store whether the tooltip is currently visible.
   * Default hidden
   */

  @State() tooltipVisible: boolean = true;

  /**
   * ID for connected element. Required for tooltip to function
   */

  @Prop() targetElement: string;
  @Watch('targetElement')
  validateTargetElement(newValue: string) {
    if ((newValue && typeof newValue !== 'string') || newValue === '')
      throw new Error('target element ID must be a string');
  }

  /**
   * Define tooltip's background color
   *
   * Allowed values:
   *   - neutral
   *   - primary
   *
   * Default: neutral
   */

  @Prop() bgColor: PlmgTooltipBgColor = 'neutral';
  @Watch('bgColor')
  validateBgColor(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('bgColor must be a string');
    if (!isPlmgTooltipBgColor(newValue))
      throw new Error('bgColor must be a valid value');
  }

  /**
   * Define tooltip's arrow side
   *
   * Allowed values:
   *   - none,
   *   - left,
   *   - right,
   *   - top,
   *   - bottom
   *
   * Default: none
   */

  @Prop() arrowSide: PlmgTooltipArrowSide = 'none';
  @Watch('arrowSide')
  validateArrowSide(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('arrow side must be a string');
    if (!isPlmgTooltipArrowSide(newValue))
      throw new Error('arrow side: must be a valid value');
  }

  /**
   * Define tooltip arrow position
   *
   * Allowed values:
   *   - start,
   *   - middle,
   *   - end
   *
   * Default: none
   */

  @Prop() arrowPosition: PlmgTooltipArrowPosition = 'middle';
  @Watch('arrowPosition')
  validateArrowPosition(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('arrow position must be a string');
    if (!isPlmgTooltipArrowPosition(newValue))
      throw new Error('arrow postion: must be a valid value');
  }

  /**
   * Listeners
   *
   * Listens for mouse over and out events
   *
   * Mouse over/ out on user defined target element display / hides tooltip
   */

  @Listen('mouseover', { target: 'body' })
  onMouseOver(ev) {
    if (ev.target.id !== '' && ev.target.id === this.targetElement) {
      this.tooltipVisible = true;
    }
  }

  @Listen('mouseout', { target: 'body' })
  onMouseLeave(ev) {
    if (ev.target.id !== '' && ev.target.id === this.targetElement) {
      this.tooltipVisible = false;
    }
  }

  render() {
    const classes = {
      'plmg-tooltip': true,
      visible: this.tooltipVisible,
      // conditionally include arrow classes
      ...(this.hasArrow() && { [this.arrowSide]: true }),
      ...(this.hasArrow() && { [this.arrowPosition]: true }),
      [this.bgColor]: true,
    };

    return (
      <span class={classes}>
        <slot />
      </span>
    );
  }

  // check if tooltip needs an arrow
  private hasArrow() {
    return this.arrowSide !== 'none' && (this.arrowSide as string) !== '';
  }
}
