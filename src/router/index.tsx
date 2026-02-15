import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router'

import MainLayout from '@/components/layout/MainLyout'
import HomePage from '@/pages'
import CheckPage from '@/pages/check'
import Page404 from '@/pages/fallbacks/page-404'

import lazy from './lazy'

export const routerConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: 'check',
        element: <CheckPage />,
        children: [
          { path: 'check-zustand', element: lazy(() => import('@/pages/check/check-zustand')) },
          { path: 'check-icons', element: lazy(() => import('@/pages/check/check-icons')) },
          { path: 'check-i18n', element: lazy(() => import('@/pages/check/check-i18n')) },
          { path: 'check-emotion', element: lazy(() => import('@/pages/check/check-emotion')) },
          { path: 'check-sass', element: lazy(() => import('@/pages/check/check-sass')) },
          { path: 'check-less', element: lazy(() => import('@/pages/check/check-less')) },
          { path: 'check-twcss', element: lazy(() => import('@/pages/check/check-tailwindcss')) },
          { path: 'check-request', element: lazy(() => import('@/pages/check/check-request')) },
        ],
      },

      { path: '*', element: <Page404 /> },
    ],
  },
]

export const router = createBrowserRouter(routerConfig, { basename: process.env.PUBLIC_URL })

export default function RouterEntry() {
  // 注意此处的 fallbackElement 仅适用于 loader() 加载过程
  return <RouterProvider router={router} />
}
