const loaderStyle = () => ({
    test: /\.(scss)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'style-loader',
            options: {
                injectType: 'singletonStyleTag'
            }
        },
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: "[local]___[hash:base64:5]",
                }
            }
        },
        {
            loader: 'postcss-loader'
        },
        {
            loader: 'sass-loader',
        },

    ]
});

module.exports = loaderStyle;
