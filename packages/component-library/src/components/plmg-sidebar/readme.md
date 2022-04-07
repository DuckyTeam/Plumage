# plmg-sidebar



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                 | Type      | Default     |
| ---------- | ----------- | ------------------------------------------- | --------- | ----------- |
| `expanded` | `expanded`  | Define if the item is expanded on startup.  | `boolean` | `false`     |
| `logoHref` | `logo-href` | Path to redirect when clicking on the logo. | `string`  | `undefined` |
| `logoSrc`  | `logo-src`  | "src" property of the logo img.             | `string`  | `undefined` |


## Events

| Event             | Description                                                          | Type               |
| ----------------- | -------------------------------------------------------------------- | ------------------ |
| `collapseSidebar` | Event dispatched when the button to collapse the sidebar is clicked. | `CustomEvent<any>` |


## Methods

### `expand() => Promise<void>`

Invoke this method to expand the sidebar.

#### Returns

Type: `Promise<void>`




## Slots

| Slot        | Description                                           |
| ----------- | ----------------------------------------------------- |
| `"default"` | Add one or more PlmgSidebarItem to this default slot. |


## Dependencies

### Depends on

- [plmg-button](../plmg-button)

### Graph
```mermaid
graph TD;
  plmg-sidebar --> plmg-button
  plmg-button --> plmg-svg-icon
  style plmg-sidebar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
