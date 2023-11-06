import './index.scss'

const prefixCls = 'check-sass'

export default function CheckSass(): RC {
  return (
    <div className={prefixCls}>
      <p>sass 测试页 （字体是红色，则 sass 配置正确）</p>
    </div>
  )
}
