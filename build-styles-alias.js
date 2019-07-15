/* eslint-disable import/no-extraneous-dependencies */
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
