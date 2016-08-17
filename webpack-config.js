const path = require('path')
const webpack = require('webpack')

const pathJs = path.resolve(__dirname)
const pathBuild = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    app: path.resolve(pathJs, 'index.js'),
  },
  output: {
    path: pathBuild,
    filename: 'sprite.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', pathJs],
  },
  stats: {
    colors: true,
    chunkModules: false,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js($|\?)|\.jsx($|\?)/,
        exclude: /node_modules/,
        presets: ['es2015', 'react'],
      },
      {
        loader: 'file?name=/[name].html',
        test: /\.html$/,
      },
      {
        loader: 'raw',
        test: /\.svg$/,
      },
    ],
  },
}
