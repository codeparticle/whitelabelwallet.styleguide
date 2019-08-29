# Address

Add Address component used to capture users address.

## Usage

```jsx
import { Address } from '@codeparticle/whitelabelwallet.styleguide';

<Address
    onBlur={onBlur}
    onFocus={onFocus}
    placeholder="Default Text..."
    buttonText="Add Address"
    onClick={onClick} />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| buttonText | '' | 'Add Address' | Default propmt for add button |
| className | string | '' | Sets the class name on the root element |
| dataSelector | string | '' | Optional e2e data-selector attr |
| disabled | boolean | '' | Sets the state of the text input to disabled |
| inputClassName | string | '' | Sets the class name of the input element|
| maxLength | number | '' | Sets the maximum length of the text input |
| onBlur | function | '' | Callback for the blur event |
| onChange | function | '' | Callback for the change event |
| onClick | func | null | Callback add address click |
| onKeyDown | function | '' | Callback for the keyDown event |
| onKeyUp | function | '' | Callback for the keyUp event |
| placeholder | string | '' | Placeholder displayed in the input element |
| value | '' | '' | address entered in the input field |
