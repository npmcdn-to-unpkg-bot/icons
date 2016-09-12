const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pathSrc = path.resolve(__dirname, 'src')
const pathBuild = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    sprite: path.resolve(pathSrc, 'sprite.js'),
    app: path.resolve(pathSrc, 'app.js'),
  },
  output: {
    path: pathBuild,
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },
  resolve: {
    modulesDirectories: ['node_modules', pathSrc],
  },
  stats: {
    colors: true,
    chunkModules: false,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(pathBuild, 'index.html'),
      template: path.resolve(pathSrc, 'index.html'),
    }),
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        loader: 'raw',
        test: /\.svg$/,
      },
      {
        loader: 'json',
        test: /\.json$/,
      },
    ],
  },
}
