# Select

A standard select input.

## Usage

```jsx
import React, { useState } from 'react';
import { Select } from '@codeparticle/whitelabelwallet.styleguide';

const [selectedOption, handleChange] = useState('');
const onChange = option => handleChange(option);

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

return (
  <Select
    value={selectedOption}
    onChange={onChange}
    options={options}
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| onChange | function | '' | Handle change events on the select. |
| placeholder | string | '' | Placeholder text. |
| value | object | '' | The selected option |

**Note:** Any other properties supplied to this component will be spread to the select element.
