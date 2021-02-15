const loaderFonts = () => ({
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[hash].[ext]',
                outputPath: 'assets/fonts/'
            }
        }
    ]
});

module.exports = loaderFonts;