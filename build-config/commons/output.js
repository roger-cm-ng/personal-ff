const path = require('path')

const output = () => ({
  filename: '[name].js',
  path: path.resolve(__dirname, '../../public'),
});

module.exports = output;