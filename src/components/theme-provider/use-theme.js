/**
 * @fileoverview Reusable theme hook. This hook is the
 * stateless component counterpart to contextType.
 * If the ThemeContext.Provider isn't in the component tree,
 * theme will default to light
 * @author Gabriel Womble
 */
import { useContext } from 'react';
import { ThemeContext } from './theme-context';

/**
 * @returns {Object} - theme
 * @param {string} componentKey - theme key to deconstruct theme that is returned
 */
export function useTheme(componentKey = null) {
  const theme = useContext(ThemeContext);

  return componentKey ? theme[componentKey] : theme;
}
