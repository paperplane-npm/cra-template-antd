const {
  override,
  overrideDevServer,
  addWebpackAlias,
  addLessLoader,
  addWebpackModuleRule,
  addBabelPlugin,
  addBabelPreset,
} = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackAlias({ '@': 'src/' }),

    addLessLoader({
      lessOptions: {
        globalVars: {},
        modifyVars: {},
      },
    }),

    addWebpackModuleRule({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'sass-loader', options: { additionalData: '@import "~@/styles/global.scss";' } },
      ],
    }),

    addBabelPlugin(['lodash']),

    addBabelPlugin(['@emotion']),

    addBabelPreset(['@emotion/babel-preset-css-prop'])
  ),

  devServer: overrideDevServer(devServerConfig => ({
    ...devServerConfig,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },

      // 仅测试用。使用时请删去 ↓
      '/test-devserver-baidu': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/test-devserver-baidu': '',
        },
      },

      // 仅测试用。使用时请删去 ↓
      '/paperplane': {
        target: 'https://app.paperplane.cc',
        changeOrigin: true,
        pathRewrite: {
          '^/paperplane': '',
        },
      },
    },
  })),
}
