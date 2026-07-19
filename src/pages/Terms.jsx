import Seo from '../components/common/Seo'

const Terms = () => {
  const structuredData = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quickqr-frontend-flame.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'Terms', item: 'https://quickqr-frontend-flame.vercel.app/terms' },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <Seo
        title="QuickQR Terms of Service"
        description="Read the terms of service for QuickQR, covering acceptable use and URL QR code generation policies."
        pathname="/terms"
        structuredData={structuredData}
      />

      <section className="card">
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-600">By using QuickQR, you agree to generate QR codes responsibly and comply with applicable laws. QuickQR is provided as a lightweight URL QR generation tool.</p>
        <div className="mt-6 space-y-4 text-sm text-slate-600">
          <div>
            <h2 className="font-semibold text-slate-900">Usage policy</h2>
            <p className="mt-2">Only URL QR codes are permitted. The service is intended for fast link sharing and should not be used for malicious or harmful content.</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900">Availability</h2>
            <p className="mt-2">QuickQR aims for high availability but makes no guarantees of uptime. The backend remains connected to Railway infrastructure for reliable operation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
