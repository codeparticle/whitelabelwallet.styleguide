const { processSvgs } = require('./process-svgs');

module.exports = {
  apply: (compiler) => {
    compiler.hooks.beforeCompile.tap('ProcessSvgsPlugin', () => {
      processSvgs();
    });
  },
};
