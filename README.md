# js-markdown-loader

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