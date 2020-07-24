import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ReceiptContainer } from 'components/receipt-container';
import readme from 'components/receipt-container/README.md';
import { darkBackground } from './constants';

const ReceiptContainerDemo = () => {
  const textContent = text('text', 'I am some content');
  const height = text('height', '570px');
  const width = text('width', '240px');

  return (
    <div className="container">
      <ReceiptContainer
        height={height}
        width={width}
      >
        <div>
          <p>{textContent}</p>
        </div>
      </ReceiptContainer>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            height: 100%;
            padding: 5%;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

storiesOf('Receipt Container (mobile only)', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Receipt Container', () => (
    <ReceiptContainerDemo />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
