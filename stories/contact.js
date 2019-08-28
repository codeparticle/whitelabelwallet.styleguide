import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { Contact } from 'components/contact';
import readme from 'components/contact/README.md';
import { lightBackground, darkBackground } from './constants';
import { ThemeWrapper } from './utils';

const ContactDemo = ({ defaultToDark = false }) => {
  const translations = {
    copy: text('messages copy', 'Copy Address'),
    edit: text('messages edit', 'Edit Contact'),
    send: text('messages send', 'Send Funds'),
  };

  const contactName = text('contactName', 'Contact Name');

  return (
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <Contact
          address={text('address', 'gc07160a870d809ef8097ac8za5539ayzw9fs0d809e')}
          contactName={contactName}
          translations={translations}
          onSend={action('CLICKED SEND')}
          onCopy={action('CLICKED COPY')}
          onEdit={action('CLICKED EDIT')}
        />
      }
    />
  );
};

storiesOf('Contact', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <ContactDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Dark Theme', () => (
    <ContactDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }],
  });
