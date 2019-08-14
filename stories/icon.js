import React from 'react';
import { storiesOf } from '@storybook/react';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Icon, IconVariants } from 'components/icon';
import readme from 'components/icon/README.md';
import { withReadme } from 'storybook-readme';
import { svgs } from '../src';
import { lightBackground } from './constants';

const { SvgClose } = svgs.icons;

const IconDemo = () => {
  const iconTypes = ['', ...Object.values(IconVariants)];

  const buttonContainerStyles = {
    padding: '25px 10%',
  };

  const rowStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  };

  const rows = iconTypes.map((variant, i) => (
    <div
      key={i}
      style={{
        ...rowStyle,
        background: variant !== 'tertiary' ? null : 'linear-gradient(45deg, #4392D7 0%, #00E3C6 100%)',
      }}
    >
      <Icon
        variant={variant}
        icon={<SvgClose height="24px" width="24px" />}
      />
    </div>
  ));


  return (
    <div style={buttonContainerStyles}>
      {rows}
    </div>
  );
};

storiesOf('Icon', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Icon', () => (
    <IconDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Playground', () => {
    const iconLabel = 'Icon Variants';
    const iconTypes = {
      'default': '',
      'primary': 'primary',
      'green': 'green',
      'slate': 'slate',
      'tertiary': 'tertiary',
    };

    const defaultClass = 'primary';

    const variant = radios(iconLabel, iconTypes, defaultClass);

    return (
      <Icon
        onClick={action('clicked')}
        variant={variant}
        icon={<SvgClose />}
      />
    );
  }, {
    backgrounds: [{ ...lightBackground, default: true }],
  });
