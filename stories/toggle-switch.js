import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import readme from 'components/toggle-switch/README.md';
import { ThemeWrapper } from './utils';
import { ToggleSwitch } from '../src';
import { darkBackground, lightBackground } from './constants';

const ToggleSwitchWithValue = (props) => {
  const [value, setValue] = useState('');
  const onClick = () => {
    setValue(!value);
  };

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <ToggleSwitch
          {...props}
          onClick={onClick}
          value={value}
        />
      }
    />
  );
};

storiesOf('ToggleSwitch', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ToggleSwitchWithValue />
  ), {
    backgrounds: [{ ...darkBackground, default: false }, { ...lightBackground, default: true }],
  });
