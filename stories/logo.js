import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Logo } from 'components/logo';
import readme from 'components/logo/README.md';
import colors from 'styles/colors.scss';
import {
  lightBackground,
} from './constants';

const {
  gradientTeal: background,
} = colors;

const LogoDemo = () => {
  const hideText = boolean('hideText', false);

  return (
    <div style={{ background, padding: '10%' }}>
      <Logo
        hideText={hideText}
      />
    </div>
  );
};

storiesOf('Logo', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Logo', () => (
    <LogoDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  });
