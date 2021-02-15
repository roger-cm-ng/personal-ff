const loaderTypescript = () => ({
    test: /\.tsx?$/,
    use: ['babel-loader'],
    exclude: /node_modules/
});

module.exports = loaderTypescript;