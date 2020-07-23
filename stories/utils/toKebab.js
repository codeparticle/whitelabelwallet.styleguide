/* 
 *  This is the default license template.
 *  
 *  File: toKebab.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

/**
 * @fileoverview Converts to kebab case w/ support for numbers
 * @author Gabriel Womble
 */

import Case from 'case';

const numRegex = /[0-9]/;
// sizeRegex matches a bad kebab
// so that it can remove the dash ie: xx-s -> xxs
const sizeRegex = /(x)(-)([a-z])/;

export function toKebab(key) {
  const kebabKey = Case.kebab(key);
  const num = kebabKey.match(numRegex) || 1;

  return kebabKey
    .replace(num, `-${num[0]}`)
    .replace(sizeRegex, '$1$3');
}
