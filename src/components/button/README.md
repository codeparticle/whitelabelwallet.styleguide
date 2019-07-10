# Button

A standard button.

## Usage

```jsx
import { Button } from '@codeparticle/react-style-guide';

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
| variant | string | '' | Sets the button type to render |
| size | string | '' | Sets the button size |

**Note:** Any other properties supplied to this component will be spread to the root element.
