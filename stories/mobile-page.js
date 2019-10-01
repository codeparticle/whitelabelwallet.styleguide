import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import {
  Contact,
  IconButton,
  MobilePage,
  svgs,
} from 'src';
import readme from 'components/mobile-page/README.md';

const {
  SvgIconContact,
  SvgMagnifyingGlass,
  SvgMenu,
} = svgs.icons;

const IconWrapper = Icon => ({ iconProps }) => <Icon {...iconProps} />;
const SearchButton = props => <IconButton onClick={action('clicked')} icon={<SvgMagnifyingGlass {...props} />} />;
const MenuButton = props => <IconButton onClick={action('clicked')} icon={<SvgMenu {...props} />} />;

function ContactMap() {
  const empty = () => {};
  const contacts = [];
  const contactProps = {
    contactName: 'Jamie Smith',
    address: 'gc07160a870d809ef8097ac8za5539ayzw9fs0d809e',
    onEdit: empty,
    onSend: empty,
  };

  for (let i = 0; i < 15; i += 1) {
    contacts.push(contactProps);
  }

  return (
    <>
      {contacts.map((contact, index) => (
        <div className="contact-container">
          <Contact {...contact} key={`contact-${index}`} />
        </div>
      ))}
      <style jsx>
        {`
          .contact-container {
            margin: 1px;
          }
        `}
      </style>
    </>
  );
}

function MobilePageDemo() {
  const title = text('title', 'Contacts');

  return (
    <>
      <MobilePage
        Icon={IconWrapper(SvgIconContact)}
        NavigationButton={IconWrapper(MenuButton)}
        PrimaryAction={IconWrapper(SearchButton)}
        title={title}
        onAddClicked={action('clicked')}
      >
        <ContactMap />
      </MobilePage>
      <style jsx>
        {`
          :global(.sb-show-main) {
            margin: 0 !important;
            padding: 0 12px;
          }
        `}
      </style>
    </>
  );
}

storiesOf('MobilePage', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <MobilePageDemo />
  ));
