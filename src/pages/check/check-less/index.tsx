import './index.less'

export default function CheckLess(): RC {
  return (
    <div>
      <p className="less-test">less 测试页（本段文字为绿色，则全局 less 正常生效）</p>
      <p className="check-less">less 测试页（本段文字为红色，则文件 less 正常生效）</p>
    </div>
  )
}
