# OverflowContainer

The OverflowContainer is a simple container to render long sections of text, such as disclaimers.

### Usage

```jsx
import { OverflowContainer } from '@codeparticle/whitelabelwallet.styleguide';

function myComponent() {
  const myLongText = "Lorem ipsum ...";

  return (
    <OverflowContainer>
      <p>{myLongText}</p>
    </OverflowContainer>
  );
}
```

----
### Props

----
#### height

You can customize the OverflowContainer's height by passing a string with any valid css height value.

It defaults to '100%';

----
#### width

You can customize the OverflowContainer's width by passing a string with any valid css width value.

It defaults to '100%';

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| height | `string` | '100%' |
| width | `string` | '100%' |
