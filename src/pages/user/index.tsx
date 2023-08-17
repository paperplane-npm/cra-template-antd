import { Button } from 'antd'

import { useUserStore } from '@/services/user'

/** 用户页面 */
export default function UserPage(): RC {
  const userStore = useUserStore()

  const signInHandler = () => {
    userStore.signIn({ id: 'user1', name: 'Test User' })
  }

  return (
    <div>
      我是用户页面
      <Button onClick={signInHandler} type="primary">
        点我登录
      </Button>
    </div>
  )
}
