const commonConfig = require('./webpack.common');
const parts = require('./webpack.parts.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const devConfig = merge([
    parts.generateSourceMaps({type: 'cheap-module-eval-source-map'}),
    {
        output: {
            devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
        },
    },
    parts.loadCSS(),
    parts.devServer({
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT // Defaults to 8080
    })]);

module.exports = merge([commonConfig, devConfig]);