<<<<<<< HEAD
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { ToggleSwitch } from '../src';
import readme from '../src/components/toggle-switch/README.md';
import { darkBackground } from './constants';

const ToggleSwitchWithValue = (props) => {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <ToggleSwitch
          {...props}
          onChange={onChange}
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
=======
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { ToggleSwitch } from '../src';
import readme from '../src/components/button/README.md';
import { darkBackground } from './constants';

storiesOf('ToggleSwitch', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <ToggleSwitch />

  ), {
    backgrounds: [{ ...darkBackground, default: false }],
>>>>>>> feature(wlw-13): removed some import statements
  });
