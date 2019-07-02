import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { TextInput } from '../src';
import readme from '../src/components/text-input/README.md';
import { darkBackground, lightBackground } from './constants';

const TextInputWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

  console.log('========\n', 'props', props, '\n========');

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <TextInput
          {...props}
          onChange={onChange}
          value={value}
        />
      }
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
      placeholder="Input Text Here..."
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  })
  .add('With Label', () => (
    <TextInputWithValue
      label="Label"
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
      defaultToDark
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  })
  .add('Playground', () => {
    const disabled = boolean('disabled', false);
    const label = text('label', 'Label');
    const placeholder = text('placeholder', 'Input Text Here...');

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
<<<<<<< HEAD
    backgrounds: [{ ...darkBackground, default: true }],
=======
    backgrounds: [{ ...darkBackground, default: false }, { ...lightBackground }],
>>>>>>> feature(wlw-23): updating components to use theming system
  });
