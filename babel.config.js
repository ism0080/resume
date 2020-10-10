module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    'dynamic-import-node-babel-7',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-object-rest-spread',
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        lazy: true
      }
    ]
  ]
}
