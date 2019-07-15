/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ResolverFactory = require('enhanced-resolve/lib/ResolverFactory');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');

const CACHED_DURATION = 60000;
const fileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), CACHED_DURATION);

const resolver = ResolverFactory.createResolver({
  alias: {
    'styles': path.resolve(__dirname, 'src/styles'),
  },
  extensions: ['.scss'],
  modules: ['src', 'src/styles', 'node_modules'],
  useSyncFileSystemCalls: true,
  fileSystem,
});

module.exports = {
  parser: require('postcss-scss'),
  syntax: require('postcss-scss'),
  plugins: {
    'postcss-import': {
      resolve(id, basedir) {
        return resolver.resolveSync({}, basedir, id);
      },
    },
  },
};
