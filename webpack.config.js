var path = require("path");

module.exports = {
    entry:  ['./src/timeInput.jsx'],
    output: {
        filename:'index.js',
        libraryTarget: 'umd',
        library: 'react-time-input',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
    resolveModules: {
        modulesDirectories: ['node_modules'],
    }
};