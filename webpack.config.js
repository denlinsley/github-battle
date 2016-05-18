var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    // publicPath: '/' // plugins are aware of this
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
