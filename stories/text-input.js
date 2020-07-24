import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { TextInput } from 'components/text-input';
import readme from 'components/text-input/README.md';
import { svgs } from '../src';
import { ThemeWrapper } from './utils';
import { authBackground, darkBackground, lightBackground } from './constants';

const { SvgCurrencyConversionSymbol, SvgRemove } = svgs.icons;

const iconButtons = [
  {
    icon: SvgCurrencyConversionSymbol,
    onClick: action('Clicked Currency'),
    type: 'icon',
    tooltipText: 'Refresh Address',
  },
  {
    icon: SvgRemove,
    onClick: action('Clicked Remove'),
    type: 'icon',
    tooltipText: 'Delete Address',
  },
];

const textButtons = [
  {
    onClick: action('Clicked Testing'),
    text: 'Testing',
    type: 'text',
  },
];

const TextInputWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const clonedProps = { ...props };
  delete clonedProps.defaultToDark;

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <TextInput
          {...clonedProps}
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
      placeholder="Input Text"
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('With Label', () => (
    <TextInputWithValue
      buttons={iconButtons}
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
      buttons={textButtons}
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
    const hasError = boolean('hasError', false);
    const useAltTheme = boolean('useAltTheme', false);
    const label = text('label', 'Label');
    const placeholder = text('placeholder', 'Input Text');

    return (
      <TextInputWithValue
        disabled={disabled}
        hasError={hasError}
        label={label}
        onBlur={action('blur')}
        onFocus={action('focus')}
        placeholder={placeholder}
        useAltTheme={useAltTheme}
      />
    );
  }, {
    backgrounds: [{ ...darkBackground, default: false }, lightBackground, authBackground],
  });
