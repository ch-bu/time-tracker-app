//import webpack from 'webpack';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './timetracker/static/timetracker/js/main.jsx',
  output: {
    path: path.join(__dirname, 'static/timetracker/js/'),
    filename: '[name].min.js',
  },

  // devtool: "cheap-eval-source-map",

  devServer: {
    contentBase: path.join(__dirname, 'timetracker/static/timetracker/js/'),
    // publicPath: ''
    compress: true,
    port: 9000
  },

  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      materialize: "materialize-css/dist/js/materialize"
    },
    unsafeCache: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'timetracker/static/timetracker/js'),
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          babelrc: false,
          presets: [
            ['es2015', { modules: false }],
            'react',
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      include: /\.min\.js$/,
      minimize: true,
      comments: false
    }),

    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('bundle-manifest.json'),
    })

    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ]
};
