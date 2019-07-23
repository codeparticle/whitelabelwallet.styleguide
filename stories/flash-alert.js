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
  const type = radios('Alert Type', options, defaultOption);
  const duration = number('Duration', 3000);
  const message = text('Message', 'Success! Password has been changed!');
  const onClose = action('FlashAlert Closed');

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
