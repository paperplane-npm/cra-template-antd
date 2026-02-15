import { App, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { createRoot } from 'react-dom/client'

import RouterEntry from './router'

import '@/styles/tailwind.css'

dayjs.locale('zh-cn')

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ConfigProvider locale={zhCN} theme={{}}>
    <App>
      <RouterEntry />
    </App>
  </ConfigProvider>
)
