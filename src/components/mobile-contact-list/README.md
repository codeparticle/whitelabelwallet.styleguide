# MobileContactList

A contact list for mobile views

### Usage

```jsx
import { MobileContactList } from '@codeparticle/whitelabelwallet.styleguide';

function MyContacts({ listData, onClick }) {
  return (
    <MobileContactList
      data={listdata}
      onContactClicked={onClick}
    />
  );
}
```

----
### Props

----
#### data {array}*

The data prop should pass an array of contact objects of the following structure:
```js
{
  id: 1,
  name: 'Foo',
  address: 'someMockAddress1234',
}
```

----
#### onContactClicked {func}*

A function to be called when a row is clicked. The function receives the contact's address as its only parameter

----
#### dataSelector {string}

An optional data-selector for end to end testing.

----
### PropTypes

| name | type | default |
| ---- | ---- | ------- |
| data | array | required |
| dataSelector | string | '' |
| onContactClicked | func | required |
