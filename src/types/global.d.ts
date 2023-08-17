/** ID 的类型 */
type IDType = string

/** React 组件 */
type RC = ReturnType<React.FC>

/** 组件基础属性 */
interface IProps {
  style?: React.CSSProperties
  className?: string
  children?: ReactNode
}

/** 获取数组的类型 */
type TypeofArray<T extends any[]> = T extends (infer R)[] ? R : never

/** 获取 Promise 的类型 */
type TypeofPromise<T> = T extends Promise<infer R> ? R : never
