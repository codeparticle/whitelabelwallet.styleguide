/* 
 *  This is the default license template.
 *  
 *  File: address.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { Address } from '../src';
import readme from '../src/components/address/README.md';
import { darkBackground, lightBackground } from './constants';

const AddressWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const clonedProps = { ...props };
  delete clonedProps.defaultToDark;

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <Address
          {...clonedProps}
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
  })
  .add('Dark Theme', () => (
    <AddressWithValue
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Default Text..."
      buttonText="Add Address"
      onClick={action('clicked')}
      defaultToDark
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
