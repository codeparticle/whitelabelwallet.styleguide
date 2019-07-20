# QRCode

A component that creates a QR Code based on the passed in address. Uses the [qrcode](https://github.com/soldair/node-qrcode) library.

## Usage

```jsx
import React from 'react';
import { QRCode } from '@codeparticle/whitelabelwallet.styleguide';

const messages = {
  amount: 'Request G 1.50 to your address:',
  addressName: 'Savings - Address 2',
  scan: 'Have the sender scan this code for easy transaction setup.',
};
const address = 'gc07160a870d809ef8097ac8za5539ayzw9fs0d809e';
const title = text('Title', 'QR Code Generator');

return (
  <QRCode
    title={title}
    messages={messages}
    address={address}
  />
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| address | string | '' | The address used to create the QR code |
| className | string | '' | Sets the class name of the wallet component |
| messages | object | '' | amount, addressName, and scan messages to be displayed in component |
| title | string | '' | Sets the title of the QR Code Component |
