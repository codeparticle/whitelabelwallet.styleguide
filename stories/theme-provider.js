/* 
 *  This is the default license template.
 *  
 *  File: theme-provider.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import {
  ThemeContext,
  useTheme,
  withTheme,
} from 'src';
import readme from 'components/theme-provider/README.md';
import { toggleTheme } from './utils';

const DemoComponent = ({ type, theme }) => (
  <div className="demo-container">
    <h2 className="demo-container__header">{`This is a component using the ${type}!`}</h2>
    <p className="demo-container__desc">{`The theme's name is '${theme.name}'`}</p>
    <style jsx>
      {`
        @import 'styles/layout.scss';
        
        .demo-container {
          border-radius: 10px;
          padding: $space-3;
        }
      `}
    </style>
    <style jsx>
      {`
        .demo-container {
          background: ${theme.demo.background};
          border: 3px solid ${theme.demo.border};

          &__header, &__desc {
            color: ${theme.demo.color};
          }
        }
      `}
    </style>
  </div>
);

const HookDemo = ({ type = 'useTheme hook' }) => {
  const theme = useTheme();

  return <DemoComponent type={type} theme={theme} />;
};

const HOCComponent = ({ theme }) => {
  const type = 'withTheme HOC';

  return (
    <DemoComponent type={type} theme={theme} />
  );
};

const HOCDemo = withTheme(HOCComponent);

const ThemeContextDemo = () => {
  const type = 'ThemeContext Provider';
  const themeValue = toggleTheme();

  return (
    <ThemeContext.Provider value={themeValue}>
      <HookDemo type={type} />
    </ThemeContext.Provider>
  );
};

storiesOf('ThemeProvider', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('useTheme', () => {
    const themeValue = toggleTheme();

    return (
      <ThemeContext.Provider value={themeValue}>
        <HookDemo />
      </ThemeContext.Provider>
    );
  })
  .add('withTheme', () => {
    const themeValue = toggleTheme();

    return (
      <ThemeContext.Provider value={themeValue}>
        <HOCDemo />
      </ThemeContext.Provider>
    );
  })
  .add('ThemeContext', () => (
    <ThemeContextDemo />
  ));
