# QRCode

A component that creates a QR Code based on the passed in address. Uses the [qrcode](https://github.com/soldair/node-qrcode) library.

## Usage

```jsx
import React from 'react';
import { QRCode } from '@codeparticle/whitelabelwallet.styleguide';

const translations = {
  amount: 'Request G 1.50 to your address:',
  addressName: 'Savings - Address 2',
  scan: 'Have the sender scan this code for easy transaction setup.',
};
const qrString = 'gc07160a870d809ef8097ac8za5539ayzw9fs0d809e';
const title = text('Title', 'QR Code Generator');

return (
  <QRCode
    title={title}
    translations={translations}
    qrString={qrString}
  />
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| qrString | string | '' | The string used to create the QR code |
| className | string | '' | Sets the class name of the wallet component |
| dataSelector | string | '' | An optional e2e data-selector attr |
| translations | object | '' | amount, addressName, and scan translations to be displayed in component |
| title | string | '' | Sets the title of the QR Code Component |
