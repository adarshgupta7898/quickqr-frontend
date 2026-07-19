import { useParams, Link } from 'react-router-dom'
import Seo from '../components/common/Seo'

const BlogPost = () => {
  const { slug } = useParams()
  const title = slug ? slug.replace(/[-_]/g, ' ') : 'Blog article'

  const structuredData = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quickqr-frontend-flame.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://quickqr-frontend-flame.vercel.app/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://quickqr-frontend-flame.vercel.app/blog/${slug}` },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <Seo
        title={`${title} | QuickQR Blog`}
        description={`Read the upcoming QuickQR blog post about ${title}.`}
        pathname={`/blog/${slug}`}
        structuredData={structuredData}
      />

      <section className="card">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-3 text-sm text-slate-600">This blog post is being prepared. Check back soon for QR code insights, performance tips, and URL marketing guidance.</p>
        <div className="mt-6">
          <Link to="/blog" className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Back to blog</Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
