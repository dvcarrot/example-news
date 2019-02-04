// ./webpack/assets.js

// dependency
const CopyWebpackPlugin = require('copy-webpack-plugin');

// module rule
const assets = {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [{
        loader: 'file-loader',
        options: {
            outputPath: 'assets',
            publicPath: '../assets'
        }
    }],
};

// plugins
const copyHtmlPlugins = [
    new CopyWebpackPlugin([{
        from: './src/upload',
        to: './upload'
    }])
];

// config
module.exports = {
    module: {
        rules: [assets]
    },
    plugins: copyHtmlPlugins
};
