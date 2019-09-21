'use strict';

const path = require('path');
const WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');

module.exports = {
    entry: [
        './src/app.js',
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
            }
        ]
    },
    plugins: [
        new WatchLiveReloadPlugin({
            files: [
                './src/**/*.html'
            ],
        })
    ]
};