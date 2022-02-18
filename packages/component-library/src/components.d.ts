/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  PlmgButtonColor,
  PlmgButtonDesign,
  PlmgButtonSize,
} from './components/plmg-button/plmg-button.types';
export namespace Components {
  interface PlmgButton {
    /**
     * Define button's color  Allowed values:   - primary   - neutral   - standout   - danger  Default: primary
     */
    color: PlmgButtonColor;
    /**
     * Define button's design.  Allowed values:   - filled   - filled-round   - outline   - outline-round   - borderless  Default: filled
     */
    design: PlmgButtonDesign;
    /**
     * Define button's width  Allowed values:   - true   - false  Default: false
     */
    fullWidth: boolean;
    /**
     * Define button's shadow  Allowed values:   - true   - false  Default: false
     */
    shadow: boolean;
    /**
     * Define button's size  Allowed values:   - small   - medium   - large   - extra-large  Default: medium
     */
    size: PlmgButtonSize;
  }
}
declare global {
  interface HTMLPlmgButtonElement
    extends Components.PlmgButton,
      HTMLStencilElement {}
  var HTMLPlmgButtonElement: {
    prototype: HTMLPlmgButtonElement;
    new (): HTMLPlmgButtonElement;
  };
  interface HTMLElementTagNameMap {
    'plmg-button': HTMLPlmgButtonElement;
  }
}
declare namespace LocalJSX {
  interface PlmgButton {
    /**
     * Define button's color  Allowed values:   - primary   - neutral   - standout   - danger  Default: primary
     */
    color?: PlmgButtonColor;
    /**
     * Define button's design.  Allowed values:   - filled   - filled-round   - outline   - outline-round   - borderless  Default: filled
     */
    design?: PlmgButtonDesign;
    /**
     * Define button's width  Allowed values:   - true   - false  Default: false
     */
    fullWidth?: boolean;
    /**
     * Define button's shadow  Allowed values:   - true   - false  Default: false
     */
    shadow?: boolean;
    /**
     * Define button's size  Allowed values:   - small   - medium   - large   - extra-large  Default: medium
     */
    size?: PlmgButtonSize;
  }
  interface IntrinsicElements {
    'plmg-button': PlmgButton;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'plmg-button': LocalJSX.PlmgButton &
        JSXBase.HTMLAttributes<HTMLPlmgButtonElement>;
    }
  }
}
