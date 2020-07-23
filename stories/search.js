/* 
 *  This is the default license template.
 *  
 *  File: search.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Search } from 'components/search';
import readme from 'components/search/README.md';
import { ThemeWrapper } from './utils';
import {
  darkBackground,
  lightBackground,
} from './constants';

const SearchDemo = ({ defaultToDark = false }) => {
  const placeholder = text('Placeholder', 'Search...');

  return (
    <div style={{ padding: '25px 10%' }}>
      <ThemeWrapper
        defaultToDark={defaultToDark}
        content={
          <Search
            onSubmit={action('submitted')}
            placeholder={placeholder}
          />
        }
      />
    </div>
  );
};

storiesOf('Search', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <SearchDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <SearchDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
