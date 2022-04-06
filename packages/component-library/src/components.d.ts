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
    interface PlmgContent {
    }
    interface PlmgHeader {
    }
    interface PlmgPageContainer {
    }
    interface PlmgSidebar {
        /**
          * Invoke this method to expand the sidebar.
         */
        "expand": () => Promise<void>;
        /**
          * Define if the item is expanded. Only valid when this item has children.
         */
        "expanded": boolean;
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
declare global {
    interface HTMLPlmgButtonElement extends Components.PlmgButton, HTMLStencilElement {
    }
    var HTMLPlmgButtonElement: {
        prototype: HTMLPlmgButtonElement;
        new (): HTMLPlmgButtonElement;
    };
    interface HTMLPlmgContentElement extends Components.PlmgContent, HTMLStencilElement {
    }
    var HTMLPlmgContentElement: {
        prototype: HTMLPlmgContentElement;
        new (): HTMLPlmgContentElement;
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
    interface HTMLPlmgSvgIconElement extends Components.PlmgSvgIcon, HTMLStencilElement {
    }
    var HTMLPlmgSvgIconElement: {
        prototype: HTMLPlmgSvgIconElement;
        new (): HTMLPlmgSvgIconElement;
    };
    interface HTMLElementTagNameMap {
        "plmg-button": HTMLPlmgButtonElement;
        "plmg-content": HTMLPlmgContentElement;
        "plmg-header": HTMLPlmgHeaderElement;
        "plmg-page-container": HTMLPlmgPageContainerElement;
        "plmg-sidebar": HTMLPlmgSidebarElement;
        "plmg-sidebar-item": HTMLPlmgSidebarItemElement;
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
    interface PlmgContent {
    }
    interface PlmgHeader {
        /**
          * Event dispatched when the button to expand the sidebar is clicked.
         */
        "onExpandSidebar"?: (event: CustomEvent<any>) => void;
    }
    interface PlmgPageContainer {
    }
    interface PlmgSidebar {
        /**
          * Define if the item is expanded. Only valid when this item has children.
         */
        "expanded"?: boolean;
        /**
          * Event dispatched when the button to collapse the sidebar is clicked.
         */
        "onCollapseSidebar"?: (event: CustomEvent<any>) => void;
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
        "plmg-content": PlmgContent;
        "plmg-header": PlmgHeader;
        "plmg-page-container": PlmgPageContainer;
        "plmg-sidebar": PlmgSidebar;
        "plmg-sidebar-item": PlmgSidebarItem;
        "plmg-svg-icon": PlmgSvgIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plmg-button": LocalJSX.PlmgButton & JSXBase.HTMLAttributes<HTMLPlmgButtonElement>;
            "plmg-content": LocalJSX.PlmgContent & JSXBase.HTMLAttributes<HTMLPlmgContentElement>;
            "plmg-header": LocalJSX.PlmgHeader & JSXBase.HTMLAttributes<HTMLPlmgHeaderElement>;
            "plmg-page-container": LocalJSX.PlmgPageContainer & JSXBase.HTMLAttributes<HTMLPlmgPageContainerElement>;
            "plmg-sidebar": LocalJSX.PlmgSidebar & JSXBase.HTMLAttributes<HTMLPlmgSidebarElement>;
            "plmg-sidebar-item": LocalJSX.PlmgSidebarItem & JSXBase.HTMLAttributes<HTMLPlmgSidebarItemElement>;
            "plmg-svg-icon": LocalJSX.PlmgSvgIcon & JSXBase.HTMLAttributes<HTMLPlmgSvgIconElement>;
        }
    }
}
