import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { ToggleSwitch } from '../src';
import readme from '../src/components/toggle-switch/README.md';
import { darkBackground } from './constants';

const ToggleSwitchWithValue = (props) => {
  const [value, setValue] = useState(false);
  const onClick = () => {
    setValue(!value);
  };

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <ToggleSwitch
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
    backgrounds: [{ ...darkBackground, default: false }],
  })
  .add('Dark Theme', () => (
    <ToggleSwitchWithValue defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
