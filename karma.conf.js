module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: ['tests/builder.js'],
        browsers: ['PhantomJS'],
        // browsers: ['chrome'],
        preprocessors: {
            // add webpack as preprocessor
            'tests/builder.js': ['webpack']
        },
        webpack: {
            mode: 'development',
            entry: ['babel-polyfill'],
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                    },
                ],
            },
        },
        plugins: [
            'karma-phantomjs-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
        ],
    })
};