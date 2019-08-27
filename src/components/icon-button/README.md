# IconButton

A standard clickable Icon.

## Usage

```jsx
import { IconButton, SvgClose } from '@codeparticle/whitelabelwallet.styleguide';

<IconButton
  onClick={handleClick}
  variant="primary"
  icon={<SvgClose />}
/>
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | Sets the className for the button element |
| dataSelector | string | '' | Optional e2e data-selector attribute |
| icon | node | N/A | Sets the content of the icon component |
| onClick | func | '' | Handles when the button is clicked |
| variant | string | '' | Sets the icon class type to render |

**Note:** Any other properties supplied to this component will be spread to the root element.
