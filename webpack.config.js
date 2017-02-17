var webpack = require('webpack');
var serverURL = 'http://localhost:8080/'; // Webpack Dev Server
var proxyURL = 'http://mike.dev'; // Your external HTML server
var proxy = {
  '*': proxyURL
};


module.exports = {
  entry: [
    'webpack-dev-server/client?' + serverURL,
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    proxy: proxy,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};