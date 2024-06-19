import { GalleryPageView } from '@/sections/gallery'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>

      <GalleryPageView />
    </>
  )
}
