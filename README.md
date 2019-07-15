# react-style-guide

Codeparticle's react-style-guide.


## Base technology

- React
- CSS modules
- [PostCSS](https://github.com/postcss/postcss)


## Setup

It's assumed that you will consume this package in an application bundled with Webpack. Follow the steps below:

1. Activate CSS modules

    Activate [CSS modules](https://github.com/webpack-contrib/css-loader#modules) for this package directory (or for your whole project if you like):

    ```js
    {
        test: /\.s?css$/,
        loader: [
            {
                loader: require.resolve('style-loader'),
            },
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
                    includePaths: [path.join(__dirname, '../src/styles'), path.join(__dirname, 'node_modules')],
                    sourceMap: true
                }
            },
        ],
    },
    ```

2. Import base styles

    Import the styleguide base styles in the app's entry CSS file:

    ```scss
    /* src/index.scss */
    @import '~@codeparticle/react-style-guide/styles/index';
    ```

    ..or in your entry JavaScript file:

    ```js
    // src/index.js
    import "@codeparticle/react-style-guide/styles/index.scss";
    ```

4. Use the components

    ```js
    import { Button } from '@codeparticle/react-style-guide';

    <Button />
    ```

    You may take a look at all the components by [running the Storybook](https://bitbucket.org/CodeParticle/react-style-guide/src/master/README.md).

## Commands

### start

```sh
$ npm start
```

Starts [Storybook](https://storybook.js.org/).

### build

```sh
$ npm run build
```

Builds the project.

### lint

```sh
$ npm run lint
```

Checks if the project has any linting errors.

### test

```sh
$ npm test
```

Runs the project tests.

### release

```sh
$ npm run release
```

Releases the package. Runs tests, lints and builds the project beforehand. If successful, you may publish the release to npm by running `$ npm publish`.

This command uses [`standard-version`](https://github.com/conventional-changelog/standard-version) underneath. The version is automatically inferred from the [conventional commits](https://conventionalcommits.org/).


## Using a linked version of react-style-guide

In some cases, you may want to make changes to the react-style-guide at the same time as you work on your project which uses the react-style-guide. In order to use a local version of [react-style-guide](https://bitbucket.org/CodeParticle/react-style-guide/src) and have any react-style-guide modifications be reflected live on your project, some pages have to be made in your main project.

Some of the instructions below assume you are using Webpack in your main project.

### Make required changes to your Webpack config

Before exporting the webpack configuration, add the following line to the file. This will check if there is a linked version of `react-style-guide` and add aliases to import from the un-compiled files.

```js
const fs = require('fs');
const existsReactStyleGuideSrc = fs.existsSync(path.join(projectDir, 'node_modules/@codeparticle/react-style-guide/src'));
const alias = {};

if (process.env.NODE_ENV === 'development' && existsReactStyleGuideSrc) {
  alias['@codeparticle/react-style-guide/styles'] = path.join(paths.appNodeModules, '@codeparticle/react-style-guide/src/styles');
}

module.exports = {
  resolve: {
    alias,
  },
};
```


### Link `react-style-guide` to your main project

Delete the folder at `node_modules/@codeparticle/react-style-guide` and link the projects by running `npm link ../pathToReactStyleGuide` inside the root directory of your project project. NOTE: this step has to be retaken every time you run an `npm i` or `yarn` commands in your main project, because `npm i` will replace your linked version with an installed version.


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
