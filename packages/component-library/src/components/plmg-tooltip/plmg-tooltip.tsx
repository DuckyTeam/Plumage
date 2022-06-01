import { Component, h, Prop, State, Watch } from '@stencil/core';

import {
  isArrowPosition,
  isArrowSide,
  isBackgroundColor,
  PlmgTooltipArrowPositions,
  PlmgTooltipArrowSides,
  PlmgTooltipBackgroundColors,
} from './plmg-tooltip.types';

@Component({
  tag: 'plmg-tooltip',
  styleUrl: 'plmg-tooltip.scss',
  shadow: true,
})
export class Tooltip {
  private abortTooltipListener: AbortController;
  private targetHTMLElement: HTMLElement;

  /**
   * Store tooltip visibility.
   *
   * Default hidden
   */

  @State() isVisible: boolean = false;

  /**
   * Reference to the target element or its ID for connected element.
   * Required.
   */

  @Prop() targetElement: string | HTMLElement;
  @Watch('targetElement')
  validateTargetElement(newValue: string) {
    if (
      (newValue &&
        typeof newValue !== 'string' &&
        !((newValue as any) instanceof HTMLElement)) ||
      newValue === ''
    )
      throw new Error(
        'id of the target element must be an HTMLElement or a string'
      );

    console.log(newValue);
    this.connectedCallback();
  }

  /**
   * Force tooltip to remain visible
   *
   * Will disable event listeners
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

  @Prop() backgroundColor: PlmgTooltipBackgroundColors = 'neutral';
  @Watch('backgroundColor')
  validateBgColor(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('backgroundColor must be a string');
    if (!isBackgroundColor(newValue))
      throw new Error('backgroundColor must be a valid value');
  }

  /**
   * Define tooltip's arrow side
   *
   * Allowed values:
   *   - none
   *   - left
   *   - right
   *   - top
   *   - bottom
   *
   * Default: none
   */

  @Prop() arrowSide: PlmgTooltipArrowSides = 'none';
  @Watch('arrowSide')
  validateArrowSide(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('arrow side must be a string');
    if (!isArrowSide(newValue))
      throw new Error('arrow side: must be a valid value');
  }

  /**
   * Define tooltip arrow position
   *
   * Allowed values:
   *   - start
   *   - middle
   *   - end
   *
   * Default: none
   */

  @Prop() arrowPosition: PlmgTooltipArrowPositions = 'middle';
  @Watch('arrowPosition')
  validateArrowPosition(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('arrow position must be a string');
    if (!isArrowPosition(newValue))
      throw new Error('arrow position must be a valid value');
  }

  /**
   * Tooltip Content Text
   *
   * Allowed value: any string
   *
   * Required
   */

  @Prop() content: string;
  @Watch('content')
  validateTooltipContent(newValue: string) {
    if (newValue && !newValue) throw new Error('tooltip requires content');
    if (newValue && typeof newValue !== 'string')
      throw new Error('text must be a string');
  }

  /** Life Cycle Methods & Event Listeners
   *
   * Listen for
   *
   * mouse over
   * focus
   * mouse out
   * blur
   *
   * on the target element
   *
   * forceVisibile prop disables the listeners
   */

  connectedCallback() {
    this.isVisible = this.forceVisible;
    if (!this.forceVisible && this.targetElement) {
      if (this.targetElement instanceof HTMLElement) {
        this.targetHTMLElement = this.targetElement;
      } else {
        this.targetHTMLElement = document.getElementById(this.targetElement);
      }

      if (this.targetHTMLElement != null) {
        this.abortTooltipListener = new AbortController();
        this.targetHTMLElement.addEventListener(
          'mouseover',
          () => (this.isVisible = true),
          { signal: this.abortTooltipListener.signal }
        );
        this.targetHTMLElement.addEventListener(
          'focus',
          () => (this.isVisible = true),
          { signal: this.abortTooltipListener.signal }
        );
        this.targetHTMLElement.addEventListener(
          'mouseleave',
          () => (this.isVisible = false),
          { signal: this.abortTooltipListener.signal }
        );
        this.targetHTMLElement.addEventListener(
          'blur',
          () => (this.isVisible = false),
          { signal: this.abortTooltipListener.signal }
        );
      }
    }
  }

  /**
   * Remove event listener
   */

  disconnectedCallback() {
    !this.forceVisible && this.abortTooltipListener;
    {
      this.abortTooltipListener.abort();
    }
  }

  render() {
    const classes = {
      'plmg-tooltip': true,
      visible: this.isVisible,
      // Include arrow classes if side is not set to none
      ...(this.arrowSide && { [this.arrowSide]: true }),
      ...(this.arrowSide && { [this.arrowPosition]: true }),
      [this.backgroundColor]: true,
    };

    return (
      <div style={!this.forceVisible && this.setPosition()}>
        <span class={classes}>{this.content}</span>
      </div>
    );
  }

  private setPosition() {
    let styles = {
      position: 'fixed',
      overflow: 'visible',
      left: '10%',
      top: '10%',
    };

    if (!this.targetHTMLElement) return styles;

    /**
     * Max width is 150px plus 6px for the arrow = 156px
     * Max numbers of characters per line is 27 characters
     */

    const LINE_NUMBER: number = Math.ceil(this.content.length / 27);
    const LINE_HEIGHT: number = 18;
    const ARROW_WIDTH = 6;
    const PADDING_Y: number = 8;
    const PADDING_X: number = 16;
    const LETTER_WIDTH: number = 5.3;
    const TOOLTIP_HEIGHT: number = LINE_NUMBER * LINE_HEIGHT + PADDING_Y;

    // Calculate width of a tooltip with less than 27 characters. A multiline tooltip will be 156px wide.
    const WIDTH: number = this.getTooltipWidth(LETTER_WIDTH, PADDING_X);

    // Get the position of the target element
    const targetPositions = this.targetHTMLElement.getBoundingClientRect();

    // Calculate the relative position of the tooltip
    switch (this.arrowSide) {
      case 'left':
        styles.left = `${targetPositions.x + targetPositions.width}px`;
        styles.top = this.getLeftRightArrowPosition(
          targetPositions,
          TOOLTIP_HEIGHT
        );
        break;
      case 'right':
        styles.left = `${targetPositions.x - WIDTH - ARROW_WIDTH}px`;
        styles.top = this.getLeftRightArrowPosition(
          targetPositions,
          TOOLTIP_HEIGHT
        );
        break;
      case 'top':
        styles.top = `${
          targetPositions.y + targetPositions.height + ARROW_WIDTH
        }px`;
        styles.left = this.getTopBottomArrowPosition(targetPositions, WIDTH);
        break;
      case 'bottom':
        styles.top = `${targetPositions.y - TOOLTIP_HEIGHT - ARROW_WIDTH}px`;
        styles.left = this.getTopBottomArrowPosition(targetPositions, WIDTH);
        break;
    }

    return styles;
  }

  private getTopBottomArrowPosition(
    targetPositions: DOMRect,
    WIDTH: number
  ): string {
    if (this.arrowPosition === 'start') return `${targetPositions.x}px`;
    if (this.arrowPosition === 'middle')
      return `${targetPositions.x + targetPositions.width / 2 - WIDTH / 2}px`;
    if (this.arrowPosition === 'end')
      return `${targetPositions.x + targetPositions.width - WIDTH}px`;
  }

  private getLeftRightArrowPosition(
    targetPositions: DOMRect,
    TOOLTIP_HEIGHT: number
  ): string {
    if (this.arrowPosition === 'start') return `${targetPositions.y}px`;
    if (this.arrowPosition === 'middle')
      return `${
        targetPositions.y + targetPositions.height / 2 - TOOLTIP_HEIGHT / 2
      }px`;
    if (this.arrowPosition === 'end')
      return `${targetPositions.y + targetPositions.height - TOOLTIP_HEIGHT}px`;
  }

  private getTooltipWidth(LETTER_WIDTH: number, PADDING_X: number) {
    return this.content.length <= 27
      ? this.content.length * LETTER_WIDTH + PADDING_X
      : 156;
  }
}
