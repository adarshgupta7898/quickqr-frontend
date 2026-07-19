import Seo from '../components/common/Seo'

const About = () => {
  const structuredData = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://quickqr-frontend-flame.vercel.app/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://quickqr-frontend-flame.vercel.app/about' },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <Seo
        title="About QuickQR | Fast URL QR Code Generator"
        description="Discover how QuickQR delivers secure URL QR codes instantly with a clean interface and fast generation workflow."
        pathname="/about"
        structuredData={structuredData}
      />

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm sm:p-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">About QuickQR</span>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">The fast, reliable URL QR code generator.</h1>
          <p className="text-lg text-slate-600">QuickQR makes it easy to create modern URL QR codes for business pages, promotions, and mobile links without sacrificing performance or quality.</p>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-slate-900">Why QuickQR?</h2>
          <p className="mt-3 text-sm text-slate-600">QuickQR focuses on one thing: generating URL QR codes quickly and reliably. The interface stays minimal while the backend handles every request with production-grade care.</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-slate-900">Built for scale</h2>
          <p className="mt-3 text-sm text-slate-600">The app is designed to load fast, remain accessible, and stay ready for future features like authenticated history and blog content.</p>
        </div>
      </div>
    </div>
  )
}

export default About
