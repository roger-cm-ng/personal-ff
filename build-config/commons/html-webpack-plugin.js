const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = () => new HtmlWebpackPlugin({
    template: 'templates/index.ejs',
    inject: 'head',
    minify: {
        removeScriptTypeAttributes: true
    },
    scriptLoading: 'blocking'
});

module.exports = htmlWebpackPlugin;
