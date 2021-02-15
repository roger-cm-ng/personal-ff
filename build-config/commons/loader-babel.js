const loaderBabel = () => ({
    test: /\.(js|jsx|es6)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'source-map-loader']
});

module.exports = loaderBabel;