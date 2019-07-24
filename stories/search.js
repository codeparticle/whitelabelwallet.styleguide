import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Search } from 'components/search';
import readme from 'components/search/README.md';
import { ThemeWrapper } from './utils';
import {
  darkBackground,
  lightBackground,
} from './constants';

const SearchDemo = ({ defaultToDark = false }) => {
  const placeholder = text('Placeholder', 'Search...');

  function onSubmit(value) {
    console.log(value);
  }

  return (
    <div style={{ padding: '25px 10%' }}>
      <ThemeWrapper
        defaultToDark={defaultToDark}
        content={
          <Search
            onSubmit={onSubmit}
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
