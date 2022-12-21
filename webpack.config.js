const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'demo/src/index.html'),
  filename: './index.html',
});
const LAUNCH_CMD = process.env.npm_lifecycle_event;
const isDev = LAUNCH_CMD == 'dev' ? true : false;

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'demo/src/index.js'),
  ],
  mode: isDev ? 'development' : 'production',
  output: isDev ? {
    path: path.join(__dirname, 'demo/dist'),
    filename: 'bundle.js',
  } : {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // Use NoErrorsPlugin for webpack 1.x
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3001,
  },
  devtool: 'source-map',
};
