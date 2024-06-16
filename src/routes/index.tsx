import SimpleLayout from '@/layouts/simple'
import ComingSoonPage from '@/pages/coming-soon'
// import { Suspense, lazy } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <SimpleLayout>
          {/* <Suspense> */}
          <Outlet />
          {/* </Suspense> */}
        </SimpleLayout>
      ),
      children: [
        { element: <Navigate to="/coming-soon" />, index: true },
        { path: 'coming-soon', element: <ComingSoonPage /> },
      ],
    },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ])

  return routes
}
