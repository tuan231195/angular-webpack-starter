const path = require('path');
const webpack = require('webpack');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const PATHS = require('./dir.config');

const commonConfig = merge([
    {
        entry: {
            app: PATHS.app,
        },
        output: {
            path: PATHS.build,
            chunkFilename: '[name].[chunkhash:8].js',
            filename: '[name].[chunkhash:8].js',
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
        }
    },
    parts.lintCSS({include: PATHS.app}),
    parts.lintTypeScript(),
    parts.loadImages({
        options: {
            limit: 15000,
            name: '[name].[hash:8].[ext]',
        }
    }),
    parts.loadFonts({
        options: {
            name: '[name].[hash:8].[ext]',
        }
    }),
    parts.loadTypeScript(),
    parts.clean(PATHS.build),
    parts.extractBundles([
        {
            name: 'vendor',
            minChunks: ({resource}) => (
                resource &&
                resource.indexOf('node_modules') >= 0 &&
                resource.match(/\.js$/)
            ),
        },
        {
            name: 'manifest',
            minChunks: Infinity,
        },
    ]),
    parts.extractHTML(__dirname + '/index.html')
]);

module.exports = commonConfig;