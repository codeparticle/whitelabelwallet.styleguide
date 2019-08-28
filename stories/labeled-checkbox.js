import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import { LabeledCheckbox } from '../src';
import readme from '../src/components/labeled-checkbox/README.md';
import {
  authBackground,
} from './constants';

const LabeledCheckboxDemo = () => {
  const [value, setValue] = useState(false);
  const label = text('label', 'I agree to the Terms and Conditions');

  return (
    <form className="container">
      <LabeledCheckbox
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

storiesOf('Labeled Checkbox', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <LabeledCheckboxDemo />
  ), {
    backgrounds: [{ ...authBackground, default: true }],
  });
