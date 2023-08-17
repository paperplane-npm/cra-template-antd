import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import React from 'react'
import ReactDOM from 'react-dom/client'

import RouterEntry from './router'

import '@/global/app.less'

dayjs.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.Fragment>
    <ConfigProvider locale={zhCN}>
      <RouterEntry />
    </ConfigProvider>
  </React.Fragment>
)
