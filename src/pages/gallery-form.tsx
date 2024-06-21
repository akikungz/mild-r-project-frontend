import { GalleryFormPageView } from '@/sections/gallert-form'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function GalleryFormPage() {
  return (
    <>
      <Helmet>
        <title>Gallery Form</title>
      </Helmet>

      <GalleryFormPageView />
    </>
  )
}
