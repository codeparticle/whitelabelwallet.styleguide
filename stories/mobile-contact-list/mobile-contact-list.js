/* 
 *  This is the default license template.
 *  
 *  File: mobile-contact-list.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MobileContactList } from 'src';
import colors from 'styles/colors.scss';
import readme from 'components/mobile-contact-list/README.md';
import { ThemeWrapper } from '../utils';
import { contactListData } from './mock-data';
import {
  darkBackground,
} from '../constants';

const { tintBlue } = colors;

const MobileContactListDemo = ({ defaultToDark = false }) => (
  <div style={{ padding: '25px 10%' }}>
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <MobileContactList
          data={contactListData}
          onContactClicked={action(selected => selected)}
        />
      }
    />
  </div>
);

storiesOf('MobileContactList', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <MobileContactListDemo />
  ), {
    backgrounds: [{ name: 'light', value: tintBlue, default: true }, { ...darkBackground }],
  });
