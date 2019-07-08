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
  });
