import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { PageFooter, Button } from '../src';
import readme from '../src/components/page-footer/README.md';
import { lightBackground, darkBackground } from './constants';
import { ThemeWrapper } from './utils';

const DemoBtn = () => (
  <Button onClick={() => {}} variant="green" size="lg">
    Confirm
  </Button>
);

const PageFooterDemo = ({
  defaultToDark,
}) => {
  const message = text('Message', 'Confirm transfer of G 1.50 to gc098za098fi1j32oiu098sa098?');
  const showButton = boolean('Show button', true);

  return (
    <ThemeWrapper
      defaultToDark={defaultToDark}
      content={
        <div className="page">
          <PageFooter
            button={showButton ? DemoBtn : null}
            message={message}
          />
          <style jsx>
            {`
              :global(.sb-show-main) {
                margin: 0 !important;
              }

              .page {
                align-items: flex-end;
                display: flex;
                height: 100vh;
                width: 100vw;
              }
            `}
          </style>
        </div>
      }
    />
  );
};

storiesOf('PageFooter', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light', () => (
    <PageFooterDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }, darkBackground],
  })
  .add('Dark', () => (
    <PageFooterDemo
      defaultToDark
    />
  ), {
    backgrounds: [{ ...darkBackground, default: true }, lightBackground],
  });
