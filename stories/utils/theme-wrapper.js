import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { themes } from '../../src/components/theme-provider/themes';
import { ThemeContext } from '../../src/components/theme-provider';

export function toggleTheme(defaultToDark = false) {
  const themeToggle = boolean('Toggle Dark Theme', defaultToDark);
  const themeValue = themeToggle ? themes.dark : themes.light;

  return themeValue;
}

export const ThemeWrapper = ({ content, defaultToDark }) => {
  const themeValue = toggleTheme(defaultToDark);

  return (
    <ThemeContext.Provider value={themeValue}>
      {content}
    </ThemeContext.Provider>
  );
};
