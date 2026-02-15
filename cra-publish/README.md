此项目由 [@paperplane/cra-template-antd](https://www.npmjs.com/package/@paperplane/cra-template-antd) 创建，版本 %VERSION%。

# 命令

```bash
# 开发调试（3000 端口）
yarn dev
# 或
yarn start

# 打包编译（输出到 ./dist，此目录名可在 .env 中进行修改）
yarn build

# 使用 tsc 检查源码的 TypeScript 是否有问题
yarn check-types

# 使用 prettier 检查源码文件的格式
yarn format

# 使用 eslint 检查源码文件的语法
yarn lint
```

# 开发需知

- 建议先去 [`@paperplane/cra-template-antd` 主页](https://www.npmjs.com/package/@paperplane/cra-template-antd) 了解引入了哪些依赖项，并按需调整；
- 项目中默认包含很多测试页面，建议先挨个看一下效果，确认各个工具能正常工作；
- 包含了 `sass` 和 `less`，两者一般不会同时使用，建议在 `/craco.config.js` 把不使用的插件配置删除，并卸载依赖；
- 如果你的网站不是部署在根目录，请去 `package.json` 中修改 `homepage`，此后 `process.env.PUBLIC_URL` 会自动成为子目录，本模板已将它传给 `react-router`；
- 修改 `/craco.config.js` 后一般需要重启项目，如果项目重启后不生效，删除 `/node_modules/.cache` 再重启即可。

# 关于 API 数据请求

此模板预设你的后端响应被包装为：

```js
{
  "success": true,
  "code": 0,       // ← 在报错时不为 0
  "message": "",   // ← 通常仅在报错时才有 message
  "data": {}
}
```

以上结构定义在 `/src/types/common.d.ts` 内，你可以按需更改。

---

此模板中，提供了两个 `axios` 的客户端，分别名为：

- `client`： 默认封装的请求客户端，有默认参数、错误处理逻辑、响应数据拆包；
- `pureClient`： 较为纯净的客户端，只有默认参数、错误处理逻辑。

区别如下：

默认客户端：

```ts
// 默认客户端，.then 直接拿到给定的响应体
client.get<{ name: string }>('/').then(res => res.name)
```

纯净客户端：

```ts
// 纯净客户端，.then 拿到的是 axios 的 AxiosResponse 响应
// 先 .data 获取后台包装的响应，再 .data 获取响应的数据
// 提取数据比较麻烦，但是可以获取响应头、状态码等额外信息
pureClient.get<{ name: string }>('/').then(res => res.data.data.name)
```

此外：

- 在 `/.env` 中修改后端的 `baseURL`；
- 在 `/craco.config.js` 中的 `devServer` 字段配置开发环境的端口转发，有几个测试用例可以直接删除；
- 针对 `axios`，本项目提供了名为 `client` 的封装，推荐使用；对于可被页面多处使用、需保持更新的数据，还可以配合 `swr`；
- 因为后端会对响应进行包装，这样以来，使用 `axios` 请求时想取得响应数据，必须连续取两次 `.data`，这过于繁琐；本项目提供的 `client` 实例配置了响应拦截器，直接 `.then()` 就能获取响应数据，不需要写任何 `.data`；
- 此外，`client` 还会针对错误进行封装，尽可能统一成上述响应体的格式；
- 如果你有获取 `axios` 原生响应结果的需求，可以使用 `pureClient` 来发请求，它不会对数据进行拆包。
