const webpack = require('webpack');

module.exports = {
  entry: './build/index.js',
  mode: 'development',
  output: {
    path: require('path').join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      // Needed for various packages using cwd(), like the path polyfill
      process: { cwd: () => '/' }
    })
  ],
  bail: true
};
