# Icon

A standard clickable Icon.

## Usage

```jsx
import { Icon, SvgClose } from '@codeparticle/whitelabelwallet.styleguide';

<Icon
  onClick={handleClick}
  variant="primary"
  icon={<SvgClose />}
/>
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | Sets the className for the button element |
| icon | node | N/A | Sets the content of the icon component |
| onClick | func | '' | Handles when the button is clicked |
| variant | string | '' | Sets the icon class type to render |

**Note:** Any other properties supplied to this component will be spread to the root element.
