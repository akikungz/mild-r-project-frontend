import SimpleLayout from '@/layouts/simple'
import AboutPage from '@/pages/about'
import BlogPage from '@/pages/blog'
import CalendarPage from '@/pages/calendar'
import ComingSoonPage from '@/pages/coming-soon'
import GalleryPage from '@/pages/gallery'
import HomePage from '@/pages/home'
import SongPage from '@/pages/song'
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
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <HomePage /> },
        { path: 'calendar', element: <CalendarPage /> },
        { path: 'gallery', element: <GalleryPage /> },
        { path: 'song', element: <SongPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'about', element: <AboutPage /> },
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
