/* 
 *  This is the default license template.
 *  
 *  File: text-area.js
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
import { TextArea } from '../src';
import readme from '../src/components/text-input/README.md';
import { darkBackground, lightBackground } from './constants';

const TextAreaWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const clonedProps = { ...props };
  delete clonedProps.defaultToDark;

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <TextArea
          {...clonedProps}
          onChange={onChange}
          value={value}
        />
      }
    />
  );
};

storiesOf('TextArea', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <TextAreaWithValue
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Testing a longer block of text for the text area text input"
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('With Label', () => (
    <TextAreaWithValue
      label="Text Area Label"
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Testing a longer block of text for the text area text input"
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <TextAreaWithValue
      label="Text Area Label"
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Testing a longer block of text for the text area text input"
      defaultToDark
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
