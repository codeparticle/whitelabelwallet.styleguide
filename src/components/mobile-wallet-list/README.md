# MobileWalletList

A reusable wallet list for mobile pages such as send funds and receive funds

### Usage

```jsx
import { MobileWalletList } from '@codeparticle/whitelabelwallet.styleguide';

function MyList({ listData, onClick }) {
  function subtitleFormatter(addresses) {
    return `${addresses.length} Addresses`;
  }

  return (
    <MobileWalletList
      data={listData}
      dataSelector="my-list"
      onAddressClicked={onClick}
      subtitleFormatter={subtitleFormatter}
    />
  );
}
```

### Props

----
#### data {array}*

The data prop is a required array of wallet objects of the minimum following structure:

```js
{
  id: '1',
  name: 'My Wallet',
  addresses: [
    // Each address should also follow structure:
    {
      name: 'Address 1',
      address: 'mockaddressstring09812',
    },
  ],
}
```

----
#### onAddressClicked {func}*

onAddressClicked is called when a row with a single address is clicked. It accepts a single param - the address string

----
#### subtitleFormatter {func}*

formats the subtitle for each row. Only called when a row's addresses array length is greater or less than 1. Takes a single param - the addresses array

----
#### dataSelector {string}

optional dataSelector for e2e testing

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| data | array | required |
| dataSelector | string | '' |
| onAddressClicked | func | required |
| subtitleFormatter | func | required |