import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history'; /* eslint-disable-line */
import { NavBar, svgs } from '../src';
import readme from '../src/components/overlay/README.md';
import { lightBackground, darkBackground } from './constants';

const history = createMemoryHistory();

const navBarItems = [
  {
    label: 'My Wallets',
    Icon: svgs.icons.SvgWallet,
    path: '/my-wallets',
  },
  {
    label: 'Contacts',
    Icon: svgs.icons.SvgContact,
    path: '/contacts',
  },
];

storiesOf('NavBar', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs(readme))
  .add('Default', () => {
    const isOpen = boolean('isOpen', true);

    return (
      <Router history={history}>
        <NavBar
          isOpen={isOpen}
          navItems={navBarItems}
        />
      </Router>
    );
  }, {
    backgrounds: [{ ...lightBackground, default: true }, darkBackground],
  });
