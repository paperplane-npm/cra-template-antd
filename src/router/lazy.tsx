import loadable from '@loadable/component'

import FullpageLoading from '@/components/loading/FullpageLoading'

export type ILazyOptions = Parameters<typeof loadable>[1]

/** 懒加载页面的默认配置，会传递给 @loadable/component */
const lazyComponentDefaultOptions: ILazyOptions = {
  fallback: <FullpageLoading />,
}

/** 调用 @loadable/component 懒加载组件，预设了一些默认配置 */
export default function lazy(loadFn: any, options?: ILazyOptions) {
  const LazyComponent = loadable(loadFn, { ...lazyComponentDefaultOptions, ...options })

  // @ts-expect-error 缺少 refs，更新 react 版本可解决
  return <LazyComponent />
}
