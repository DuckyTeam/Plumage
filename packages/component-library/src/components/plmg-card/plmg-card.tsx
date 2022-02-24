import { Component, h, Prop, Watch } from '@stencil/core';

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
   * Define card's header text
   */
  @Prop() bottomButtonText: string;
  @Watch('bottomButtonText')
  validateBottomButtonText(newValue: string) {
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
      'with-footer': Boolean(this.bottomButtonText),
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
        {Boolean(this.bottomButtonText) && (
          <div class={footerClasses}>
            <plmg-button design={'borderless'} size={'small'} color={'primary'}>
              {this.bottomButtonText}
            </plmg-button>
          </div>
        )}
      </div>
    );
  }
}
