# LabeledCheckbox

A simple checkbox component for the signup page

### Usage

```jsx
import { LabeledCheckbox } from '@codeparticle/whitelabelwallet.styleguide';

...

const [value, setValue] = useState('');
const label = 'I accept the Terms and Conditions';

return (
  <form className="container">
    <LabeledCheckbox
      label={label}
      checked={value}
      onChange={setValue}
    />
):
```

### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| dataSelector | string | '' | Optional e2e data-selector attr |
| label* | string |  | Sets the label text (as well as corresponding the id and htmlFor values) |
| checked* | bool | | Sets the state of the checkbox |
| onChange* | func | | func called onChange event, receives opposite of checked value |
| color | string | '#FFFFF' | set the color of the text of the component |

