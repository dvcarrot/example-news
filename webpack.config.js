// webpack.config.js

// dependency
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// module rules
const pug = {
    test: /\.pug$/,
    use: ['html-loader?attrs=false', 'pug-html-loader']
};
const scss = {
    test: /\.(sa|sc|c)ss$/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ]
};
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

// config
const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].bundle.js'
    },
    module: {
        rules: [pug, scss, assets]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/upload',
            to: './upload'
        }]),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/pages/index.pug'
        })
    ],
    resolve: {
        alias: {
            'assets': path.resolve(__dirname, 'src/assets')
        }
    }
};

module.exports = config;
