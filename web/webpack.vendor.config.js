//import webpack from 'webpack';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'bundle': ['jquery', 'react', 'react-dom', 'materialize'],
    // 'React': ['react'],
    // 'ReactDom': ['react-dom'],
    // 'Materialize': ['materialize']
  },

  output: {
    path: path.join(__dirname, 'static/timetracker/js/'),
    filename: '[name].min.js',
  },

  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      materialize: "materialize-css/dist/js/materialize"
    }
  },

  module: {
    // rules: [
    //   {
    //     test: /\.jsx?$/,
    //     loader: 'babel-loader',
    //     include: path.resolve(__dirname, 'timetracker/static/timetracker/js'),
    //     exclude: path.resolve(__dirname, 'node_modules'),
    //     options: {
    //       babelrc: false,
    //       presets: [
    //         ['es2015', { modules: false }],
    //         'react',
    //       ]
    //     }
    //   }
    // ]
  },

  plugins: [

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   include: /\.min\.js$/,
    //   minimize: true,
    //   comments: false
    // }),

    new webpack.DllPlugin({
      path: 'dist/[name]-manifest.json',
      name: '[name]_lib'
    })
  ]
};
