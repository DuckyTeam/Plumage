/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlmgP {
    }
}
declare global {
    interface HTMLPlmgPElement extends Components.PlmgP, HTMLStencilElement {
    }
    var HTMLPlmgPElement: {
        prototype: HTMLPlmgPElement;
        new (): HTMLPlmgPElement;
    };
    interface HTMLElementTagNameMap {
        "plmg-p": HTMLPlmgPElement;
    }
}
declare namespace LocalJSX {
    interface PlmgP {
    }
    interface IntrinsicElements {
        "plmg-p": PlmgP;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plmg-p": LocalJSX.PlmgP & JSXBase.HTMLAttributes<HTMLPlmgPElement>;
        }
    }
}
