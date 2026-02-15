import { DatePicker } from 'antd'

export default function CheckI18N() {
  return (
    <div>
      <p>i18n 测试页</p>

      <DatePicker />

      <p>展开后，月份、星期应该是汉字</p>
    </div>
  )
}
