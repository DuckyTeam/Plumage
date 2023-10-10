# plmg-page-container



<!-- Auto Generated Below -->


## Overview

Container for the entire web page. Wraps everything.
If you use PlmgSidebar and/or PlmgHeader, you must use this wrapper.
Place a PlmgSidebar component on the "sidebar" slot.
Place a PlmgHeader component on the "header" slot.

## Properties

| Property          | Attribute          | Description                                   | Type      | Default |
| ----------------- | ------------------ | --------------------------------------------- | --------- | ------- |
| `sidebarExpanded` | `sidebar-expanded` | Define if the sidebar is expanded on startup. | `boolean` | `false` |


## Slots

| Slot        | Description                                   |
| ----------- | --------------------------------------------- |
| `"content"` | Main content of the web page.                 |
| `"header"`  | Top navigation bar, a PlmgHeader component.   |
| `"sidebar"` | Side navigation bar, a PlmgSidebar component. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
