import { App, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import React from 'react'
import ReactDOM from 'react-dom/client'

import RouterEntry from './router'

import '@/styles/app.scss'
import '@/styles/tailwind.css'

dayjs.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

/**
 * 如果遇到了无法使用 tailwindcss 覆盖组件库样式的问题，参考：
 * https://ant-design.antgroup.com/docs/react/compatible-style-cn
 *
 * 可以使用组件：
 * <StyleProvider hashPriority="high"></StyleProvider>
 * 来包裹入口代码
 */

root.render(
  <React.Fragment>
    <ConfigProvider locale={zhCN} theme={{}}>
      <App>
        <RouterEntry />
      </App>
    </ConfigProvider>
  </React.Fragment>
)
