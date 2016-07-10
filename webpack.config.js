const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-css-variables');
const cssMedia = require('postcss-custom-media');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('app.css', { allChunks: true }),
    // new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel'],
        //loader: 'babel',
      },
      // css loader
      {
        test: /\.css/,
        include: path.join(__dirname, 'src'),
        // loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        loader: 'style!css!postcss',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      // file loaders
      // img loader
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
        loader: 'url-loader?limit=8192&name=assets/img/[name].[ext]',
      },
      // Font Loader
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        loader: 'url-loader?limit=8192&name=assets/fonts/[name].[ext]',
      },
    ],
  },
  postcss: (bundler) => {
    return [
      postcssImport({
        addDependencyTo: bundler,
      }),
      customProperties(),
      cssMedia(),
      autoprefixer(),
    ];
  },
};
