import { ComingSoonView } from '@/sections/coming-soon'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>

      <ComingSoonView />
    </>
  )
}
