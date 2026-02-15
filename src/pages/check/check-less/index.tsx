import './index.less'

export default function CheckLess() {
  return (
    <div>
      <p className="less-global">less 测试页（本段文字为橙色，则全局 less 正常生效）</p>
      <p className="less-file">less 测试页（本段文字为蓝色，则文件 less 正常生效）</p>
    </div>
  )
}
