# Wallet

A component that displays wallet funds and actions

## Usage

```jsx
import React from 'react';
import { Wallet } from '@codeparticle/whitelabelwallet.styleguide';

const messages = {
  deposit: 'Receive Funds',
  withdraw: 'Withdraw Funds',
};

const coinData = [];

const currencyBalance = 10023.45;
const coinBalance = 1023.45;
const currencySymbol = "&#36;";
const title = "Wallet Title";
const messages = {
  deposit: 'Receive Funds',
  withdraw: 'Withdraw Funds',
};

const onDepositClicked = () => {
  alert('deposit click');
};

const onWithdrawClicked = () => {
  alert('withdraw click');
};

return (
  <Wallet
    currencyBalance={currencyBalance}
    coinBalance={coinBalance}
    currencySymbol={currencySymbol}
    coinSymbol={CoinIcon}
    title={title}
    messages={messages}
    onDeposit={onDepositClicked}
    onWithdraw={onWithdrawClicked}
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| className | string | '' | Sets the class name of the wallet component |
| coinData | object | {} | The data the wallet chart should render |
| currencyBalance | number | 0 | the balance of fiat currency |
| coinBalance | number | 0 | the balance of crypto currency |
| currencySymbol | string | 2 | the symbol of fiat currency |
| coinSymbol | function or string | '' | the symbol (string or icon) of crypto currency |
| title | string | '' | Sets the title of the wallet |
| messages | object | '' | Requires deposit and withdraw properties of type string |
| onDeposit | func | '' | callback used on deposit button clicked |
| onClick | func | '' | callback used to handle click event |
| onWithdraw | func | '' | callback used on withdraw button clicked |
