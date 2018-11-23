const path = require('path');

module.exports = {
  entry: './src/js/speedo_test.js',
  output: {
    filename: 'bundle_speedo.js',
    path: path.resolve(__dirname, 'dist')
  }, 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};