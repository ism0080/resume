/* eslint-disable @typescript-eslint/no-var-requires */
const customWebpackConfig = require('../web/webpack.config.js')

module.exports = {
  stories: ['../../packages/**/*.stories.([tj]sx)'],
  addons: [{ name: '@storybook/addon-docs', options: { configureJSX: true } }, '@storybook/addon-viewport/register'],
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.tsx', '.ts', '.less')
    config.module = {
      ...config.module,
      rules: customWebpackConfig.module.rules
    }

    return config
  }
}
