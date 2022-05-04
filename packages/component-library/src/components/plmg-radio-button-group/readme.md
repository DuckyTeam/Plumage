# plmg-radio-button-group



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                   | Type                  | Default     |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `errorMessage` | `error-message` | Define error message for radio group  Will render one error message for the radio button group, affects styling of all radio buttons in group | `string`              | `undefined` |
| `label`        | `label`         | Define form's label'                                                                                                                          | `string`              | `undefined` |
| `name`         | `name`          | Define form's name'                                                                                                                           | `string`              | `undefined` |
| `required`     | `required`      | Define radio group's required status  Allowed values:   - true   - false  Default: false                                                      | `boolean`             | `false`     |
| `size`         | `size`          | Define size of all radio button's in radio button group.  Allowed values:   - medium   - large  Default: medium                               | `"large" \| "medium"` | `'medium'`  |
| `values`       | `values`        | Define each radio button's value                                                                                                              | `string \| string[]`  | `undefined` |


## Dependencies

### Depends on

- [plmg-radio-button](../plmg-radio-button)
- [plmg-error-message](../plmg-error-message)

### Graph
```mermaid
graph TD;
  plmg-radio-button-group --> plmg-radio-button
  plmg-radio-button-group --> plmg-error-message
  plmg-error-message --> plmg-svg-icon
  style plmg-radio-button-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
