/**
 * @fileoverview HOC Pattern for applying a theme to components
 * If no Provider is in the component tree, will use
 * the default light theme
 * @author Gabriel Womble
 */
import React from 'react';
import { ThemeContext } from './theme-context';

/**
 * @returns {Object} - theme
 * @param {Component} Component - Component to receive theme
 * @param {string} componentKey - theme key to deconstruct theme that is returned
 */
export function withTheme(Component, componentKey = null) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const themeValue = componentKey ? theme[componentKey] : theme;

          return (
            <Component theme={themeValue} {...props} />
          );
        }}
      </ThemeContext.Consumer>
    );
  };
}
