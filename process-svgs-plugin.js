/* 
 *  This is the default license template.
 *  
 *  File: process-svgs-plugin.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

const { processSvgs } = require('./process-svgs');

module.exports = {
  apply: (compiler) => {
    compiler.hooks.beforeCompile.tap('ProcessSvgsPlugin', () => {
      processSvgs();
    });
  },
};
