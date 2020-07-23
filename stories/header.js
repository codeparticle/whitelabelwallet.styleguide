/* 
 *  This is the default license template.
 *  
 *  File: header.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { ThemeWrapper } from './utils';
import { Header, svgs } from '../src';
import readme from '../src/components/header/README.md';
import { lightBackground, darkBackground } from './constants';

const HeaderWithTheme = (props) => {
  const useAltTheme = boolean('useAltTheme', false);

  return (
    <ThemeWrapper
      defaultToDark={props.defaultToDark}
      content={
        <Header
          {...props}
          useAltTheme={useAltTheme}
        />
      }
    />
  );
};

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
