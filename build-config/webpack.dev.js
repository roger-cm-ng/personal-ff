const { merge } = require('webpack-merge');
const commons = require('./commons');
const CommonsConfig = require('./webpack.commons');
const apiUrl = 'https://5f5ff7f790cf8d00165573ed.mockapi.io/';
const baseUrl = 'http://localhost:9000'

module.exports = merge(CommonsConfig, {
  module: {
    rules: [
      commons.loaderStringReplace(/\#API_URL\#/ig, apiUrl),
      commons.loaderStringReplace(/\#BASE_URL\#/ig, baseUrl)
    ]
  }
});