/**
 * @fileoverview ThemeContext
 * @author Gabriel Womble
 */
import React from 'react';
import PropTypes from 'prop-types';
import { themes } from './themes';
import { THEME_KEYS } from './theme-keys';

const { DARK, LIGHT } = THEME_KEYS;

const ThemeContext = React.createContext(themes.light);

function ThemeProvider({
  themeKey,
  children,
}) {
  const theme = themes[themeKey];

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  themeKey: PropTypes.oneOf([
    DARK,
    LIGHT,
  ]).isRequired,
};

export {
  ThemeContext,
  ThemeProvider,
};
