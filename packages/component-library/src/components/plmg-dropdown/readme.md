# plmg-dropdown



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                               | Type                | Default     |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| `align`            | `align`             | Define the alignment of the dropdown menu.  Allowed values:   - left   - right  Default: left                                                                             | `"left" \| "right"` | `'left'`    |
| `borderRadius`     | `border-radius`     | Set the border radius of trigger element.  Allow values:  - any valid css border radius value  Default: none                                                              | `string`            | `undefined` |
| `disableListeners` | `disable-listeners` | Disable document scoped event listeners.  Does not disable the click event on the trigger element or keyboard events.  Allowed values:   - true   - false  Default: false | `boolean`           | `false`     |


## Methods

### `toggleVisible() => Promise<void>`

Invoke this method to manually toggle the dropdown's visibility.

Use this method when the document scoped event listeners are disabled.

#### Returns

Type: `Promise<void>`




## Slots

| Slot        | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| `"menu"`    | Slot for <plmg-dropdown-item> elements. Requires at least one <plmg-dropdown-item> element. |
| `"trigger"` | Slot for the triggering element.                                                            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
