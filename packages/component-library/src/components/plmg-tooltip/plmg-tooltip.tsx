import { Component, h, Prop, State, Watch } from '@stencil/core';

import {
  isArrowPosition,
  isPosition,
  isBackgroundColor,
  PlmgTooltipArrowPositions,
  PlmgTooltipPosition,
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
  private ref: HTMLDivElement;

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
  }
  @Watch('targetElement')
  targetElementChange() {
    this.initiateTargetListeners();
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
   * Define tooltip's position.
   *
   * Allowed values:
   *   - left
   *   - right
   *   - top
   *   - bottom
   *
   * Default: top.
   * Required.
   */
  @Prop() position: PlmgTooltipPosition = 'top';
  @Watch('position')
  validateTooltipPosition(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('arrow side must be a string');
    if (!isPosition(newValue))
      throw new Error('arrow side: must be a valid value');
  }

  /**
   * Define tooltip arrow position. When 'none' is selected, no arrow is visible.
   *
   * Allowed values:
   *   - none
   *   - start
   *   - middle
   *   - end
   *
   * Default: none
   */
  @Prop() arrowPosition: PlmgTooltipArrowPositions = 'none';
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

  /**
   * Life Cycle Methods & Event Listeners
   */
  connectedCallback() {
    this.initiateTargetListeners();
  }

  /**
   * Listen for the following events on the target element:
   * - mouse over
   * - focus
   * - mouse out
   * - blur
   *
   * forceVisible prop disables the listeners
   *
   */
  private initiateTargetListeners() {
    if (this.targetElement) {
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
    if (this.abortTooltipListener) this.abortTooltipListener.abort();
  }

  render() {
    const spanClasses = {
      'plmg-tooltip': true,
      [this.position]: true,
      [this.arrowPosition]: true,
      [this.backgroundColor]: true,
    };

    return (
      <div
        style={this.setPosition()}
        ref={(el) => (this.ref = el as HTMLDivElement)}
      >
        <span class={spanClasses}>{this.content}</span>
      </div>
    );
  }

  private setPosition() {
    let styles = {
      position: 'fixed',
      overflow: 'visible',
      left: '-1000px',
      top: '-1000px',
    };

    if (!this.targetHTMLElement || !this.isVisible) return styles;

    /**
     * Max width is 150px plus 6px for the arrow = 156px
     * Max numbers of characters per line is 27 characters
     */

    const LINE_NUMBER: number = Math.ceil(this.content.length / 27);
    const LINE_HEIGHT: number = 18;
    const ARROW_SIZE = this.arrowPosition === 'none' ? 0 : 6;
    const PADDING_Y: number = 8;
    const TOOLTIP_HEIGHT: number = LINE_NUMBER * LINE_HEIGHT + PADDING_Y;
    const OFFSET = 4;

    // Calculate width of a tooltip with less than 27 characters. A multiline tooltip will be 156px wide.
    const WIDTH: number = this.getTooltipWidth();

    // Get the position of the target element
    const targetPositions = this.targetHTMLElement.getBoundingClientRect();

    // Calculate the relative position of the tooltip
    switch (this.position) {
      case 'right':
        styles.left = `${
          targetPositions.x + targetPositions.width + ARROW_SIZE + OFFSET
        }px`;
        styles.top = this.getLeftRightArrowPosition(
          targetPositions,
          TOOLTIP_HEIGHT
        );
        break;
      case 'left':
        styles.left = `${targetPositions.x - WIDTH - ARROW_SIZE - OFFSET}px`;
        styles.top = this.getLeftRightArrowPosition(
          targetPositions,
          TOOLTIP_HEIGHT
        );
        break;
      case 'bottom':
        styles.top = `${
          targetPositions.y + targetPositions.height + ARROW_SIZE + OFFSET
        }px`;
        styles.left = this.getTopBottomArrowPosition(targetPositions, WIDTH);
        break;
      case 'top':
        styles.top = `${
          targetPositions.y - TOOLTIP_HEIGHT - ARROW_SIZE - OFFSET
        }px`;
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
    if (this.arrowPosition === 'middle' || this.arrowPosition === 'none')
      return `${targetPositions.x + targetPositions.width / 2 - WIDTH / 2}px`;
    if (this.arrowPosition === 'end')
      return `${targetPositions.x + targetPositions.width - WIDTH}px`;
  }

  private getLeftRightArrowPosition(
    targetPositions: DOMRect,
    TOOLTIP_HEIGHT: number
  ): string {
    if (this.arrowPosition === 'start') return `${targetPositions.y}px`;
    if (this.arrowPosition === 'middle' || this.arrowPosition === 'none')
      return `${
        targetPositions.y + targetPositions.height / 2 - TOOLTIP_HEIGHT / 2
      }px`;
    if (this.arrowPosition === 'end')
      return `${targetPositions.y + targetPositions.height - TOOLTIP_HEIGHT}px`;
  }

  /**
   * Grab the width of the tooltip itself.
   * If the tooltip element is not available yet, return a default value.
   * @private
   */
  private getTooltipWidth() {
    if (this.ref) return this.ref.getBoundingClientRect().width;
    return 156;
  }
}
