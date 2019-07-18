import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { number, withKnobs } from '@storybook/addon-knobs';
import { ThemeWrapper } from './utils';
import { TransferAmount } from '../src';
import readme from '../src/components/transfer-amount/README.md';
import {
  darkBackground,
  lightBackground,
} from './constants';

const TransferAmountDemo = ({ defaultToDark = false }) => {
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

    return currencyValue;
  };

  return (
    <div style={{ padding: '25px 10%' }}>
      <ThemeWrapper
        defaultToDark={defaultToDark}
        content={
          <TransferAmount
            coinDecimalLimit={coinDecimalLimit}
            conversionRate={conversionRate}
            fiatDecimalLimit={fiatDecimalLimit}
            handleCurrencyChange={onCurrencyChange}
            handleMemoChange={onMemoChange}
            memoValue={memoValue}
            messages={messages}
          />
        }
      />
    </div>
  );
};

storiesOf('TransferAmount', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <TransferAmountDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <TransferAmountDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
