/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { PlmgButtonVariant } from './components/plmg-button/plmg-button.types';
export namespace Components {
  interface PlmgButton {
    /**
     * Define button's variant.  Default: 'filled'
     */
    variant: PlmgButtonVariant;
  }
  interface PlmgP {}
}
declare global {
  interface HTMLPlmgButtonElement
    extends Components.PlmgButton,
      HTMLStencilElement {}
  var HTMLPlmgButtonElement: {
    prototype: HTMLPlmgButtonElement;
    new (): HTMLPlmgButtonElement;
  };
  interface HTMLPlmgPElement extends Components.PlmgP, HTMLStencilElement {}
  var HTMLPlmgPElement: {
    prototype: HTMLPlmgPElement;
    new (): HTMLPlmgPElement;
  };
  interface HTMLElementTagNameMap {
    'plmg-button': HTMLPlmgButtonElement;
    'plmg-p': HTMLPlmgPElement;
  }
}
declare namespace LocalJSX {
  interface PlmgButton {
    /**
     * Define button's variant.  Default: 'filled'
     */
    variant?: PlmgButtonVariant;
  }
  interface PlmgP {}
  interface IntrinsicElements {
    'plmg-button': PlmgButton;
    'plmg-p': PlmgP;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'plmg-button': LocalJSX.PlmgButton &
        JSXBase.HTMLAttributes<HTMLPlmgButtonElement>;
      'plmg-p': LocalJSX.PlmgP & JSXBase.HTMLAttributes<HTMLPlmgPElement>;
    }
  }
}
