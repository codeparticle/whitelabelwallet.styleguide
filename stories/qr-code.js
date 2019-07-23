import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { QRCode } from 'components/qr-code';
import readme from 'components/qr-code/README.md';
import { lightBackground, darkBackground } from './constants';
import { ThemeWrapper } from './utils';

const QRCodeDemo = ({ defaultToDark = false }) => {
  const messages = {
    amount: text('Request Amount', 'Request G 1.50 to your address:'),
    addressName: text('Address Name', 'Savings - Address 2'),
    scan: text('Scan', 'Have the sender scan this code for easy transaction setup.'),
  };

  const qrString = text('QR String', 'gc07160a870d809ef8097ac8za5539ayzw9fs0d809e');
  const title = text('Title', 'QR Code Generator');

  return (
    <div style={{ padding: '10px 25%' }}>
      <ThemeWrapper
        defaultToDark={defaultToDark}
        content={
          <QRCode
            title={title}
            messages={messages}
            qrString={qrString}
          />
        }
      />
    </div>
  );
};

storiesOf('QRCode', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <QRCodeDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <QRCodeDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
