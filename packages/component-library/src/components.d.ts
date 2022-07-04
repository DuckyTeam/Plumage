/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { PlmgButtonColor, PlmgButtonDesign, PlmgButtonSize, PlmgButtonType } from "./components/plmg-button/plmg-button.types";
export namespace Components {
    interface PlmgButton {
        /**
          * Define button's color  Allowed values:   - primary   - neutral   - standout   - danger  Default: primary
         */
        "color": PlmgButtonColor;
        /**
          * Define button's design.  Allowed values:   - filled   - filled-round   - outline   - outline-round   - borderless  Default: filled
         */
        "design": PlmgButtonDesign;
        /**
          * Define button's width  Allowed values:   - true   - false  Default: false
         */
        "fullWidth": boolean;
        /**
          * Define button as a link
         */
        "href": string;
        /**
          * Define button's centered icon.  When providing an icon name to this prop, the corresponding icon will be displayed. it will be placed to the center.  You must provide a label.  When providing a center icon, you should not provide a text slot. That is because the center icon will be bigger than the text, to render with the same height as other buttons. If you do provide both the center icon and the text slot, the icon will appear just before the text slot.
         */
        "iconCenter": string;
        /**
          * Define button's left icon.  When providing an icon name to this prop, the corresponding icon will be displayed. it will be placed to the left of the text slot.
         */
        "iconLeft": string;
        /**
          * Define button's right icon.  When providing an icon name to this prop, the corresponding icon will be displayed. it will be placed to the right of the text slot.
         */
        "iconRight": string;
        /**
          * An accessible label for the Icon Button. If no label is supplied, the icon is hidden from assistive technology.  You must provide this when providing iconCenter.
         */
        "label": string | undefined;
        /**
          * Define links rel
         */
        "rel": string;
        /**
          * Define button's shadow  Allowed values:   - true   - false  Default: false
         */
        "shadow": boolean;
        /**
          * Define button's size  Allowed values:   - small   - medium   - large   - extra-large  Default: medium
         */
        "size": PlmgButtonSize;
        /**
          * Define links target
         */
        "target": string;
        /**
          * Define button's type  Allowed values:   - button   - submit   - reset  Default: button
         */
        "type": PlmgButtonType;
    }
    interface PlmgCard {
        /**
          * Define card's bottom button text.  If a text is provided, the button will be displayed. By default, when no text is provided, the button is hidden.
         */
        "bottomActionText": string | undefined;
        /**
          * Define card's header text.  If a headerText or an topActionIcon is provided, the heading will be displayed. By default, when no headerText nor topActionIcon is provided, the heading is hidden.
         */
        "headerText": string | undefined;
        /**
          * Define card's header icon, used as a top action for the card.  If a headerText or an topActionIcon is provided, the heading will be displayed with the icon button on the right. By default, when no headerText nor topActionIcon is provided, the heading is hidden.
         */
        "topActionIcon": string | undefined;
        /**
          * Define top action's label, used to enable assistive technology for the top action button.  You must provide a topActionLabel when providing a topActionIcon.
         */
        "topActionLabel": string | undefined;
    }
    interface PlmgHeader {
        /**
          * Invoke this method to reveals the "expand" icon and update the margin left
         */
        "sidebarCollapsedHandler": () => Promise<void>;
        /**
          * Define if the sidebar is expanded on startup.
         */
        "sidebarExpanded": boolean;
    }
    interface PlmgPageContainer {
        /**
          * Define if the sidebar is expanded on startup.
         */
        "sidebarExpanded": boolean;
    }
    interface PlmgSeparator {
        /**
          * Define separator's color.  Can be any valid CSS color value.  Default is plmgColorBorderNeutral
         */
        "color": string;
        /**
          * Define separator's direction.  Allowed values:   - vertical   - horizontal  Default: horizontal
         */
        "direction": string;
        /**
          * Define separator's thickness.  Allowed values:   - thin   - thick  Default: thin
         */
        "thickness": string;
    }
    interface PlmgSidebar {
        /**
          * Invoke this method to collapse the sidebar.
         */
        "collapse": () => Promise<void>;
        /**
          * Invoke this method to expand the sidebar.
         */
        "expand": () => Promise<void>;
        /**
          * Define if the item is expanded on startup.
         */
        "expanded": boolean;
        /**
          * Path to redirect when clicking on the logo.
         */
        "logoHref": string;
        /**
          * "src" property of the logo img.
         */
        "logoSrc": string;
    }
    interface PlmgSidebarItem {
        /**
          * Set this prop to True when this item is active. It highlights the item.
         */
        "active": boolean;
        /**
          * Define if the item is expanded. Only valid when this item has children.
         */
        "expanded": boolean;
        /**
          * The link to redirect to when this item is clicked.  If this item has children, you cannot provide a href, because clicking the item will instead expand/collapse the children list.
         */
        "href": string;
        /**
          * The name of the icon to show on the left of the text. It is optional to provide an icon.  Items at level 2 should never have an icon. Icon will not be rendered even if provided.
         */
        "icon": string;
        /**
          * Define links rel
         */
        "rel": string;
        /**
          * Define links target
         */
        "target": string;
        /**
          * The text to show on the item. it is mandatory to provide a text.  If the text is too long for the item, it will be truncated and will end with "...". Example: "This name is too lon..."
         */
        "text": string;
    }
    interface PlmgSlider {
        /**
          * Define the default value  Sets the starting value for the slider  Allowed values: - any number  If defaultValue is outside of min and max range or undefined defaultValue is set to the min value
         */
        "defaultValue": number;
        /**
          * Define mark visibility  Default: true
         */
        "marks": boolean;
        /**
          * Define a descriptive name for the slider  Allowed values: - any string  Required for accessibility and should be a unique and descriptive
         */
        "name": string;
        /**
          * Define a range of values  Allowed values: - An array of with at least two items  Must be a list of values with at least two items with the first and last items set min and max values. Additional values set additional marks and labels. Sort the array passed to component on the client, the component will not sort the array.
         */
        "rangeValues": Array<number>;
        /**
          * Define step  Allowed values: - Any number  Slider's value will increase or decrease by the step value  When step is not provided the step value is set to 1% of the range
         */
        "step": number;
        /**
          * Define thumb label visibility  Allowed values:  - true  - false  Default: true
         */
        "thumbLabel": boolean;
    }
    interface PlmgSvgIcon {
        /**
          * Define icon's color.  Can be any valid CSS color value.  By default, the icon will have the same color as the parent's element.
         */
        "color": string | undefined;
        /**
          * Define icon by its name. Name must be one of the existing icon: https://components.ducky.eco/?path=/story/component-svgicon--all-icons  Default: NULL
         */
        "icon": string;
        /**
          * Define the icon's size.  Allowed values: <value><unit>  Examples: - 1em - 42px  Default: 1em
         */
        "size": string;
    }
}
export interface PlmgCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPlmgCardElement;
}
export interface PlmgHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPlmgHeaderElement;
}
export interface PlmgSidebarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPlmgSidebarElement;
}
export interface PlmgSliderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPlmgSliderElement;
}
declare global {
    interface HTMLPlmgButtonElement extends Components.PlmgButton, HTMLStencilElement {
    }
    var HTMLPlmgButtonElement: {
        prototype: HTMLPlmgButtonElement;
        new (): HTMLPlmgButtonElement;
    };
    interface HTMLPlmgCardElement extends Components.PlmgCard, HTMLStencilElement {
    }
    var HTMLPlmgCardElement: {
        prototype: HTMLPlmgCardElement;
        new (): HTMLPlmgCardElement;
    };
    interface HTMLPlmgHeaderElement extends Components.PlmgHeader, HTMLStencilElement {
    }
    var HTMLPlmgHeaderElement: {
        prototype: HTMLPlmgHeaderElement;
        new (): HTMLPlmgHeaderElement;
    };
    interface HTMLPlmgPageContainerElement extends Components.PlmgPageContainer, HTMLStencilElement {
    }
    var HTMLPlmgPageContainerElement: {
        prototype: HTMLPlmgPageContainerElement;
        new (): HTMLPlmgPageContainerElement;
    };
    interface HTMLPlmgSeparatorElement extends Components.PlmgSeparator, HTMLStencilElement {
    }
    var HTMLPlmgSeparatorElement: {
        prototype: HTMLPlmgSeparatorElement;
        new (): HTMLPlmgSeparatorElement;
    };
    interface HTMLPlmgSidebarElement extends Components.PlmgSidebar, HTMLStencilElement {
    }
    var HTMLPlmgSidebarElement: {
        prototype: HTMLPlmgSidebarElement;
        new (): HTMLPlmgSidebarElement;
    };
    interface HTMLPlmgSidebarItemElement extends Components.PlmgSidebarItem, HTMLStencilElement {
    }
    var HTMLPlmgSidebarItemElement: {
        prototype: HTMLPlmgSidebarItemElement;
        new (): HTMLPlmgSidebarItemElement;
    };
    interface HTMLPlmgSliderElement extends Components.PlmgSlider, HTMLStencilElement {
    }
    var HTMLPlmgSliderElement: {
        prototype: HTMLPlmgSliderElement;
        new (): HTMLPlmgSliderElement;
    };
    interface HTMLPlmgSvgIconElement extends Components.PlmgSvgIcon, HTMLStencilElement {
    }
    var HTMLPlmgSvgIconElement: {
        prototype: HTMLPlmgSvgIconElement;
        new (): HTMLPlmgSvgIconElement;
    };
    interface HTMLElementTagNameMap {
        "plmg-button": HTMLPlmgButtonElement;
        "plmg-card": HTMLPlmgCardElement;
        "plmg-header": HTMLPlmgHeaderElement;
        "plmg-page-container": HTMLPlmgPageContainerElement;
        "plmg-separator": HTMLPlmgSeparatorElement;
        "plmg-sidebar": HTMLPlmgSidebarElement;
        "plmg-sidebar-item": HTMLPlmgSidebarItemElement;
        "plmg-slider": HTMLPlmgSliderElement;
        "plmg-svg-icon": HTMLPlmgSvgIconElement;
    }
}
declare namespace LocalJSX {
    interface PlmgButton {
        /**
          * Define button's color  Allowed values:   - primary   - neutral   - standout   - danger  Default: primary
         */
        "color"?: PlmgButtonColor;
        /**
          * Define button's design.  Allowed values:   - filled   - filled-round   - outline   - outline-round   - borderless  Default: filled
         */
        "design"?: PlmgButtonDesign;
        /**
          * Define button's width  Allowed values:   - true   - false  Default: false
         */
        "fullWidth"?: boolean;
        /**
          * Define button as a link
         */
        "href"?: string;
        /**
          * Define button's centered icon.  When providing an icon name to this prop, the corresponding icon will be displayed. it will be placed to the center.  You must provide a label.  When providing a center icon, you should not provide a text slot. That is because the center icon will be bigger than the text, to render with the same height as other buttons. If you do provide both the center icon and the text slot, the icon will appear just before the text slot.
         */
        "iconCenter"?: string;
        /**
          * Define button's left icon.  When providing an icon name to this prop, the corresponding icon will be displayed. it will be placed to the left of the text slot.
         */
        "iconLeft"?: string;
        /**
          * Define button's right icon.  When providing an icon name to this prop, the corresponding icon will be displayed. it will be placed to the right of the text slot.
         */
        "iconRight"?: string;
        /**
          * An accessible label for the Icon Button. If no label is supplied, the icon is hidden from assistive technology.  You must provide this when providing iconCenter.
         */
        "label"?: string | undefined;
        /**
          * Define links rel
         */
        "rel"?: string;
        /**
          * Define button's shadow  Allowed values:   - true   - false  Default: false
         */
        "shadow"?: boolean;
        /**
          * Define button's size  Allowed values:   - small   - medium   - large   - extra-large  Default: medium
         */
        "size"?: PlmgButtonSize;
        /**
          * Define links target
         */
        "target"?: string;
        /**
          * Define button's type  Allowed values:   - button   - submit   - reset  Default: button
         */
        "type"?: PlmgButtonType;
    }
    interface PlmgCard {
        /**
          * Define card's bottom button text.  If a text is provided, the button will be displayed. By default, when no text is provided, the button is hidden.
         */
        "bottomActionText"?: string | undefined;
        /**
          * Define card's header text.  If a headerText or an topActionIcon is provided, the heading will be displayed. By default, when no headerText nor topActionIcon is provided, the heading is hidden.
         */
        "headerText"?: string | undefined;
        /**
          * The event "bottomActionClicked" is triggered when the bottom action button is clicked.
         */
        "onBottomActionClicked"?: (event: PlmgCardCustomEvent<MouseEvent>) => void;
        /**
          * The event "topActionClicked" is triggered when the top action button is clicked.
         */
        "onTopActionClicked"?: (event: PlmgCardCustomEvent<MouseEvent>) => void;
        /**
          * Define card's header icon, used as a top action for the card.  If a headerText or an topActionIcon is provided, the heading will be displayed with the icon button on the right. By default, when no headerText nor topActionIcon is provided, the heading is hidden.
         */
        "topActionIcon"?: string | undefined;
        /**
          * Define top action's label, used to enable assistive technology for the top action button.  You must provide a topActionLabel when providing a topActionIcon.
         */
        "topActionLabel"?: string | undefined;
    }
    interface PlmgHeader {
        /**
          * Event dispatched when the button to expand the sidebar is clicked.
         */
        "onExpandSidebar"?: (event: PlmgHeaderCustomEvent<any>) => void;
        /**
          * Define if the sidebar is expanded on startup.
         */
        "sidebarExpanded"?: boolean;
    }
    interface PlmgPageContainer {
        /**
          * Define if the sidebar is expanded on startup.
         */
        "sidebarExpanded"?: boolean;
    }
    interface PlmgSeparator {
        /**
          * Define separator's color.  Can be any valid CSS color value.  Default is plmgColorBorderNeutral
         */
        "color"?: string;
        /**
          * Define separator's direction.  Allowed values:   - vertical   - horizontal  Default: horizontal
         */
        "direction"?: string;
        /**
          * Define separator's thickness.  Allowed values:   - thin   - thick  Default: thin
         */
        "thickness"?: string;
    }
    interface PlmgSidebar {
        /**
          * Define if the item is expanded on startup.
         */
        "expanded"?: boolean;
        /**
          * Path to redirect when clicking on the logo.
         */
        "logoHref"?: string;
        /**
          * "src" property of the logo img.
         */
        "logoSrc"?: string;
        /**
          * Event dispatched when the button to collapse the sidebar is clicked.
         */
        "onCollapseSidebar"?: (event: PlmgSidebarCustomEvent<any>) => void;
    }
    interface PlmgSidebarItem {
        /**
          * Set this prop to True when this item is active. It highlights the item.
         */
        "active"?: boolean;
        /**
          * Define if the item is expanded. Only valid when this item has children.
         */
        "expanded"?: boolean;
        /**
          * The link to redirect to when this item is clicked.  If this item has children, you cannot provide a href, because clicking the item will instead expand/collapse the children list.
         */
        "href"?: string;
        /**
          * The name of the icon to show on the left of the text. It is optional to provide an icon.  Items at level 2 should never have an icon. Icon will not be rendered even if provided.
         */
        "icon"?: string;
        /**
          * Define links rel
         */
        "rel"?: string;
        /**
          * Define links target
         */
        "target"?: string;
        /**
          * The text to show on the item. it is mandatory to provide a text.  If the text is too long for the item, it will be truncated and will end with "...". Example: "This name is too lon..."
         */
        "text"?: string;
    }
    interface PlmgSlider {
        /**
          * Define the default value  Sets the starting value for the slider  Allowed values: - any number  If defaultValue is outside of min and max range or undefined defaultValue is set to the min value
         */
        "defaultValue"?: number;
        /**
          * Define mark visibility  Default: true
         */
        "marks"?: boolean;
        /**
          * Define a descriptive name for the slider  Allowed values: - any string  Required for accessibility and should be a unique and descriptive
         */
        "name"?: string;
        /**
          * The event "valueUpdated" is triggered when the slider value changes either by moving the thumb or entering in the text field.
         */
        "onValueUpdated"?: (event: PlmgSliderCustomEvent<any>) => void;
        /**
          * Define a range of values  Allowed values: - An array of with at least two items  Must be a list of values with at least two items with the first and last items set min and max values. Additional values set additional marks and labels. Sort the array passed to component on the client, the component will not sort the array.
         */
        "rangeValues"?: Array<number>;
        /**
          * Define step  Allowed values: - Any number  Slider's value will increase or decrease by the step value  When step is not provided the step value is set to 1% of the range
         */
        "step"?: number;
        /**
          * Define thumb label visibility  Allowed values:  - true  - false  Default: true
         */
        "thumbLabel"?: boolean;
    }
    interface PlmgSvgIcon {
        /**
          * Define icon's color.  Can be any valid CSS color value.  By default, the icon will have the same color as the parent's element.
         */
        "color"?: string | undefined;
        /**
          * Define icon by its name. Name must be one of the existing icon: https://components.ducky.eco/?path=/story/component-svgicon--all-icons  Default: NULL
         */
        "icon"?: string;
        /**
          * Define the icon's size.  Allowed values: <value><unit>  Examples: - 1em - 42px  Default: 1em
         */
        "size"?: string;
    }
    interface IntrinsicElements {
        "plmg-button": PlmgButton;
        "plmg-card": PlmgCard;
        "plmg-header": PlmgHeader;
        "plmg-page-container": PlmgPageContainer;
        "plmg-separator": PlmgSeparator;
        "plmg-sidebar": PlmgSidebar;
        "plmg-sidebar-item": PlmgSidebarItem;
        "plmg-slider": PlmgSlider;
        "plmg-svg-icon": PlmgSvgIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plmg-button": LocalJSX.PlmgButton & JSXBase.HTMLAttributes<HTMLPlmgButtonElement>;
            "plmg-card": LocalJSX.PlmgCard & JSXBase.HTMLAttributes<HTMLPlmgCardElement>;
            "plmg-header": LocalJSX.PlmgHeader & JSXBase.HTMLAttributes<HTMLPlmgHeaderElement>;
            "plmg-page-container": LocalJSX.PlmgPageContainer & JSXBase.HTMLAttributes<HTMLPlmgPageContainerElement>;
            "plmg-separator": LocalJSX.PlmgSeparator & JSXBase.HTMLAttributes<HTMLPlmgSeparatorElement>;
            "plmg-sidebar": LocalJSX.PlmgSidebar & JSXBase.HTMLAttributes<HTMLPlmgSidebarElement>;
            "plmg-sidebar-item": LocalJSX.PlmgSidebarItem & JSXBase.HTMLAttributes<HTMLPlmgSidebarItemElement>;
            "plmg-slider": LocalJSX.PlmgSlider & JSXBase.HTMLAttributes<HTMLPlmgSliderElement>;
            "plmg-svg-icon": LocalJSX.PlmgSvgIcon & JSXBase.HTMLAttributes<HTMLPlmgSvgIconElement>;
        }
    }
}
