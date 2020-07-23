/* 
 *  This is the default license template.
 *  
 *  File: build-styles-alias.js
 *  Author: franck
 *  Copyright (c) 2020 franck
 *  
 *  To edit this license information: Press Ctrl+Shift+P and press 'Create new License Template...'.
 */

const fs = require('fs');
const rimraf = require('rimraf');

rimraf('./styles', () => {
  const styles = fs.readdirSync('./src/styles', { encoding: 'utf8' });
  fs.mkdirSync('./styles');

  styles.forEach((file) => {
    const content = `@import '../dist/styles/${file}';\n`;

    fs.writeFileSync(`./styles/${file}`, content, { encoding: 'utf8' });
  });
});
