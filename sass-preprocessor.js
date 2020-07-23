/* 
 *  This is the default license template.
 *  
 *  File: sass-preprocessor.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

const sass = require('node-sass');

module.exports = function processSass(data, filename) {
  const test = sass.renderSync({
    data,
    file: filename,
    includePaths: ['./src', './src/styles'],
  });

  return test.css.toString('utf8');
};
