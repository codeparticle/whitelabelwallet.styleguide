import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { Header, svgs } from '../src';
import readme from '../src/components/header/README.md';
import { lightBackground, darkBackground } from './constants';

const HeaderWithTheme = props => (
  <ThemeWrapper
    defaultToDark={props.defaultToDark}
    content={
      <Header
        {...props}
      />
        }
  />
);

const { icons: { SvgReceive, SvgSettings } } = svgs;

storiesOf('Header', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default With Sub-title', () => (
    <HeaderWithTheme
      title="Savings (4)"
      subTitle="Manage Multi-Address Wallet"
      Icon={SvgReceive}
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme With Sub-title', () => (
    <HeaderWithTheme
      title="Savings (4)"
      subTitle="Manage Multi-Address Wallet"
      defaultToDark
      Icon={SvgReceive}
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  })
  .add('One Line Header', () => (
    <HeaderWithTheme
      title="Settings"
      Icon={SvgSettings}
    />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('One Line Header Dark', () => (
    <HeaderWithTheme
      title="Settings"
      defaultToDark
      onClose={action('clicked')}
      Icon={SvgSettings}
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
