/* 
 *  This is the default license template.
 *  
 *  File: flash-alert.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
  radios,
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { Button } from 'components/button';
import { FlashAlert } from '../src';
import readme from '../src/components/flash-alert/README.md';
import { lightBackground } from './constants';
import { ThemeWrapper } from './utils';

const FlashAlertDemo = ({
  defaultToDark = false,
  defaultOption = 'success',
}) => {
  const options = {
    Success: 'success',
    Fail: 'fail',
  };

  const show = boolean('Show', false);
  const customButton = boolean('Use Custom Button', false);
  const type = radios('Alert Type', options, defaultOption);
  const duration = number('Duration', 3000);
  const message = text('Message', 'Success! Password has been changed!');
  const onClose = action('FlashAlert Closed');

  const alertButton = customButton && (
    <Button
      onClick={action('Alert Custom Button')}
      variant="tertiary"
    >
      View on Blockchain
    </Button>
  );

  return (
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <FlashAlert
          message={message}
          type={type}
          show={show}
          duration={duration}
          onClose={onClose}
          alertButton={alertButton}
        />
      }
    />
  );
};

storiesOf('Flash Alert', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Success', () => (
    <FlashAlertDemo
      defaultMessage="Success! Password has been changed!"
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Alert', () => (
    <FlashAlertDemo
      defaultOption="fail"
      defaultMessage="Alert! Incorrect password. Please try again."
      defaultToDark
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  });
