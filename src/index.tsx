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

root.render(
  <React.Fragment>
    <ConfigProvider locale={zhCN} theme={{}}>
      <App>
        <RouterEntry />
      </App>
    </ConfigProvider>
  </React.Fragment>
)
