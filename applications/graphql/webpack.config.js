/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.join(__dirname, 'server.ts'),
  mode: 'production',
  target: 'node',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.graphql'],
    modules: ['node_modules']
  },
  externals: [nodeExternals(), 'utf-8-validate', 'bufferutil'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: './tsconfig.json'
        }
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  watch: true
}
