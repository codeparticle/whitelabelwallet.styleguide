# ReceiptContainer

A receipt styled container for content

### Usage

```jsx
import { ReceiptContainer } from '@codeparticle/whitelabelwallet.styleguide';

function MyReceipt({ children }) {
  return (
    <ReceiptContainer>
      {children}
    </ReceiptContainer>
  );
}

// OR

function MyReceipt() {
  return (
    <ReceiptContainer>
      <div>I am a child</div>
    </ReceiptContainer>
  )
}
```

### Props

#### children

A child to be rendered within the ReceiptContainer

----
#### height

Provides a custom height for the ReceiptContainer

----
#### width

Provides a custom width for the ReceiptContainer
----

### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| children | node | required |
| height | `string` | '100% |
| width | `string` | '100%' |
