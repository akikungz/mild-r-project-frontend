import { BlogPageView } from '@/sections/blog'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <BlogPageView />
    </>
  )
}
