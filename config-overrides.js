const {
  override,
  overrideDevServer,
  addWebpackAlias,
  addWebpackModuleRule,
  addBabelPlugin,
  addBabelPreset,
} = require('customize-cra')

module.exports = {
  webpack: override(
    addWebpackAlias({ '@': 'src/' }),

    addWebpackModuleRule({
      test: /\.less$/i,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'less-loader', options: { additionalData: '@import "~@/styles/global.less";' } },
      ],
    }),

    addWebpackModuleRule({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'resolve-url-loader', options: {} }, // 解决 Sass 的 url() 相对路径问题
        {
          loader: 'sass-loader',
          options: { sourceMap: true, additionalData: '@import "~@/styles/global.scss";' },
        },
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
