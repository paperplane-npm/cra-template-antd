import { Outlet } from 'react-router-dom'

import { useUserStore } from '@/services/user'

/** 全站主 Layout */
export default function MainLayout(): RC {
  const currentUser = useUserStore(s => s.userInfo)
  const username = currentUser?.name

  return (
    <div>
      <p>我是页面 Layout，当前登录用户： {username || '(未登录)'}</p>
      <Outlet />
    </div>
  )
}
