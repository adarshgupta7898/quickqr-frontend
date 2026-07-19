import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'

const Blog = () => {
  const structuredData = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quickqr-frontend-flame.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://quickqr-frontend-flame.vercel.app/blog' },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <Seo
        title="QuickQR Blog | URL QR Code Best Practices"
        description="QuickQR blog coming soon with tips for QR code usage, URL marketing, and modern web sharing strategies."
        pathname="/blog"
        structuredData={structuredData}
      />

      <section className="card">
        <h1 className="text-3xl font-bold text-slate-900">QuickQR Blog</h1>
        <p className="mt-3 text-sm text-slate-600">Content coming soon. The blog section is ready for future posts about QR code best practices, URL sharing, and product updates.</p>
        <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">What to expect</h2>
          <p className="mt-2 text-sm text-slate-600">Practical guides, performance tips, and modern web growth strategies for people who use QR codes to connect with customers faster.</p>
          <Link to="/generate" className="mt-4 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Generate a QR now</Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
