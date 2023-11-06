import { Button, Space } from 'antd'

import { useUserStore } from '@/services/user'

/** 用户页面 */
export default function CheckZustand(): RC {
  const userStore = useUserStore()

  const signInHandler = () => {
    userStore.signIn({ id: 'user1', name: 'Test User' })
  }

  const signOutHandler = () => {
    userStore.logout()
  }

  return (
    <div>
      <p>我是 zustand 测试页（能正常登录、后退用户名不消失，表示 zustand 正常工作）</p>

      <Space>
        <Button onClick={signInHandler} type="primary">
          点我登录
        </Button>

        <Button onClick={signOutHandler} type="primary">
          点我注销
        </Button>
      </Space>
    </div>
  )
}
