// ./webpack/styles.js

// dependency
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module rule
const scss = {
    test: /\.(sa|sc|c)ss$/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ]
};

// plugins
const extractHtmlPlugins = [
    new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
        chunkFilename: 'styles/[id].css'
    })
];

// config
module.exports = {
    module: {
        rules: [scss]
    },
    plugins: extractHtmlPlugins
};
