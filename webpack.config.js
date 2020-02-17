const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**
 * Root Path
 * @desc Constructs a valid path from the current project directory
 * @param args Path components
 * @returns Valid concatenated path
 */
const rootPath = (...args) => args.reduce((fullPath, pathComponent) => path.join(fullPath, pathComponent), __dirname)

/**
 * HTML Webpack Plugin
 * @desc Configuration for building the HTML page
 * @note Some props are injected and some are configuration (rendering) settings
 */
const htmlPlugin = new HtmlWebPackPlugin({
  filename: 'index.html',
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  },
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  },
  template: rootPath('public', 'index.html'),
  title: 'react-template',
})

const hotModulePlugin = new webpack.HotModuleReplacementPlugin()

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  chunkFilename: '[id].css',
  filename: '[name].css',
})

/**
 * Webpack Configuration
 */
module.exports = {
  entry: ['webpack/hot/dev-server', rootPath('src', 'index.tsx')],
  output: {
    filename: '[name]-bundle.js',
    path: rootPath('dist'),
    publicPath: './',
  },
  target: 'web',
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        test: /\.ts(x?)$/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCaseOnly',
              modules: true,
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:8]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [miniCssExtractPlugin, htmlPlugin, hotModulePlugin],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
    alias: {
      // Use for absolute paths
      components: path.resolve(__dirname, 'src/components/'),
      scenes: path.resolve(__dirname, 'src/scenes/'),
    },
  },
  devServer: {
    compress: true,
    contentBase: rootPath('public'),
    historyApiFallback: true,
    hot: true,
    lazy: false,
    open: true,
    port: 3000,
    publicPath: 'http://localhost:8000',
  },
}
