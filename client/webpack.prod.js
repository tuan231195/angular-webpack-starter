const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const glob = require('glob');
const PATHS = require('./dir.config');
const prodConfig = merge([
    {
        performance: {
            hints: 'warning', // 'error' or false are valid too
            maxEntrypointSize: 100000, // in bytes
            maxAssetSize: 4500000, // in bytes
        }
    },
    parts.extractCSS({
        use: ['css-loader', parts.autoprefix()],
    }),
    parts.minifyCSS({
        options: {
            discardComments: {
                removeAll: true,
                // Run cssnano in safe mode to avoid
                // potentially unsafe transformations.
                safe: true,
            },
        }
    }),
    parts.minifyJavaScript(),
    parts.purifyCSS({paths: glob.sync(`${PATHS.app}/**/*.js`, {nodir: true})})
]);

module.exports = merge([commonConfig, prodConfig]);