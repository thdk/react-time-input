var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		__dirname + '/index.jsx' // Your appʼs entry point
	],
	output: {
		publicPath: '/',
		filename: 'example-bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
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
};
