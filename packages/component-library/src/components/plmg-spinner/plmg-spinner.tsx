import { Component, h } from '@stencil/core';

@Component({
  tag: 'plmg-spinner',
  styleUrl: 'plmg-spinner.scss',
  shadow: true,
})
export class Spinner {
  /**
   * 1. Own Properties
   * Always set the type.
   * List the own properties in alphabetical order.
   * Note that because these properties do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  // flag: boolean = false;

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
  // @Event() click: EventEmitter<EnterExplicitEventTypeHere>;

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
    return (
      <div class={'plmg-spinner-overlay'}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM8 40C8 57.6731 22.3269 72 40 72C57.6731 72 72 57.6731 72 40C72 22.3269 57.6731 8 40 8C22.3269 8 8 22.3269 8 40Z"
            fill="#2C2E36"
          />
          <path
            d="M80 40C80 45.2529 78.9654 50.4543 76.9552 55.3073C74.945 60.1604 71.9986 64.5699 68.2843 68.2843C64.5699 71.9986 60.1604 74.945 55.3073 76.9552C50.4543 78.9654 45.2529 80 40 80C34.7471 80 29.5457 78.9654 24.6927 76.9552C19.8396 74.945 15.4301 71.9986 11.7157 68.2843C8.00138 64.5699 5.05501 60.1604 3.04482 55.3073C1.03463 50.4543 -4.59221e-07 45.2529 0 40L8 40C8 44.2023 8.8277 48.3634 10.4359 52.2459C12.044 56.1283 14.4011 59.6559 17.3726 62.6274C20.3441 65.5989 23.8717 67.956 27.7541 69.5641C31.6365 71.1723 35.7977 72 40 72C44.2023 72 48.3634 71.1723 52.2459 69.5641C56.1283 67.956 59.6559 65.5989 62.6274 62.6274C65.5989 59.6559 67.956 56.1283 69.5641 52.2459C71.1723 48.3635 72 44.2023 72 40H80Z"
            class={'plmg-spinner-rotate'}
            fill="#66C2CB"
          />
          <circle cx="40" cy="40" r="32" fill="#003D44" />
          <path
            d="M40.468 23.7871C33.6682 23.7871 26.1377 24.1423 26.1377 24.1423C26.3909 35.0102 26.4412 45.92 26.1328 57.2519C28.1911 57.2519 32.053 57.5648 41.0103 57.5648C51.7482 57.5648 56.8584 49.4108 56.8584 40.762C56.8567 31.242 51.0145 23.7871 40.468 23.7871ZM39.3544 51.1627C36.6826 51.1627 35.4147 51.0003 35.4147 51.0003L35.4423 30.7701C35.4423 30.7701 38.046 30.6987 39.7603 30.6987C44.8946 30.6987 47.992 35.3604 47.992 40.5933C47.992 45.8259 44.8946 51.1627 39.3544 51.1627Z"
            fill="white"
          />
          <path
            d="M61.7766 24.1406H55.8939C53.7499 24.1406 52.2645 24.7676 51.4331 27.1141L48.9766 35.1629H52.8469C56.6977 35.1629 58.1456 34.0367 59.3283 31.0808L61.7766 24.1406Z"
            fill="#66C2CB"
          />
        </svg>
      </div>
    );
  }
}
