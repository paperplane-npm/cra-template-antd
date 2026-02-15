const path = require('path')
const CracoLessPlugin = require('craco-less')

/**
 * craco 用于定制 create-react-app
 * 文档：https://craco.js.org/
 *
 * 此文件是 CRA 的配置文件，它不会读取 .env* 文件
 * 如果想在此文件中也使用 .env 里面的变量，需要用 dotenv 或 dotenv-cli
 *
 * 修改此文件后，如果没生效，删除 node_modules/.cache
 */

/** @type {import('@craco/types').CracoConfig} */
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  style: {
    sass: {
      // sass-loader 配置项
      // 文档： https://webpack.js.org/loaders/sass-loader/
      loaderOptions: {
        additionalData: '@use "@/styles/global.scss" as *;',
        sourceMap: true,
      },
    },
  },

  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
    plugins: ['@emotion/babel-plugin'],
  },

  plugins: [
    {
      // craco-less 插件
      // 文档： https://github.com/DocSpring/craco-less
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          // less-loader 配置项
          // 文档： https://webpack.js.org/loaders/less-loader/
          additionalData: '@import "~@/styles/global.less";',
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
            noIeCompat: true,
          },
        },
      },
    },
  ],

  devServer: {
    proxy: {
      '/api': {
        // 这是测试 URL，开发时记得替换成你自己的后台 URL
        target: 'https://my-json-server.typicode.com/chiskat/mockdata-for-typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
