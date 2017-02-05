//import webpack from 'webpack';
const webpack = require('webpack');

module.exports = {
  entry: './timetracker/static/timetracker/js/main.js',
  output: {
    filename: '[name].min.js',
  },

  // devtool: "cheap-eval-source-map",

  // devServer: {
  //   contentBase: path.join(__dirname, './timetracker/static/timetracker/js/main'),
  //   compress: true,
  //   port: 9000
  // },

  // resolve: {
  //   alias: {
  //     jquery: "jquery/src/jquery",
  //     materialize: "materialize-css/dist/js/materialize"
  //   }
  // },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            },
            exclude: ['/node_modules/'],
          }
        ]
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

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
