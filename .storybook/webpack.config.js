const path = require('path');

module.exports = ({ config }) => {
    // Make dynamic import chunk names nicer
    config.output.chunkFilename = '[name].bundle.js';

    // Compile node_modules
    config.module.rules[0].exclude = [];

    config.resolve = {
        extensions: ['.js', '.scss'],
    };

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

    return config;
}
