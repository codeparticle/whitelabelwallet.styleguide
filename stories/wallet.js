import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text,
  object,
  number,
  withKnobs,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { Wallet } from '../src';
import readme from '../src/components/wallet/README.md';
import { lightBackground, darkBackground } from './constants';
import { ThemeWrapper } from './utils';
import { icons } from '../src/svgs';

const { SvgCog } = icons;

const WalletDemo = ({ defaultToDark = false }) => {
  const messages = {
    deposit: text('messages deposit', 'Receive Funds'),
    withdraw: text('messages withdraw', 'Withdraw Funds'),
  };

  const defaultData = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const coinData = object('coinData', defaultData);
  const title = text('title', 'Wallet Title');
  const coinBalance = number('coinBalance', 1023.45);
  const currencyBalance = number('currencyBalance', 10023.45);

  return (
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <Wallet
          coinData={coinData}
          currencyBalance={currencyBalance}
          coinBalance={coinBalance}
          coinSymbol={SvgCog}
          currencySymbol="&#36;"
          title={title}
          messages={messages}
          onDeposit={action('CLICKED DEPOSIT')}
          onWithdraw={action('CLICKED WITHDRAW')}
        />
      }
    />
  );
};

storiesOf('Wallet', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <WalletDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <WalletDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
