import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
<<<<<<< HEAD
import { text, withKnobs } from '@storybook/addon-knobs';
import { ThemeWrapper } from './utils';
import { Search } from '../src';
import readme from '../src/components/search/README.md';
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
=======
import { Search } from '../src';
import readme from '../src/components/search/README.md';

const darkBackground = { name: 'dark', value: '#686C71' };
const lightBackground = { name: 'light', value: '#F7F7F7' };

const SearchDemo = ({ theme = 'light' }) => {
  function onSubmit(value) {
    console.log(value);
  }
  return (
    <div style={{ padding: '25px 10%' }}>
      <Search
        onSubmit={onSubmit}
        theme={theme}
>>>>>>> feature(wlw-6): adding search component
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
