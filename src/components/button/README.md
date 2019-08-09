# Button

A standard button.

## Usage

```jsx
import { Button } from '@codeparticle/whitelabelwallet.styleguide';

<Button
  onClick={handleClick}
  variant='primary'
  size='lg'
>
  Click Me
</Button>
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| alertButton | node | N/A | Optional custom button to be passed to the alert |
| className | string | '' | Sets the className for the button element |
| onClick | func | '' | Handles when the button is clicked |
| variant | string | '' | Sets the button type to render |
| size | string | '' | Sets the button size |

### Sizes

- 'sm'
- 'lg'
- 'full'

If no size is passed, uses the `default` size. 

### Variants

- 'primary'
- 'secondary'
- 'tertiary'
- 'slate-clear'
- 'green'
- 'slate'
- 'alert'
- 'teal'

**Note:** Any other properties supplied to this component will be spread to the root element.
