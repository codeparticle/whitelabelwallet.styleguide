/* 
 *  This is the default license template.
 *  
 *  File: no-propagation.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

const noPropagation = callback => (
  (e) => {
    e.stopPropagation();
    callback(e);
  }
);

export { noPropagation };
