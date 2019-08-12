/**
 * @fileoverview Converts to kebab case w/ support for numbers
 * @author Gabriel Womble
 */

import Case from 'case';

const numRegex = /[0-9]/;

export function toKebab(key) {
  const kebabKey = Case.kebab(key);
  const num = kebabKey.match(numRegex) || 1;

  return kebabKey.replace(num, `-${num[0]}`);
}
