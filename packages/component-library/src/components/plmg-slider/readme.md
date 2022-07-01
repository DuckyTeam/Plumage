# plmg-slider

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                                                                                                  | Type       | Default     |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| `defaultValue` | `default-value` | Define the default value  Sets the starting value for the slider  Allowed values: - any number  If default value is outside of min and max range or undefined default value is set to the min value                                                                                                                          | `number`   | `undefined` |
| `marks`        | `marks`         |  Define mark visibility  Default: true                                                                                                                                                                                                                                                                                       | `boolean`  | `true`      |
| `name`         | `name`          | Define a descriptive name for the slider  Allowed values: - any string  Required for accessibility and should be a unique and descriptive                                                                                                                                                                                    | `string`   | `undefined` |
| `rangeValues`  | --              | Define a range of values  Allowed values: - An array of with at least two items  Must be a list of values with at least two items with the first and last items set min and max values additional values set additional marks and labels sort the string passed to component on the client component will not sort the array | `number[]` | `undefined` |
| `step`         | `step`          | Define step  Allowed values: - Any number  Slider's value will increase or decrease by stepValue  When step is not provided the stepValue is set to 1% of the range                                                                                                                                                          | `number`   | `undefined` |
| `thumbLabel`   | `thumb-label`   | Define thumb label visibility  Allowed values:  - true  - false  Default: true                                                                                                                                                                                                                                               | `boolean`  | `true`      |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `valueUpdated` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
