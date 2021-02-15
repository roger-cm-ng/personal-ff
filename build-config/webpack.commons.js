const commons = require('./commons');

module.exports = {
  resolve: commons.resolve(),
  entry: commons.entry(),
  output: commons.output(),

  module: {
    rules: [
      commons.loaderTypescript(),
      commons.loaderBabel(),
      commons.loaderStyle(),
      commons.loaderFonts()
    ],
  },

  devServer: commons.devServer(),

  plugins: [
    commons.htmlWebpackPlugin(),
    commons.eslintWebpackPlugin()
  ]
}