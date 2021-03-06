# TextArea

A standard textarea.

## Usage

```jsx
import React, { useState } from 'react';
import { TextArea } from '@codeparticle/whitelabelwallet.styleguide';

const [value, setValue] = useState('');
const handleChange = (e) => setValue(e.target.value);

<TextArea
  onChange={handleChange}
  value={value} />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | Sets the class name on the root element |
| dataSelector | string | '' | An optional e2e data-selector attr |
| disabled | boolean | '' | Sets the state of the text input to disabled |
| label | string | '' | Sets the label text next to the text input |
| labelClassName | string | '' | Sets the class name of the label element |
| inputClassName | string | '' | Sets the class name of the input element|
| maxLength | number | '' | Sets the maximum lengt of the text input |
| onBlur | function | '' | Callback for the blur event |
| onChange | function | '' | Callback for the change event |
| onFocus | function | '' | Callback for the focus event |
| onKeyDown | function | '' | Callback for the keyDown event |
| onKeyUp | function | '' | Callback for the keyUp event |
| placeholder | string | '' | Placeholder displayed in the input element |
| type | string | '' | Type of the input element |
| value | string | '' | Value of the input element |

**Note:** Any other properties supplied to this component will be spread to the input element.