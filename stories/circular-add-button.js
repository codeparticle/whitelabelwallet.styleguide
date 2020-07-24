import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { CircularAddButton } from 'components/circular-add-button';
import readme from 'components/circular-add-button/README.md';
import { withReadme } from 'storybook-readme';

import { lightBackground } from './constants';

storiesOf('CircularAddButton', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('CircularAddButton', () => (
    <CircularAddButton onClick={action('clicked')} />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  });
