import { BarChartOutlined, CheckOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Space } from 'antd'

export default function CheckIcons() {
  return (
    <Space direction="vertical">
      <p>icons 测试页</p>

      <Space>
        <CheckOutlined />
        <CloseCircleOutlined />
        <BarChartOutlined />
      </Space>

      <p>图标显示正常，则 @ant-design/icons 安装成功</p>
    </Space>
  )
}
