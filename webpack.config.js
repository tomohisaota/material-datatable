const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./examples/selectable-rows/index.js"
  },
  stats: "verbose",
  context: __dirname,
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    hot: true,
    inline: true,
    host: "localhost",
    port: 5050
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development"),
      }
    })
  ]
};
