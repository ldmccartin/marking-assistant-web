const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/index.tsx', 'webpack-hot-middleware/client'], // probs need to take out this hot-middleware for deployed stuff at some point
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
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // if website not finding sources, make this just dist
    filename: '[name]-[fullhash].bundle.js',
    chunkFilename: 'vendor-[fullhash].bundle.js',
    publicPath: "/marking-assistant-web/",
    // publicPath: "/" // locally
  },
};
