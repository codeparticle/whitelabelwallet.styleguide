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
