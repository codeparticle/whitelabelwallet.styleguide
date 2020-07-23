/* 
 *  This is the default license template.
 *  
 *  File: index.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

try {
  /* eslint-disable import/no-unresolved */
  const generated = require('./generated');

  Object.keys(generated).forEach((item) => {
    module.exports[item] = generated[item];
  });
} catch (err) {
  console.error(`Please run the command to process the svgs (err: ${err})`);
  module.exports = {};
}
