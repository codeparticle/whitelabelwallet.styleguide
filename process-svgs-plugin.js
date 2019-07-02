const { processImages } = require('./process-images');

module.exports = {
  apply: (compiler) => {
    compiler.hooks.beforeCompile.tap('ProcessSvgsPlugin', () => {
      processImages();
    });
  },
};
