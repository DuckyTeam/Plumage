import { Component, h, Prop, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'plmg-card',
  styleUrl: 'plmg-card.scss',
  shadow: true,
})
export class Card {
  /**
   * Define card's header text
   */
  @Prop() headerText: string;
  @Watch('headerText')
  validateHeaderText(newValue: string) {
    if (newValue && typeof newValue !== 'string')
      throw new Error('headerText must be a string');
  }

  /**
   * Define card's bottom button action
   */
  @Prop() bottomButtonAction: () => void;

  /**
   * Define card's bottom button text
   */
  @Prop() bottomButtonText: string;
  @Watch('bottomButtonText')
  validateBottomButtonText(newValue: string) {
    if (newValue && !this.bottomButtonAction)
      throw new Error(
        'card must have a bottomButtonAction to have a bottomButtonText'
      );
    if (newValue && typeof newValue !== 'string')
      throw new Error('bottomButtonText must be a string');
  }

  render() {
    const cardClasses = {
      'plmg-card': true,
    };

    const headerClasses = {
      header: true,
    };

    const contentClasses = {
      'content-area': true,
      'with-header': Boolean(this.headerText),
      'with-footer': Boolean(this.bottomButtonAction),
    };

    const footerClasses = {
      footer: true,
    };

    return (
      <div class={cardClasses}>
        {Boolean(this.headerText) && (
          <div class={headerClasses}>
            <span>{this.headerText}</span>
          </div>
        )}
        <div class={contentClasses}>
          <slot></slot>
        </div>
        {Boolean(this.bottomButtonAction) && (
          <div class={footerClasses}>
            <plmg-button
              onClick={this.bottomButtonAction}
              design={'borderless'}
              size={'small'}
              color={'primary'}
            >
              {this.bottomButtonText}
            </plmg-button>
          </div>
        )}
      </div>
    );
  }
}
