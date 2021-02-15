const EslintWebpackPlugin = require('eslint-webpack-plugin');

const eslintWebpackPlugin = () => new EslintWebpackPlugin({
  extensions: ['ts', 'tsx', 'js']
});

module.exports = eslintWebpackPlugin;
