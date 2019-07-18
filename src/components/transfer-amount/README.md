# TransferAmount

A component with an amount input, and a memo textarea

## Usage

```jsx
import React, { useCallback, useState } from 'react';
import { TextInput } from '@codeparticle/whitelabelwallet.styleguide';

const messages = {
  header: 'Transfer Amount',
  memo: 'Memo:',
};
const [memoValue, setMemoValue] = useState('');
const [currencyValue, setCurrencyValue] = useState('');
const coinDecimalLimit = number('coinDecimalLimit', -1);
const conversionRate = 3.14;
const fiatDecimalLimit = number('fiatDecimalLimit', 2);

const onMemoChange = e => setMemoValue(e.target.value);
const onCurrencyChange = (e) => {
  setCurrencyValue(e.target.value);
};

return (
  <TransferAmount
    coinDecimalLimit={coinDecimalLimit}
    conversionRate={conversionRate}
    fiatDecimalLimit={fiatDecimalLimit}
    handleCurrencyChange={onCurrencyChange}
    handleMemoChange={onMemoChange}
    memoValue={memoValue}
    messages={messages}
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| coinDecimalLimit | number | null | Decimal place limit for currencyInput |
| conversionRate* | number | '' | The conversion rate from a given crypto to USD |
| fiatDecimalLimit | number | 2 | Decimal limit for convertedCurrency display. If a number or string provided isn't >= 0, will revert to default value |
| fiatSymbolKey | string | 'dollarSign' | fiat symbol key to represent converted currency. See currency documentation (TODO) |
| handleCurrencyChange* | function | '' | callback used on input change |
| handleMemoChange* | string | '' | Sets the class name of the label element, receives the event as parameter |
| memoValue* | string | '' | Sets the value of the memoInput |
| messages* | object | '' | Requires header and memo properties of type string |
| tickerSymbol | string | null | Pass a tickerSymbol such as 'BTC' to render in place of the generic coin icon |

