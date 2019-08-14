import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import { AuthCheckbox } from '../src';
import readme from '../src/components/auth-checkbox/README.md';
import {
  authBackground,
} from './constants';

const AuthCheckboxDemo = () => {
  const [value, setValue] = useState(false);
  const label = text('label', 'I agree to the Terms and Conditions');

  return (
    <form className="container">
      <AuthCheckbox
        label={label}
        checked={value}
        onChange={setValue}
      />
      <style jsx>
        {`
          .container {
            margin: 10% auto;
            width: 262px;
          }
        `}
      </style>
    </form>
  );
};

storiesOf('Auth Checkbox', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <AuthCheckboxDemo />
  ), {
    backgrounds: [{ ...authBackground, default: true }],
  });
