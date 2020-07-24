import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MobileWalletList } from 'src';
import colors from 'styles/colors.scss';
import readme from 'components/mobile-wallet-list/README.md';
import { ThemeWrapper } from '../utils';
import { walletListData } from './mock-data';
import {
  darkBackground,
} from '../constants';

const { tintBlue } = colors;

function subtitleFormatter(data) {
  return `${data.length} Addresses`;
}

const MobileWalletListDemo = ({ defaultToDark = false }) => (
  <div style={{ padding: '25px 10%' }}>
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <MobileWalletList
          data={walletListData}
          onAddressClicked={action(selected => selected)}
          subtitleFormatter={subtitleFormatter}
        />
      }
    />
  </div>
);

storiesOf('MobileWalletList', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <MobileWalletListDemo />
  ), {
    backgrounds: [{ name: 'light', value: tintBlue, default: true }, { ...darkBackground }],
  });
