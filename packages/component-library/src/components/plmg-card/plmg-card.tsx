import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';

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
   * If a headerText or an topActionIcon is provided, the heading will be displayed.
   * By default, when no headerText nor topActionIcon is provided, the heading is hidden.
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
   * If a headerText or an topActionIcon is provided, the heading will be displayed with the icon button on the right.
   * By default, when no headerText nor topActionIcon is provided, the heading is hidden.
   */
  @Prop() topActionIcon: string | undefined = undefined;
  @Watch('topActionIcon')
  validateTopActionIcon(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('topActionIcon must be a string');
  }

  /**
   * Define top action's label, used to enable assistive technology for the top action button.
   *
   * You must provide a topActionLabel when providing a topActionIcon.
   */
  @Prop() topActionLabel: string | undefined = undefined;
  @Watch('topActionLabel')
  validateTopActionLabel(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('topActionLabel must be a string');
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
   * Define card's sizing behaviour.
   *
   * To stretch to its content, or fill the available space its in.
   * If `fullWidth` is provided, the card will take the full width of it's container.
   * If `fullWidth` is not specified, the card will automatically size itself according to its content, plus any padding.
   *
   * Allowed values:
   *   - true
   *   - false
   *
   * Default: false
   */
  @Prop() fullWidth: boolean = false;
  @Watch('fullWidth')
  validateFullWidth(newValue: boolean) {
    if (typeof newValue !== 'boolean')
      throw new Error('fullWidth: must be boolean');
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
      <div
        class={'plmg-card'}
        style={{ width: this.fullWidth ? '100%' : 'fit-content' }}
      >
        {/* Header */}
        {this.hasHeader() && (
          <div class={'plmg-card-header'}>
            <span>{this.headerText}</span>
            {this.hasTopActionIcon() && (
              <plmg-button
                onClick={(e) => this.topActionClicked.emit(e)}
                design={'borderless'}
                size={'small'}
                color={'primary'}
                icon-center={this.topActionIcon}
                label={this.topActionLabel}
              />
            )}
          </div>
        )}
        {/* Content */}
        <div class={contentClasses}>
          <slot name={'slot-1'} />
          <slot name={'slot-2'} />
        </div>
        {/* Footer */}
        {this.hasFooter() && (
          <div class={'plmg-card-footer'}>
            <plmg-button
              onClick={(e) => this.bottomActionClicked.emit(e)}
              design={'borderless'}
              size={'small'}
              color={'primary'}
              text={this.bottomActionText}
            />
          </div>
        )}
      </div>
    );
  }

  private hasHeader(): boolean {
    return (
      (this.headerText && this.headerText !== '') || this.hasTopActionIcon()
    );
  }

  private hasTopActionIcon(): boolean {
    return this.topActionIcon && this.topActionIcon !== '';
  }

  private hasFooter(): boolean {
    return this.bottomActionText && this.bottomActionText !== '';
  }
}
