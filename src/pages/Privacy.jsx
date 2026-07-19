import Seo from '../components/common/Seo'

const Privacy = () => {
  const structuredData = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quickqr-frontend-flame.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'Privacy', item: 'https://quickqr-frontend-flame.vercel.app/privacy' },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <Seo
        title="QuickQR Privacy Policy"
        description="Read QuickQR's privacy policy to understand how URL QR generation data is handled securely and transparently."
        pathname="/privacy"
        structuredData={structuredData}
      />

      <section className="card">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-600">QuickQR respects your privacy. The app only sends URL content to the backend in order to generate QR codes and does not expose any user secrets in the frontend.</p>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <div>
            <h2 className="font-semibold text-slate-900">Data usage</h2>
            <p className="mt-2">Only the URL and optional title are sent to the backend for QR generation. No tracking cookies or analytics scripts are added by default.</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Security</h2>
            <p className="mt-2">All API calls use a secure HTTPS backend endpoint by default. No secrets are exposed in client-side code.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
