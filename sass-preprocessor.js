/* eslint-disable */
const sass = require('node-sass');

module.exports = function processSass(data, filename) {
  const test = sass.renderSync({
    data,
    file: filename,
    includePaths: ['./src', './src/styles'],
  });

  return test.css.toString('utf8');
};
