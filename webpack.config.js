var path = require('path');
var webpack = require('webpack');
    
config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/core.js')
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'css']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: {colors: true}
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = config;
