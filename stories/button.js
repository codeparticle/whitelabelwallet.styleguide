import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  number,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import { Button, ButtonVariants } from '../src';
import readme from '../src/components/button/README.md';
import { lightBackground, authBackground } from './constants';

const ButtonDemo = () => {
  const btnTypes = ['', ...Object.values(ButtonVariants)];

  const rowStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const columnStyle = {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    padding: 25,
  };

  const rows = btnTypes.map((btnClass, i) => (
    <div
      key={i}
      style={{
        ...rowStyle,
        background: btnClass !== 'tertiary' ? null : 'linear-gradient(45deg, #4392D7 0%, #00E3C6 100%)',
      }}
    >
      <div style={columnStyle}>
        <Button
          variant={btnClass}
          size="lg"
        >
          Button Text
        </Button>
      </div>
      <div style={columnStyle}>
        <Button
          variant={btnClass}
        >
          Button Text
        </Button>
      </div>
      <div style={columnStyle}>
        <Button
          variant={btnClass}
          size="sm"
        >
          Button Text
        </Button>
      </div>
    </div>
  ));

  const buttonContainerStyles = {
    padding: '25px 10%',
  };


  return (
    <div style={buttonContainerStyles}>
      {rows}
    </div>
  );
};

storiesOf('Button', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <ButtonDemo />
  ), {
    backgrounds: [{ ...lightBackground, default: true }],
  })
  .add('Playground', () => {
    const children = text('children', 'Click me');

    const buttonLabel = 'Button Variants';
    const buttonTypes = {
      'primary': 'primary',
      'secondary': 'secondary',
      'green': 'green',
      'slate': 'slate',
      'slate-clear': 'slate-clear',
      'alert': 'alert',
      'teal': 'teal',
      'tertiary': 'tertiary',
    };

    const buttonSizeLabel = 'Button Sizes';
    const buttonSizes = {
      'lg': 'lg',
      'sm': 'sm',
      'full': 'full',
      'Default': '',
    };

    const widthLabel = 'Parent Width (use full variant)';
    const widthOptions = {
      range: true,
      min: 0,
      max: 100,
      step: 0.5,
    };
    const width = `${number(widthLabel, 20, widthOptions)}%`;

    const defaultClass = 'primary';
    const defaultSize = '';

    const buttonType = radios(buttonLabel, buttonTypes, defaultClass);
    const buttonSize = radios(buttonSizeLabel, buttonSizes, defaultSize);

    return (
      <div style={{ width }}>
        <Button
          onClick={action('clicked')}
          size={buttonSize}
          variant={buttonType}
        >
          {children}
        </Button>
      </div>
    );
  }, {
    backgrounds: [{ ...lightBackground, default: true }, authBackground],
  });
