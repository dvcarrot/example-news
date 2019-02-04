// ./webpack/base.js

// dependency
const path = require('path');

// config
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'scripts/[name].bundle.js'
    },
    resolve: {
        alias: {
            'assets': path.resolve(__dirname, '../src/assets')
        }
    }
};
