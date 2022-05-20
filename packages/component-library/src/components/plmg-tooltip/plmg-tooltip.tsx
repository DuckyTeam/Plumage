import { Component, h, Prop, State, Watch } from '@stencil/core';

import {
  PlmgTooltipBgColor,
  isPlmgTooltipBgColor,
  PlmgTooltipArrowSide,
  isPlmgTooltipArrowSide,
  PlmgTooltipArrowPosition,
  isPlmgTooltipArrowPosition,
} from './plmg-tooltip.types';

@Component({
  tag: 'plmg-tooltip',
  styleUrl: 'plmg-tooltip.scss',
  shadow: true,
})
export class Tooltip {
  private abortTooltipListener: AbortController;
  private tooltipTargetElement: HTMLElement;

  /**
   * Store whether the tooltip is currently visible.
   *
   * Default hidden
   */

  @State() isTooltipVisible: boolean = false;

  /**
   * ID for connected element. Required.
   */

  @Prop() targetElementId: string;
  @Watch('targetElementId')
  validateTargetElementId(newValue: string) {
    if ((newValue && typeof newValue !== 'string') || newValue === '')
      throw new Error('target element id must be a string');
  }

  /**
   * Force tooltip to remain visible for demostration pu
   *
   * Disables event listener
   */

  @Prop() forceVisible: boolean = false;
  @Watch('forceVisible')
  validateForceVisible(newValue: boolean) {
    if (newValue && typeof newValue !== 'boolean')
      throw new Error('force visible must be a boolean');
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
   * Tooltip Title Text
   *
   * Any string
   *
   * Required
   */

  @Prop() tooltipTitle: string;
  @Watch('tooltipTitle')
  validatetooltipTitle(newValue: string) {
    if (newValue && !newValue)
      throw new Error('tooltip must have a title text');
    if (newValue && typeof newValue !== 'string')
      throw new Error('target must be a string');
  }

  /** Life Cycle Methods with Listeners
   *
   * Listen for mouse over / focus events and mouse out / blur events on the target element
   *
   */

  connectedCallback() {
    this.isTooltipVisible = this.forceVisible;

    // ForceVisible prop boolean disables event listener

    if (!this.forceVisible) {
      this.abortTooltipListener = new AbortController();
      this.tooltipTargetElement = document.getElementById(this.targetElementId);
      this.tooltipTargetElement.addEventListener(
        'mouseover',
        () => (this.isTooltipVisible = true),
        { signal: this.abortTooltipListener.signal }
      );

      this.tooltipTargetElement.addEventListener(
        'focus',
        () => (this.isTooltipVisible = true),
        { signal: this.abortTooltipListener.signal }
      );

      this.tooltipTargetElement.addEventListener(
        'mouseleave',
        () => (this.isTooltipVisible = false)
      );

      this.tooltipTargetElement.addEventListener(
        'blur',
        () => (this.isTooltipVisible = false)
      );
    }
  }

  /**
   * Cleanup the event listener
   */

  disconnectedCallback() {
    if (!this.forceVisible) {
      if (this.abortTooltipListener) this.abortTooltipListener.abort();
    }
  }

  render() {
    const tooltipclasses = {
      'plmg-tooltip': true,
      visible: this.isTooltipVisible,
      // Conditionally include arrow classes
      ...(this.hasArrow() && { [this.arrowSide]: true }),
      ...(this.hasArrow() && { [this.arrowPosition]: true }),
      [this.bgColor]: true,
    };

    return (
      <div style={!this.forceVisible && this.calculateTooltipPositions()}>
        <span class={tooltipclasses}>{this.tooltipTitle}</span>
      </div>
    );
  }

  // check if tooltip needs an arrow
  private hasArrow() {
    return this.arrowSide !== 'none' && (this.arrowSide as string) !== '';
  }

  private calculateTooltipPositions() {
    // Default style

    let styles = {
      position: 'fixed',
      overflow: 'visible',
      left: '0px',
      top: '0px',
    };

    // Calculate the position for the tooltip relative to the element
    // Tooltip max width is 150px plus 6px for the arrow = 156px
    // Maximum numbers of characters per line is 27 characters
    // Tooltips with up to 27 characters will display on a single line of variable width.

    const tooltipLines: number = Math.ceil(this.tooltipTitle.length / 27);
    const lineHeight: number = 18;
    const arrowSize = 6;
    const tooltipPaddingY: number = 8;
    const tooltipPaddingX: number = 16;

    // The width of each letter
    const letterNumtoWidthRatio: number = 5.3;
    const tooltipHeight: number = tooltipLines * lineHeight + tooltipPaddingY;

    // Calculate tooltip width.
    // A one line tooltip width will be determined by the number of characters
    const tooltipWidth: number =
      this.tooltipTitle.length <= 27
        ? this.tooltipTitle.length * letterNumtoWidthRatio + tooltipPaddingX
        : 156;

    // Get the position of the target element
    const targetPositions = this.tooltipTargetElement.getBoundingClientRect();

    // Calculate the relative position of the tooltip

    this.arrowSide === 'left' &&
      (styles.left = `${targetPositions.x + targetPositions.width}px`);
    this.arrowSide === 'left' &&
      this.arrowPosition === 'start' &&
      (styles.top = `${targetPositions.y}px`);
    this.arrowSide === 'left' &&
      this.arrowPosition === 'middle' &&
      (styles.top = `${
        targetPositions.y + targetPositions.height / 2 - tooltipHeight / 2
      }px`);
    this.arrowSide === 'left' &&
      this.arrowPosition === 'end' &&
      (styles.top = `${
        targetPositions.y + targetPositions.height - tooltipHeight
      }px`);

    this.arrowSide === 'right' &&
      (styles.left = `${targetPositions.x - tooltipWidth - arrowSize}px`);
    this.arrowSide === 'right' &&
      this.arrowPosition === 'start' &&
      (styles.top = `${targetPositions.y}px`);
    this.arrowSide === 'right' &&
      this.arrowPosition === 'middle' &&
      (styles.top = `${
        targetPositions.y + targetPositions.height / 2 - tooltipHeight / 2
      }px`);
    this.arrowSide === 'right' &&
      this.arrowPosition === 'end' &&
      (styles.top = `${
        targetPositions.y + targetPositions.height - tooltipHeight
      }px`);

    this.arrowSide === 'bottom' &&
      (styles.top = `${targetPositions.y - tooltipHeight - arrowSize}px`);
    this.arrowSide === 'bottom' &&
      this.arrowPosition === 'start' &&
      (styles.left = `${targetPositions.x}px`);
    this.arrowSide === 'bottom' &&
      this.arrowPosition === 'middle' &&
      (styles.left = `${
        targetPositions.x + targetPositions.width / 2 - tooltipWidth / 2
      }px`);
    this.arrowSide === 'bottom' &&
      this.arrowPosition === 'end' &&
      (styles.left = `${
        targetPositions.x + targetPositions.width - tooltipWidth
      }px`);

    this.arrowSide === 'top' &&
      (styles.top = `${targetPositions.y + targetPositions.height}px`);
    this.arrowSide === 'top' &&
      this.arrowPosition === 'start' &&
      (styles.left = `${targetPositions.x}px`);
    this.arrowSide === 'top' &&
      this.arrowPosition === 'middle' &&
      (styles.left = `${
        targetPositions.x + targetPositions.width / 2 - tooltipWidth / 2
      }px`);
    this.arrowSide === 'top' &&
      this.arrowPosition === 'end' &&
      (styles.left = `${
        targetPositions.x + targetPositions.width - tooltipWidth
      }px`);

    return styles;
  }
}
