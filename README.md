# js-markdown-loader

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/js-markdown-loader.svg
[npm-url]: https://npmjs.org/package/js-markdown-loader
[license-image]: https://img.shields.io/npm/l/js-markdown-loader.svg

Webpack Markdown loader for [js-markdown](https://github.com/fatalxiao/js-markdown).

## Installation

**NPM**

```bash
$ npm install js-markdown-loader --save-dev
```

## Usage

**webpack.config.js**

```js
{

    // ...

    module: {
        rules: [{
            test: /\.md/,
            loader: 'js-markdown-loader'
        }]
    }

    // ...

};
```

## License

This project is licensed under the terms of the
[MIT license](https://github.com/fatalxiao/js-markdown-loader/blob/master/LICENSE)
