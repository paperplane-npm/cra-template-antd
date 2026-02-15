import { Outlet } from 'react-router'

import { useUserState } from '@/services/user'

/** 全站主 Layout */
export default function MainLayout() {
  const currentUser = useUserState(s => s.user)
  const username = currentUser?.name

  return (
    <div>
      <p>我是页面 Layout，当前登录用户： {username || '(未登录)'}</p>
      <Outlet />
    </div>
  )
}
