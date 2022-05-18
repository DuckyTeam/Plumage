import { Component, h, Prop, State, Watch } from '@stencil/core';
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
  private abortTooltipListener: AbortController;
  private tooltipTargetElement: HTMLElement;
  /**
   * Store whether the tooltip is currently visible.
   * Default hidden
   */

  toolTipArrowWidth: number = 6;
  toolTipTextLength: number = 150;
  toolTipPaddingY: number = 4;
  toolTipPaddingX: number = 8;
  toolTipLineHeight: number = 18;
  toolTipWidth: number = this.toolTipTextLength + this.toolTipPaddingX;
  toolTipHeight: number = this.toolTipLineHeight + this.toolTipPaddingY;

  @State() isTooltipVisible: boolean = false;

  /**
   * ID for connected element. Required for tooltip to function
   */

  @Prop() targetElementId: string;
  @Watch('targetElementId')
  validateTargetElementId(newValue: string) {
    if ((newValue && typeof newValue !== 'string') || newValue === '')
      throw new Error('target element id must be a string');
  }

  /**
   * Force tooltip to remain visible
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

  /** Listeners
   *
   * Listen for mouse over / focus and mouse out / blur events
   * user defined target element display / hides tooltip
   */

  connectedCallback() {
    this.isTooltipVisible = this.forceVisible;

    // ForceVisible prop boolean disables event listener

    if (!this.forceVisible) {
      this.abortTooltipListener = new AbortController();
      this.tooltipTargetElement = document.getElementById(this.targetElementId);
      this.tooltipTargetElement.addEventListener(
        'mouseover',
        (ev) => {
          console.log(ev);
          return (this.isTooltipVisible = true);
        },
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

  // clean-up listener

  disconnectedCallback() {
    if (!this.forceVisible) {
      if (this.abortTooltipListener) this.abortTooltipListener.abort();
    }
  }

  render() {
    const classes = {
      'plmg-tooltip': true,
      visible: this.isTooltipVisible,
      // conditionally include arrow classes
      ...(this.hasArrow() && { [this.arrowSide]: true }),
      ...(this.hasArrow() && { [this.arrowPosition]: true }),
      [this.bgColor]: true,
    };

    return (
      <div style={this.calculateToolTipPositions()}>
        <span class={classes}>
          <slot />
        </span>
      </div>
    );
  }

  // check if tooltip needs an arrow
  private hasArrow() {
    return this.arrowSide !== 'none' && (this.arrowSide as string) !== '';
  }

  private calculateToolTipPositions() {
    let styles = {
      position: 'fixed',
      left: '0px',
      top: '0px',
    };

    const targetPositions = this.tooltipTargetElement.getBoundingClientRect();

    if (this.arrowSide === 'left' && this.arrowPosition === 'start') {
      console.log('left start');
      styles.left = targetPositions.x + targetPositions.width + 'px';
      styles.top = targetPositions.y + 'px';
    } else if (this.arrowSide === 'left' && this.arrowPosition === 'middle') {
      console.log('left middle');
      console.log(targetPositions);
      styles.left = targetPositions.x + targetPositions.width + 'px';
      styles.top = targetPositions.y + 'px';
    } else if (this.arrowSide === 'left' && this.arrowPosition === 'end') {
      console.log('left end');
      styles.left = targetPositions.x + targetPositions.width + 'px';
      styles.top = targetPositions.y - targetPositions.height + 'px';
    } else if (this.arrowSide === 'right' && this.arrowPosition === 'start') {
      console.log('right start');
      console.log(targetPositions.x);
      styles.left =
        targetPositions.x - (this.toolTipWidth + this.toolTipArrowWidth) + 'px';
      styles.top = targetPositions.y + 'px';
      console.log(styles.left);
    } else if (this.arrowSide === 'right' && this.arrowPosition === 'middle') {
      console.log('right middle');
      console.log(targetPositions);
      styles.left =
        targetPositions.x - (this.toolTipWidth + this.toolTipArrowWidth) + 'px';
      styles.top = targetPositions.y + 'px';
    } else if (this.arrowSide === 'right' && this.arrowPosition === 'end') {
      console.log('right end');
      styles.left =
        targetPositions.x - (this.toolTipWidth + this.toolTipArrowWidth) + 'px';
      styles.top = targetPositions.y - targetPositions.height + 'px';
    } else if (this.arrowSide === 'top' && this.arrowPosition === 'start') {
      styles.left = targetPositions.x - targetPositions.width / 2 + 'px';
      styles.top = targetPositions.y + targetPositions.height + 'px';
      console.log(styles.left);
    } else if (this.arrowSide === 'top' && this.arrowPosition === 'middle') {
      console.log('top middle');
      console.log(targetPositions.x);
      styles.left =
        targetPositions.x -
        this.toolTipWidth / 2 +
        targetPositions.width / 2 +
        'px';
      styles.top = targetPositions.y + targetPositions.height + 'px';
    } else if (this.arrowSide === 'top' && this.arrowPosition === 'end') {
      console.log('top end');
      styles.left =
        targetPositions.x - this.toolTipWidth + targetPositions.width + 'px';
      styles.top = targetPositions.y + targetPositions.height + 'px';
    } else if (this.arrowSide === 'bottom' && this.arrowPosition === 'start') {
      console.log('bottom start');
      styles.left = targetPositions.x - targetPositions.width / 2 + 'px';
      styles.top =
        targetPositions.y -
        (targetPositions.height + this.toolTipHeight) +
        'px';
    } else if (this.arrowSide === 'bottom' && this.arrowPosition === 'middle') {
      console.log('bottom middle');
      console.log(targetPositions.x);
      styles.left =
        targetPositions.x -
        this.toolTipWidth / 2 +
        targetPositions.width / 2 +
        'px';
      styles.top =
        targetPositions.y -
        (targetPositions.height + this.toolTipHeight) +
        'px';
    } else if (this.arrowSide === 'bottom' && this.arrowPosition === 'end') {
      console.log('bottom end');
      styles.left =
        targetPositions.x - this.toolTipWidth + targetPositions.width + 'px';
      styles.top =
        targetPositions.y -
        (targetPositions.height + this.toolTipHeight) +
        'px';
    }

    return styles;
  }

  //   if (this.arrowSide === "top") { toolTipYPos = targetPositions.y + targetPositions.height + this.toolTipHeight }
  //   if (this.arrowPosition === "start" ) { toolTipYPos = targetPositions.top }
  //   if (this.arrowPosition === "middle" ) { toolTipYPos = targetPositions.top - (this.toolTipHeight / 2)}
  //   if (this.arrowPosition === "end" ) { toolTipYPos = targetPositions.top + (this.toolTipHeight)}
  //   return toolTipYPos + "px";
  // }
}
