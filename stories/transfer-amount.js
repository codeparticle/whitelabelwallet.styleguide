import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { number, withKnobs } from '@storybook/addon-knobs';
import { ThemeWrapper } from './utils';
import { CurrencyAmount, TransferAmount } from '../src';
import readme from '../src/components/transfer-amount/README.md';
import {
  darkBackground,
  lightBackground,
} from './constants';

const ComponentDemo = ({
  Component,
  defaultToDark = false,
}) => {
  const translations = {
    fee: 'Transaction Fee*',
    feeMessage: `
      *A higher fee will give a higher priority so that it is confirmed (spendable sooner). 
      The lower it is, the longer it takes. 
      If the fee is too low, the transaction will fail due to no confirmations.
    `,
    header: 'Transfer Amount',
    memo: 'Memo:',
  };
  const currencyValueKnob = number('currencyValue', 0);
  const [memoValue, setMemoValue] = useState('');
  const [feeValue, setFeeValue] = useState(7500);
  const [currencyValue, setCurrencyValue] = useState('');
  const coinDecimalLimit = number('coinDecimalLimit', -1);
  const conversionRate = 3.14;
  const fiatDecimalLimit = number('fiatDecimalLimit', 2);

  useEffect(() => {
    if (currencyValueKnob) {
      setCurrencyValue(currencyValueKnob);
    }
  }, [currencyValueKnob]);

  const onFeeChange = e => setFeeValue(e.target.value);
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
          <Component
            coinDecimalLimit={coinDecimalLimit}
            conversionRate={conversionRate}
            currencyValue={currencyValue}
            feeValue={feeValue}
            fiatDecimalLimit={fiatDecimalLimit}
            handleCurrencyChange={onCurrencyChange}
            handleFeeChange={onFeeChange}
            handleMemoChange={onMemoChange}
            memoValue={memoValue}
            translations={translations}
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
    <ComponentDemo Component={TransferAmount} />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <ComponentDemo Component={TransferAmount} defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  })
  .add('CurrencyAmount', () => (
    <ComponentDemo Component={CurrencyAmount} />
  ), {
    backgrounds: [{ ...lightBackground, default: true }, darkBackground],
  });
