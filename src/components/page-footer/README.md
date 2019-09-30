# PageFooter

An optional page footer pattern to use in WLW

### Usage

```jsx
import { PageFooter, Button } from '@codeparticle/whitelabelwallet.styleguide';

function MyFooter() {
  return (
    <PageFooter
      message="This is a message"
      button={
        <Button variant="green" size="lg">
          Click me
        </Button>
      }
    />
  );
}
```

### Props

----

#### message (string)

Optional string to be displayed on left side of footer

#### button (node)

Optional Button to be displayed on right side of footer


### PropTypes

### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| button | `node \|\| func` | null |
| dataSelector | `string` | '' |
| message | `string` | '' |

