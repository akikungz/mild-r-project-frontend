import { SongPageView } from '@/sections/song'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function SongPage() {
  return (
    <>
      <Helmet>
        <title>Song</title>
      </Helmet>

      <SongPageView />
    </>
  )
}
