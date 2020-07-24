import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import {
  Button,
  IconButton,
  PageHeader,
  svgs,
} from 'src';
import readme from 'components/page-header/README.md';
import { ThemeWrapper } from './utils';
import {
  lightBackground,
  darkBackground,
} from './constants';

const {
  SvgAdd,
  SvgMenu,
  SvgSettings,
  SvgUserAccount,
} = svgs.icons;

const doNothing = () => {};

const IconWrapper = ({ Svg, variant = '', iconProps }) => (
  <>
    <IconButton className="wrapper" variant={variant} onClick={doNothing} icon={<Svg {...iconProps} />} />
    <style jsx>
      {`
        :global(.wrapper) {
          padding: 0;
        }
      `}
    </style>
  </>
);


const NavButton = ({ collapsed, ...iconProps }) => (
  <IconWrapper Svg={SvgMenu} {...iconProps} />
);

const Settings = ({ iconProps }) => (<IconWrapper variant="slate" Svg={SvgSettings} iconProps={iconProps} />);
const Account = ({ iconProps }) => (<IconWrapper variant="slate" Svg={SvgUserAccount} iconProps={iconProps} />);

const IconButtons = [
  Settings,
  Account,
];

const PrimaryAction = ({ collapsed, iconProps }) => {
  if (collapsed) {
    return (
      <IconWrapper variant="slate" Svg={SvgAdd} iconProps={iconProps} />
    );
  }

  return (
    <Button size="sm" onClick={doNothing} variant="primary">
      <p>Primary</p>
    </Button>
  );
};

const SecondaryAction = () => (
  <Button size="sm" onClick={doNothing} variant="secondary">
    <p>Secondary</p>
  </Button>
);

const PageHeaderDemo = ({ defaultToDark = false }) => {
  const useAltTheme = boolean('useAltTheme', false);
  const title = text('title', 'Page Header');
  const showNavButton = boolean('showNavButton', true);
  const showPrimaryAction = boolean('showPrimaryAction', true);
  const showSecondaryAction = boolean('showSecondaryAction', true);
  const showIconButtons = boolean('showIconButtons', true);

  return (
    <>
      <div className="container">
        <ThemeWrapper
          defaultToDark={defaultToDark}
          content={
            <PageHeader
              useAltTheme={useAltTheme}
              title={title}
              NavigationButton={showNavButton && NavButton}
              PrimaryAction={showPrimaryAction && PrimaryAction}
              SecondaryAction={showSecondaryAction && SecondaryAction}
              IconButtons={showIconButtons ? IconButtons : null}
            />
          }
        />
        <hr className="no-margin" />
      </div>
      <style jsx>
        {`
          .container {
            border: 1px solid;
            color: ${defaultToDark ? 'white' : 'black'};
            height: 100vw;
            width: 100%;
          }

          .no-margin {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

storiesOf('PageHeader', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Light Theme', () => (
    <PageHeaderDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }, darkBackground],
  })
  .add('Dark Theme', () => (
    <PageHeaderDemo defaultToDark />
  ), {
    backgrounds: [{ ...darkBackground, default: true }, lightBackground],
  });
