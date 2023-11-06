import { Outlet } from 'react-router-dom'

export default function CheckPage(): RC {
  return (
    <div>
      <p>我是测试 Layout</p>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
