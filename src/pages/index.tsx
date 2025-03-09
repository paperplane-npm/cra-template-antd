import { InfoCircleOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

/** 首页 */
export default function HomePage(): RC {
  const navigate = useNavigate()

  return (
    <div>
      <p>我是首页</p>

      <div>
        <Space direction="vertical">
          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => void navigate('/check/check-zustand')}
            type="primary"
          >
            点我去 zustand 测试页
          </Button>

          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => void navigate('/check/check-emotion')}
            type="primary"
          >
            点我去 emotion 测试页
          </Button>

          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => void navigate('/check/check-sass')}
            type="primary"
          >
            点我去 sass 测试页
          </Button>

          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => void navigate('/check/check-less')}
            type="primary"
          >
            点我去 less 测试页
          </Button>

          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => void navigate('/check/check-twcss')}
            type="primary"
          >
            点我去 tailwindcss 测试页
          </Button>

          <Button
            icon={<InfoCircleOutlined />}
            onClick={() => void navigate('/check/check-request')}
            type="primary"
          >
            点我去 request 测试页
          </Button>
        </Space>
      </div>
    </div>
  )
}
