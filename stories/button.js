import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { Button } from 'components/button';
import readme from 'components/button/README.md';
import { darkBackground } from './constants';

storiesOf('Button', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Button onClick={action('clicked')}>
        Click me
    </Button>
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  })
  .add('Playground', () => {
    const disabled = boolean('disabled', false);
    const fullWidth = boolean('fullWidth', false);
    const children = text('children', 'Click me');

    return (
      <Button
        disabled={disabled}
        fullWidth={fullWidth}
        onClick={action('clicked')}
      >
        {children}
      </Button>
    );
  }, {
    backgrounds: [{ ...darkBackground, default: true }],
  });
