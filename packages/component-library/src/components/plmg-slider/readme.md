# plmg-slider

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                                                                                                                 | Type      | Default     |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `defaultValue` | `default-value` | Define the default value  Sets the starting value for the slider  Allowed values: - any number  If defaultValue is outside of min and max range or undefined defaultValue is set to the min value                                                                                                                                           | `number`  | `undefined` |
| `marks`        | `marks`         |  Define mark visibility  Default: true                                                                                                                                                                                                                                                                                                      | `boolean` | `true`      |
| `name`         | `name`          | Define a descriptive name for the slider  Allowed values: - any string  Required for accessibility and should be a unique and descriptive  Used to generate internal ids linking label and inputs                                                                                                                                           | `string`  | `undefined` |
| `rangeValues`  | `range-values`  | Define a range of values  Allowed values: - A comma separated list of numbers  Must be a comma seperated list of numbers with at least two items The first and last items set min and max values Additional values set additional marks and labels Sort the array passed to component on the client, the component will not sort the array. | `string`  | `undefined` |
| `step`         | `step`          | Define step  Allowed values: - Any number  Slider's value will increase or decrease by the step value  When step is not provided the step value is set to 1% of the range                                                                                                                                                                   | `number`  | `undefined` |
| `thumbLabel`   | `thumb-label`   | Define thumb label visibility  Allowed values:  - true  - false  Default: true                                                                                                                                                                                                                                                              | `boolean` | `true`      |


## Events

| Event          | Description                                                                                                                   | Type               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `valueUpdated` | The event "valueUpdated" is triggered when the slider value changes either by moving the thumb or entering in the text field. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
