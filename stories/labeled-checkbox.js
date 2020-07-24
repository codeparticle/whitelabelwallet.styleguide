import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { LabeledCheckbox } from '../src';
import readme from '../src/components/labeled-checkbox/README.md';
import {
  authBackground,
} from './constants';

function labelElement() {
  return (
    <span>
      I accept the <a href="https://youtu.be/lXMskKTw3Bc" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
    </span>
  );
}

const LabeledCheckboxDemo = () => {
  const [value, setValue] = useState(false);
  const label = text('label', 'I agree to the Terms and Conditions');
  const usingElementAsLabel = boolean('Using element as label', false);
  const labelToUse = usingElementAsLabel ? labelElement : label;

  return (
    <form className="container">
      <LabeledCheckbox
        label={labelToUse}
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
