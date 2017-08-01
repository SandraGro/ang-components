'use strict';

var path = require('path');
var webpack = require('webpack');
var WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');

module.exports = {
	entry: [
		'./src/app.module.js',
	],
	output: {
		filename: 'webpack.bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		compress: false,
		contentBase: path.resolve(__dirname, 'src'),
		hot: true,
		open: true,
		port: 1305,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html-loader'
			},
			{
				test: /\.css/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				]
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|eot|woff|woff2|ttf)$/i,
				use: [
					'file-loader'
				]
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new WatchLiveReloadPlugin({
			files: [
				'./src/**/*.html'
			],
		}),
	],
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.css', '.scss']
	},
	resolveLoader: {
		modules: ['node_modules']
	},
};