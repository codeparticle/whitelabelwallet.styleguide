import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { TextInput } from '../src';
import readme from '../src/components/text-input/README.md';
import { darkBackground, lightBackground } from './constants';

const TextInputWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

  console.log('========\n', 'props', props, '\n========');

  return (
    <TextInput
      {...props}
      onChange={onChange}
      value={value}
    />
  );
};

storiesOf('TextInput', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <TextInputWithValue
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Input Text"
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('With Label', () => (
    <TextInputWithValue
      label="Input Label"
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Input Text"
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <TextInputWithValue
      label="Input Label"
      onBlur={action('blur')}
      onFocus={action('focus')}
      placeholder="Input Text"
      isDarkMode
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  })
  .add('Playground', () => {
    const disabled = boolean('disabled', false);
    const label = text('label', 'Label');
    const placeholder = text('placeholder', 'Input Text');

    return (
      <TextInputWithValue
        disabled={disabled}
        label={label}
        onBlur={action('blur')}
        onFocus={action('focus')}
        placeholder={placeholder}
      />
    );
  }, {
    backgrounds: [{ ...darkBackground, default: false }],
  });
