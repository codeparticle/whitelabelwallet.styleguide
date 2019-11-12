# TransferAmount

A component with an amount input, and a memo textarea

**New:**
`CurrencyAmount` is now exposed as a separate component. It takes the same props as TransferAmount with the exceptions being translations, memoValue, and handleMemoChange. The CurrencyAmount is intended to be used on Mobile, where the layout for sending funds detatches the memo section from the Currency section.

## Usage

```jsx
import React, { useCallback, useState } from 'react';
import { TextInput } from '@codeparticle/whitelabelwallet.styleguide';

const translations = {
  fee: 'Transaction Fee',
  feeMessage: 'Note: Setting a higher fee...',
  header: 'Transfer Amount',
  memo: 'Memo:',
};
const [feeValue, setFeeValue] = useState('');
const [memoValue, setMemoValue] = useState('');
const [currencyValue, setCurrencyValue] = useState('');
const coinDecimalLimit = number('coinDecimalLimit', -1);
const conversionRate = 3.14;
const fiatDecimalLimit = number('fiatDecimalLimit', 2);

const onFeeChange = e => setFeeValue(e.target.value);
const onMemoChange = e => setMemoValue(e.target.value);
const onCurrencyChange = (e) => {
  setCurrencyValue(e.target.value);
};

return (
  <TransferAmount
    coinDecimalLimit={coinDecimalLimit}
    conversionRate={conversionRate}
    feeValue={feeValue}
    fiatDecimalLimit={fiatDecimalLimit}
    handleCurrencyChange={onCurrencyChange}
    handleFeeChange={onFeeChange}
    handleMemoChange={onMemoChange}
    memoValue={memoValue}
    translations={translations}
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| coinDecimalLimit | number | null | Decimal place limit for currencyInput |
| conversionRate* | number | '' | The conversion rate from a given crypto to USD |
| dataSelector | string | '' | An optional e2e data-selector attr |
| feeValue* | string | '' | Sets the value of the feeInput |
| fiatDecimalLimit | number | 2 | Decimal limit for convertedCurrency display. If a number or string provided isn't >= 0, will revert to default value |
| fiatSymbolKey | string | 'dollarSign' | fiat symbol key to represent converted currency. See currency documentation (TODO) |
| handleCurrencyChange* | function | '' | callback used on input change |
| handleFeeChange* | string | '' | callback used on input change |
| handleMemoChange* | string | '' | callback used on input change |
| memoValue* | string | '' | Sets the value of the memoInput |
| tickerSymbol | string | null | Pass a tickerSymbol such as 'BTC' to render in place of the generic coin icon |
| translations* | object | '' | Requires header, memo, fee, and feeMessage properties of type string |

