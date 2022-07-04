const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/index.tsx', 'webpack-hot-middleware/client'],
    vendor: ['react', 'react-dom'],
  },
  mode: 'production',
  devtool: 'inline-source-map',
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name]-[fullhash].bundle.js',
    chunkFilename: 'static/js/lib-[fullhash].bundle.js',
    publicPath: "/", // remove everything after / when local fix this by making differeny scripts like this guy https://github.com/gfmio/github-pages-boilerplate/tree/master/config/webpack
  },
};