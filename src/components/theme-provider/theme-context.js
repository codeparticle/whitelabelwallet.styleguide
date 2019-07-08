/**
 * @fileoverview ThemeContext
 * @author Gabriel Womble
 */
import React from 'react';
import { themes } from './themes';

export const ThemeContext = React.createContext(themes.light);
