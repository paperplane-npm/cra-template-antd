const {
  override,
  overrideDevServer,
  addBabelPlugins,
  addWebpackAlias,
  addWebpackModuleRule,
  addBabelPlugin,
} = require('customize-cra')

module.exports = {
  webpack: override(
    addBabelPlugins(['@emotion']),

    addWebpackAlias({ '@': 'src/' }),

    addBabelPlugin(['lodash']),

    addWebpackModuleRule({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    })
  ),

  devServer: overrideDevServer(devServerConfig => ({
    ...devServerConfig,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  })),
}
