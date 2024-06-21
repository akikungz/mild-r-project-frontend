import { BlogInfoPageView } from '@/sections/blog-info'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

// ----------------------------------------------------------------------

export default function BlogInfoPage() {
  const { blogId } = useParams()

  useEffect(() => {
    console.log(blogId)
  }, [blogId])

  return (
    <>
      <Helmet>
        <title>{blogId}</title>
      </Helmet>

      <BlogInfoPageView />
    </>
  )
}
