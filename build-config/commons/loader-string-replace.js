const LoaderStringReplace = require('string-replace-webpack-plugin');

const loaderStringReplace = (regExp, replacement) => ({
  test: /\.(ts|tsx|js)$/,
  exclude: /node_modules/,
  use: LoaderStringReplace.replace({
    replacements: [
      {
        pattern: regExp,
        replacement: function () {
          return replacement;
        }
      }
    ]
  })
});

module.exports = loaderStringReplace;
