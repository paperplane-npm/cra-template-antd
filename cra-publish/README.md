此项目由 [@paperplane/cra-template-antd](https://www.npmjs.com/package/@paperplane/cra-template-antd) 创建，版本 %VERSION%。

# 指令

```bash
# 开发调试（3000 端口）
yarn dev
# 或
yarn start

# 打包编译（输出到 ./dist，目录名可在 .env 中进行修改）
yarn build

# 弹出配置
yarn eject

# 使用 tsc 检查源码的 TypeScript 是否有问题
yarn check-types

# 使用 prettier 检查源码文件的格式
yarn format

# 使用 eslint 检查源码文件的语法
yarn lint
```

# 开发需知

- 建议先去 [@paperplane/cra-template-antd](https://www.npmjs.com/package/@paperplane/cra-template-antd) 主页了解引入了哪些依赖项，并按需调整；
- 项目中默认包含很多测试页面，建议先挨个看一下效果，确认各个工具能正常工作；
- 包含了 `sass` 和 `less`，两者一般不会同时使用，建议在 `/config-overrides.js` 把不使用的插件配置删除，并卸载依赖；
- 修改 `/config-overrides.js` 后，建议删除 `/node_modules/.cache`，避免缓存导致修改不生效；
- 使用了 `react-app-rewired` 和 `customize-cra` 来配置 Webpack、Babel 等，这两个工具很久不维护了，但 `craco` 也停更很久了，类似的工具基本都停止维护了；这是因为 `create-react-app` 本身也很久不维护了，2025 年初甚至直接宣布废弃，建议迁移到 `vite`。

# 关于 API 数据请求

此项目默认的后端响应结构：

```json
{
  "success": true,
  "code": 0,
  "message": "通常只在报错时 message 字段才有值",
  "data": {}
}
```

以上结构定义在 `/src/types/common.d.ts` 内，你可以按需更改。

- 在 `/.env` 中修改后端的 `baseURL`；
- 在 `/config-overrides.js` 中的 `devServer` 字段配置开发环境的端口转发，默认示例可以直接删除；
- 针对 `axios`，本项目提供了名为 `client` 的封装，推荐使用；对于页面数据，还可以使用 `swr`；
- 因为后端会对响应进行包装，这样以来，使用 `axios` 请求时想取得响应数据，必须连续取两次 `.data`，这过于繁琐；本项目提供的 `client` 实例配置了响应拦截器，直接 `.then()` 就能获取响应数据，不需要写任何 `.data`；
- 此外，`client` 还会针对错误进行封装，尽可能统一成上述响应体的格式；
- 如果你有获取 `axios` 原生响应结果的需求，可以使用 `pureClient` 来发请求，它没有使用任何拦截器，数据是按原样返回的，请求报错也不会出现全局错误提示。
