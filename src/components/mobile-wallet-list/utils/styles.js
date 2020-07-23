/* 
 *  This is the default license template.
 *  
 *  File: styles.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Mobile Wallet List styles object and function to determine styles to use
 * @author Gabriel Womble
 */

const PRIMARY = 'primary';
const SECONDARY = 'secondary';

/**
 * Curried function to determine row styles for mobile wallet list
 * @returns {func} - function that returns theme
 * @param {Object} baseTheme - derived from useTheme('mobileList')
 * @param {boolean} isChildList - applies secondary theme if true
 */
export function getRowStyles(baseTheme, isChildList = false) {
  return () => {
    const themeKey = isChildList ? SECONDARY : PRIMARY;
    const theme = baseTheme[themeKey];

    return theme;
  };
}
