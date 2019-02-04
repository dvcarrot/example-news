// ./webpack/assets.js

// dependency
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

// module rule
const images = {
    test: /\.(png|gif|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
const svgPlugins = [
    new SVGSpritemapPlugin('./src/assets/icons/*.svg', {
        sprite: {
            prefix: false
        },
        output: {
            filename: 'assets/icons.svg'
        }
    })
];

// config
module.exports = {
    module: {
        rules: [
            images
        ]
    },
    plugins: []
        .concat(copyHtmlPlugins)
        .concat(svgPlugins)
};
