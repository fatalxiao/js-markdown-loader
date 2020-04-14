const presets = [
        '@babel/preset-env'
    ],
    plugins = [
        '@babel/plugin-transform-runtime'
    ];

module.exports = {
    'env': {

        'test': {
            presets
        },

        'production': {
            presets,
            plugins
        }

    }
};
