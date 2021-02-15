const path = require('path')

const devServer = () => ({
  contentBase: path.join(__dirname, '../public'),
  compress: true,
  port: 9000,
});

module.exports = devServer;