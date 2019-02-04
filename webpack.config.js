// webpack.config.js

// dependency
const merge = require('webpack-merge');

// config
module.exports = merge([
    require('./webpack/views'),
    require('./webpack/styles'),
    require('./webpack/assets'),
    require('./webpack/base')
]);
