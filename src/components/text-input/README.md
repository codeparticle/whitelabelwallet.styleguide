# TextInput

A standard text input.

## Usage

```jsx
import React, { useCallback, useState } from 'react';
import { TextInput } from '@codeparticle/whitelabelwallet.styleguide';

const [value, setValue] = useState('');
const handleChange = (e) => setValue(e.target.value);
const buttons = [
 {
    dataSelector: 'refresh-currency-btn' // a string used as a e2e data selector for the svg button
    icon: SvgRemove, // SvgIcon Component to be used in the inline button
    onClick: action('Clicked Remove'), // buttons onClick function
    type: 'icon' // type is the only required property of the button object (either 'icon' or 'text')
    tooltipText: 'Delete Address', // Text to display on Icon button tool tip
  },
 {
    dataSelector: 'add-address-btn' // a string used as a e2e data selector for the svg button
    onClick: action('Clicked Remove'), // buttons onClick function
    type: 'text' // type is the only required property of the button object (either 'icon' or 'text')
    variant: 'primary' // variant of text button to use. 
  },
]

<TextInput
  buttons={buttons}
  onChange={handleChange}
  value={value} />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| buttons | array | [] | An array of objects containing data to create inline buttons. |
| className | string | '' | Sets the class name on the root element |
| dataSelector | string | '' | An optional e2e data-selector attr |
| disabled | boolean | '' | Sets the state of the text input to disabled |
| label | string | '' | Sets the label text next to the text input |
| labelClassName | string | '' | Sets the class name of the label element |
| inputClassName | string | '' | Sets the class name of the input element|
| maxLength | number | '' | Sets the maximum length of the text input |
| onBlur | function | '' | Callback for the blur event |
| onChange | function | '' | Callback for the change event |
| onFocus | function | '' | Callback for the focus event |
| onKeyDown | function | '' | Callback for the keyDown event |
| onKeyUp | function | '' | Callback for the keyUp event |
| placeholder | string | '' | Placeholder displayed in the input element |
| type | string | '' | Type of the input element |
| value | string | '' | Value of the input element |

**Note:** Any other properties supplied to this component will be spread to the input element.
