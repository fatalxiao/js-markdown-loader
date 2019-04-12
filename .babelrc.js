const presets = [
        '@babel/preset-env'
    ],
    commonPlugins = [
        '@babel/plugin-transform-runtime'
    ],
    packageConfig = {
        presets,
        plugins: [
            ...commonPlugins
        ]
    };

module.exports = {
    'env': {

        'test': {
            'presets': [
                '@babel/preset-env'
            ]
        },

        'production': packageConfig

    }
};
