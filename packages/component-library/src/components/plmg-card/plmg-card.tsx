import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { isDefined } from '../../utils/isDefined';

/**
 * @slot slot-1 - First slot for custom content.
 * @slot slot-2 - Second slot for custom content, separated from the first slot by a margin-top.
 */
@Component({
  tag: 'plmg-card',
  styleUrl: 'plmg-card.scss',
  shadow: true,
})
export class Card {
  /**
   * Define card's header text.
   *
   * If a text or an icon is provided, the heading will be displayed.
   * By default, when no text nor icon is provided, the heading is hidden.
   */
  @Prop() headerText: string | undefined = undefined;
  @Watch('headerText')
  validateHeaderText(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('headerText must be a string');
  }

  /**
   * Define card's header icon, used as a top action for the card.
   *
   * If a text or an icon is provided, the heading will be displayed with the icon button on the right.
   * By default, when no text nor icon is provided, the heading is hidden.
   */
  @Prop() topActionIcon: string | undefined = undefined;
  @Watch('topActionIcon')
  validateTopActionIcon(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('topActionIcon must be a string');
  }

  /**
   * The event "topActionClicked" is triggered when the top action button is clicked.
   */
  @Event() topActionClicked: EventEmitter<MouseEvent>;

  /**
   * Define card's bottom button text.
   *
   * If a text is provided, the button will be displayed.
   * By default, when no text is provided, the button is hidden.
   */
  @Prop() bottomActionText: string | undefined = undefined;
  @Watch('bottomActionText')
  validateBottomActionText(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('bottomActionText must be a string');
  }

  /**
   * The event "bottomActionClicked" is triggered when the bottom action button is clicked.
   */
  @Event() bottomActionClicked: EventEmitter<MouseEvent>;

  render() {
    const contentClasses = {
      'plmg-card-content-area': true,
      'with-header': this.hasHeader(),
      'with-footer': this.hasFooter(),
    };

    return (
      <div class={'plmg-card'}>
        {/* Header */}
        {this.hasHeader() && (
          <div class={'plmg-card-header'}>
            <span>{this.headerText}</span>
            {isDefined(this.topActionIcon) && (
              <plmg-button
                onClick={(e) => this.topActionClicked.emit(e)}
                design={'borderless'}
                size={'small'}
                color={'primary'}
                icon-center={this.topActionIcon}
              >
                test
              </plmg-button>
            )}
          </div>
        )}
        {/* Content */}
        <div class={contentClasses}>
          <slot name={'slot-1'}></slot>
          <slot name={'slot-2'}></slot>
        </div>
        {/* Footer */}
        {this.hasFooter() && (
          <div class={'plmg-card-footer'}>
            <plmg-button
              onClick={(e) => this.bottomActionClicked.emit(e)}
              design={'borderless'}
              size={'small'}
              color={'primary'}
            >
              {this.bottomActionText}
            </plmg-button>
          </div>
        )}
      </div>
    );
  }

  private hasHeader(): boolean {
    return (
      (isDefined(this.headerText) && this.headerText !== '') ||
      (isDefined(this.topActionIcon) && this.topActionIcon !== '')
    );
  }

  private hasFooter(): boolean {
    return isDefined(this.bottomActionText) && this.bottomActionText !== '';
  }
}
