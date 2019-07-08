import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { Select } from '../src';
import readme from '../src/components/select/README.md';

import {
  darkBackground,
  lightBackground,
} from './constants';

const SelectWithValue = (props) => {
  const [selectedOption, handleChange] = useState('');
  const onChange = option => handleChange(option);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <Select
          {...props}
          value={selectedOption}
          onChange={onChange}
          options={options}
        />
      }
    />
  );
};

storiesOf('Select', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <SelectWithValue
      theme="light"
      placeholder="Select..."
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <SelectWithValue
      defaultToDark
      placeholder="Select..."
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
