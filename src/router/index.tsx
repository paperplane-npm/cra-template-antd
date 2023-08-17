import loadable from '@loadable/component'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

import MainLayout from '@/components/layout/MainLyout'
import HomePage from '@/pages'

const UserPage = loadable(() => import('@/pages/user'))

const routerConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/user', element: <UserPage /> },
    ],
  },
]

const router = createBrowserRouter(routerConfig, { basename: process.env.PUBLIC_URL })

export default function RouterEntry(): RC {
  return <RouterProvider router={router} />
}
