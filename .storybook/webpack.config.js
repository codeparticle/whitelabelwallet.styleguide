const path = require('path');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const ProcessSvgsPlugin = require('../process-svgs-plugin.js');

module.exports = ({ config }) => {
    const rootPath = path.join(__dirname, '../');
    const srcPath = path.join(rootPath, 'src');

    config.resolve.extensions.push('.scss');
    config.resolve.modules = [...config.resolve.modules, rootPath, srcPath];
    config.resolve.alias = {
        ...config.resolve.alias,
        src: srcPath,
        components: path.join(srcPath, 'components'),
        styles: path.join(srcPath, 'styles'),
        svgs: path.join(srcPath, 'svgs'),
    };

    // Make dynamic import chunk names nicer
    config.output.chunkFilename = '[name].bundle.js';

    // Compile node_modules
    config.module.rules[0].exclude = [];

    // Enable CSS modules and PostCSS for the project
    config.module.rules.unshift({
        test: /\.s?css$/,
        exclude: path.join(__dirname, '../node_modules'),
        loader: [
            'css-hot-loader',
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    modules: true,
                    sourceMap: true,
                    importLoaders: 1,
                    localIdentName: '[name]__[local]___[hash:base64:5]!',
                },
            },
            require.resolve('postcss-loader'),
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [path.join(__dirname, '../src')],
                    sourceMap: true
                }
            },
        ],
    });

    config.module.rules.unshift({
        test: /\.svg$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    publicPath: '/',
                },
            },
        ],
    });

    // Wrap all rules into a `oneOf` so that only 1 matches
    config.module.rules = [{ oneOf: config.module.rules }];

    config.plugins.unshift(
        new ExtraWatchWebpackPlugin({
            dirs: ['src/svgs'],
        }),
        ProcessSvgsPlugin,
    );

    return config;
}
