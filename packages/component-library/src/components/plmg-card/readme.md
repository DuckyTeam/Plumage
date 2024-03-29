# plmg-card



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                                                                                                                                                                                                                               | Type      | Default     |
| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `bottomActionText` | `bottom-action-text` | Define card's bottom button text.  If a text is provided, the button will be displayed. By default, when no text is provided, the button is hidden.                                                                                                                                                                                                       | `string`  | `undefined` |
| `fullWidth`        | `full-width`         | Define card's sizing behaviour.  To stretch to its content, or fill the available space its in. If `fullWidth` is provided, the card will take the full width of it's container. If `fullWidth` is not specified, the card will automatically size itself according to its content, plus any padding.  Allowed values:   - true   - false  Default: false | `boolean` | `false`     |
| `headerText`       | `header-text`        | Define card's header text.  If a headerText or an topActionIcon is provided, the heading will be displayed. By default, when no headerText nor topActionIcon is provided, the heading is hidden.                                                                                                                                                          | `string`  | `undefined` |
| `topActionIcon`    | `top-action-icon`    | Define card's header icon, used as a top action for the card.  If a headerText or an topActionIcon is provided, the heading will be displayed with the icon button on the right. By default, when no headerText nor topActionIcon is provided, the heading is hidden.                                                                                     | `string`  | `undefined` |
| `topActionLabel`   | `top-action-label`   | Define top action's label, used to enable assistive technology for the top action button.  You must provide a topActionLabel when providing a topActionIcon.                                                                                                                                                                                              | `string`  | `undefined` |


## Events

| Event                 | Description                                                                            | Type                      |
| --------------------- | -------------------------------------------------------------------------------------- | ------------------------- |
| `bottomActionClicked` | The event "bottomActionClicked" is triggered when the bottom action button is clicked. | `CustomEvent<MouseEvent>` |
| `topActionClicked`    | The event "topActionClicked" is triggered when the top action button is clicked.       | `CustomEvent<MouseEvent>` |


## Slots

| Slot       | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| `"slot-1"` | First slot for custom content.                                                 |
| `"slot-2"` | Second slot for custom content, separated from the first slot by a margin-top. |


## Dependencies

### Depends on

- [plmg-button](../plmg-button)

### Graph
```mermaid
graph TD;
  plmg-card --> plmg-button
  plmg-button --> plmg-svg-icon
  style plmg-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
