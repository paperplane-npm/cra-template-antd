import './index.scss'

export default function CheckSass() {
  return (
    <div>
      <p className="sass-global">sass 测试页（本段文字为红色，则全局 less 正常生效）</p>
      <p className="sass-file">sass 测试页（本段文字为绿色，则文件 less 正常生效）</p>
    </div>
  )
}
