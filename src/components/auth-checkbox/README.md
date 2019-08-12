# AuthCheckbox

A simple checkbox component for the signup page

### Usage

```jsx
import { AuthCheckbox } from '@codeparticle/whitelabelwallet.styleguide';

...

const [value, setValue] = useState('');
const label = 'I accept the Terms and Conditions';

return (
  <form className="container">
    <AuthCheckbox
      label={label}
      checked={value}
      onChange={setValue}
    />
):
```

### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| label* | string |  | Sets the label text (as well as corresponding the id and htmlFor values) |
| checked* | bool | | Sets the state of the checkbox |
| onChange* | func | | func called onChange event, receives opposite of checked value |
