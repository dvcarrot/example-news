// ./webpack/views.js

// dependency
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module rule
const pug = {
    test: /\.pug$/,
    use: ['html-loader?attrs=false', 'pug-html-loader']
};

// pages
const files = fs.readdirSync('./src/views/pages');

// plugins
const entryHtmlPlugins = files.map((file) => new HtmlWebpackPlugin({
    filename: file.replace('.pug', '.html'),
    template: 'src/views/pages/' + file
}));

// config
module.exports = {
    module: {
        rules: [pug]
    },
    plugins: entryHtmlPlugins
};
