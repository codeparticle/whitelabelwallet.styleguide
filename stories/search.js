import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
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
      />
    </div>
  );
};

storiesOf('Search', module)
  .addDecorator(withReadme(readme))
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
