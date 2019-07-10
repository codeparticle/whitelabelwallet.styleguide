import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { Address } from '../src';
import readme from '../src/components/text-input/README.md';
import { lightBackground } from './constants';

const AddressWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <Address
          {...props}
          onChange={onChange}
          value={value}
        />
      }
    />
  );
};

storiesOf('Address', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <AddressWithValue
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Default Text..."
      buttonText="Add Address"
      onClick={action('clicked')}
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  });
