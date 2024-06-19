import { AboutPageView } from '@/sections/about'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <AboutPageView />
    </>
  )
}
