import loadable from '@loadable/component'
import { Spin } from 'antd'
import { FC } from 'react'

/** 调用 @loadable/component 懒加载组件，预设了一些默认配置 */
export default function lazy(loadFn: any, options?: Parameters<typeof loadable>[1]) {
  const LazyComponent = loadable(loadFn, { fallback: <Spin />, ...options }) as FC

  return <LazyComponent />
}
