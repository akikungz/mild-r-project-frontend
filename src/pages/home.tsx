import { HomePageView } from '@/sections/home'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <HomePageView />
    </>
  )
}
