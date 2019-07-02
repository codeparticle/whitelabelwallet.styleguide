import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Search } from '../src';
import readme from '../src/components/search/README.md';

const darkBackground = { name: 'dark', value: '#686C71' };
const lightBackground = { name: 'light', value: '#F7F7F7' };

const SearchDemo = ({ theme = 'light' }) => {
  const placeholder = text('Placeholder', 'Search...');

  function onSubmit(value) {
    console.log(value);
  }
  return (
    <div style={{ padding: '25px 10%' }}>
      <Search
        onSubmit={onSubmit}
        placeholder={placeholder}
        theme={theme}
      />
    </div>
  );
};

storiesOf('Search', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <SearchDemo theme="light" />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <SearchDemo theme="dark" />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
