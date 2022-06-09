# plmg-tooltip



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                  | Type                                     | Default     |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------- |
| `arrowPosition` | `arrow-position` | Define tooltip arrow position. When 'none' is selected, no arrow is visible.  Allowed values:   - none   - start   - middle   - end  Default: none           | `"end" \| "middle" \| "none" \| "start"` | `'none'`    |
| `color`         | `color`          | Define tooltip's background color  Allowed values:   - neutral   - primary  Default: neutral                                                                 | `"neutral" \| "primary"`                 | `'neutral'` |
| `content`       | `content`        | Tooltip Content Text  Allowed value: any string  Required                                                                                                    | `string`                                 | `undefined` |
| `position`      | `position`       | Define tooltip's position.  Allowed values:   - left   - right   - top   - bottom  Default: top. Required.                                                   | `"bottom" \| "left" \| "right" \| "top"` | `'top'`     |
| `targetElement` | `target-element` | Reference to the target element or its ID for connected element  Required.                                                                                   | `HTMLElement \| string`                  | `undefined` |
| `tooltipId`     | `tooltip-id`     | Define an id for the tooltip. Links the target element to the tooltip.  Target element must reference this id using aria-label.  Required for accessibility. | `string`                                 | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
