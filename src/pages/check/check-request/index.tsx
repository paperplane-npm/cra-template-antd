import { Button, Space } from 'antd'
import { useState } from 'react'

import { client, pureClient } from '@/utils/client'

export default function CheckRequest() {
  const [result, setResult] = useState('(无)')

  return (
    <div>
      <p>axios 客户端测试页面</p>

      <Space direction="vertical">
        <Button
          type="primary"
          onClick={() => client.get('/user').then(data => setResult(JSON.stringify(data)))}
        >
          成功请求
        </Button>

        <Button
          type="primary"
          onClick={() =>
            // pureClient 拿到的是原始响应
            pureClient.get('/user').then(data => setResult(JSON.stringify(data.data.data)))
          }
        >
          成功请求 (不自动拆包)
        </Button>

        <Button
          type="primary"
          danger
          onClick={() => client.get('/error').catch(err => setResult(err.message))}
        >
          业务报错 (有响应，但 success 为 false)
        </Button>

        <Button
          type="primary"
          danger
          onClick={() => client.get('/nothing').catch(err => setResult(err.message))}
        >
          原生报错 (请求直接错误，例如网络错误/跨域错误/非 2xx 状态码)
        </Button>
      </Space>

      <p>结果：{result}</p>
    </div>
  )
}
