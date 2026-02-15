import { Outlet } from 'react-router'

export default function CheckPage() {
  return (
    <div>
      <p>我是测试 Layout</p>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
