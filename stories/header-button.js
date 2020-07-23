/* 
 *  This is the default license template.
 *  
 *  File: header-button.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { HeaderButton, svgs } from 'src';
import readme from 'components/header-button/README.md';
import {
  lightBackground,
  darkBackground,
  authBackground,
} from './constants';

const { SvgAdd } = svgs.icons;

const HeaderButtonDemo = () => {
  const label = text('label', 'Add Button');
  const variant = text('variant', 'primary');

  return (
    <HeaderButton
      onClick={() => {}}
      Icon={SvgAdd}
      label={label}
      variant={variant}
    />
  );
};

storiesOf('HeaderButton', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('HeaderButton', () => (
    <HeaderButtonDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }, darkBackground, authBackground],
  });
