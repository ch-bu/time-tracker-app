import webpack from 'webpack';

module.exports = {
  entry: './timetracker/static/timetracker/js/main.js',
  output: {
    filename: 'main.min.js',
    // path: './.tmp/scripts'
  },

  // devtool: "cheap-eval-source-map",

  // devServer: {
  //   contentBase: path.join(__dirname, './timetracker/static/timetracker/js/main'),
  //   compress: true,
  //   port: 9000
  // },

  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      materialize: "materialize-css/dist/js/materialize"
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['es2015', 'react']
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

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
