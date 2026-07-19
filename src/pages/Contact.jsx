import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'

const Contact = () => {
  const structuredData = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quickqr-frontend-flame.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://quickqr-frontend-flame.vercel.app/contact' },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <Seo
        title="Contact QuickQR | Reach Out for Support"
        description="Get in touch with the QuickQR team for support, feedback, or partnership inquiries. We're here to help with instant URL QR generation."
        pathname="/contact"
        structuredData={structuredData}
      />

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">Contact QuickQR</h1>
          <p className="text-sm text-slate-600">Questions about the app or backend integration? Reach out and we will reply as soon as possible.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Support</h2>
              <p className="mt-2 text-sm text-slate-600">Email us anytime for technical help or feature requests.</p>
              <a href="mailto:support@quickqr.app" className="mt-4 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">support@quickqr.app</a>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Get started</h2>
              <p className="mt-2 text-sm text-slate-600">Create a URL QR code now with QuickQR's fast, optimized workflow.</p>
              <Link to="/generate" className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">Generate QR</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
