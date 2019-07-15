import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { TextInput } from 'components/text-input';
import readme from 'components/text-input/README.md';

const darkBackground = { name: 'dark', value: '#686C71' };

const TextInputWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

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
      placeholder="Input Text Here..."
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
    backgrounds: [{ ...darkBackground, default: true }],
  });
