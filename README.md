# @paperplane/cra-template-antd [![npm](https://img.shields.io/npm/v/@paperplane/cra-template-antd)](https://www.npmjs.com/package/@paperplane/cra-template-antd)

基于 `antd`@6 的现代化 Create-React-App 模板。

# 告知

因为 `create-react-app` 已停止更新，此项目的 v3 版本将是最后一个版本；后续将转为维护 vite 模板。

# 使用方式

```bash
npx create-react-app <你的项目名> --template @paperplane/antd
```

执行命令后，便会在当前目录创建一个项目文件夹，进入后即可开发。

建议阅读生成的项目文件夹中的 `README.md`，了解这个模板的用法。

# 介绍

曾经，使用 Create-React-App 或组件库提供的 CLI 工具新建项目时，存在这些问题：

- 大部分常用的包（如 `lodash`）都需要单独安装；
- 没有样板代码，例如路由配置、入口 Provider、全局 Layout 布局、请求拦截器等，这些都需要去复制一遍；
- 默认的插件配置无法满足需求，必须再使用一些工具（如 `@craco/craco`）来定制 Webpack 插件；
- 依赖老旧，甚至不能使用 `pnpm`。

因此，本项目旨在提供一个相对完善的项目模板，方便开发者快速创建前端项目。

模版中包含了这些内容：

- 组件库、CSS-In-JS 库、Sass、Less、TailwindCSS、路由、各种常用的工具库；
- 对于以上这些工具，已经提前配置好了 Webpack、Babel 的各个插件，可以开箱即用；
- 提供了 Prettier、ESLint、EditorConfig 等格式化配置；
- 模板中已经做好了全局配置的初始化，如：路由、Layout、请求拦截器与封装、状态管理等都有样板代码；
- 模板中还有数个测试页面，这些页面不光可以当做样板代码，还能测试模板中各个依赖项是否运行正常。

---

受到 Create-React-App 模板的限制，此项目做出以下妥协：

- ESLint、Browserslist 必须以 JSON 格式配置在 `package.json` 里，无法移出，因此无法使用 ESLint v9 及以后的版本；
- 因部分依赖版本太旧，创建项目时会出现警告，忽略即可，此外还在 `package.json` 中通过 `overrides` 和 `resolutions` 覆写了部分依赖的版本号；
- 因为新版不再被支持，TailwindCSS 使用 v3 而不是最新版。

# 依赖项

依赖项：

- 使用 `antd` 组件库，`@ant-design/icons` 图标库;
- 使用 `emotion` 来提供 CSS-In-JS 支持；
- 使用了 `less`；
- 使用了 `sass`，注意不是 `node-sass`；
- 使用了 `tailwindcss`@3，并配置了相关的 `prettier` 插件，注意默认关闭了 `tailwindcss` 的全局 CSS 重置；
- 使用 `@craco/craco` 和 `craco-antd` 来进行配置 Webpack、Babel；
- 路由管理使用 `react-router`@7；
- 使用 `zustand` 来作为状态管理，依赖中还包含了 `store2` 用来管理本地存储；
- 使用 `axios` 来作为请求库，依赖中还包含了 `swr` 用来实现 SWR 状态；
- 使用 `dayjs` 作为时间日期库，它是 `antd`@6 推荐使用的库；
- 此外，依赖中还有 `ahooks`、`lodash-es`、`clsx` 来作为工具函数。

# 二次开发指南

Create-React-App 模板开发，可以参考 [官方文档](https://create-react-app.dev/docs/custom-templates)。

```bash
# 安装依赖
yarn

# 本地启动调试
# 此时可以修改代码和配置，安装依赖等
yarn dev
```

测试开发中的 cra 模板：

```bash
# 生成 cra 模板
yarn prepublishOnly

# 在某个目录使用模板生成项目，测试是否可用
npx create-react-app test-cra-template-antd --template file:../path/to/cra-template-antd
```
