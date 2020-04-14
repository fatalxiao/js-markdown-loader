const presets = [
        '@babel/preset-env'
    ],
    commonPlugins = [
        '@babel/plugin-transform-runtime'
    ];

module.exports = {
    'env': {

        'test': {
            presets
        },

        'production': {
            presets,
            plugins: [
                ...commonPlugins
            ]
        }

    }
};
