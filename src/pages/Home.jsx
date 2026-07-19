import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Seo from '../components/common/Seo';

const Home = () => (
  <div className="space-y-10">
    <Seo
      title="Free QR Code Generator - Create Unlimited QR Codes Online | QuickQR"
      description="Generate unlimited QR codes for URLs instantly. Download high-quality QR codes for free. Fast, secure and mobile-friendly QR code generator."
      pathname="/"
      structuredData={[
        {
          '@type': 'WebSite',
          name: 'QuickQR',
          url: 'https://quickqr-frontend-flame.vercel.app/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://quickqr-frontend-flame.vercel.app/generate',
              'query-input': 'required name=content',
            },
          },
          {
            '@type': 'Organization',
            name: 'QuickQR',
            url: 'https://quickqr-frontend-flame.vercel.app/',
            logo: 'https://quickqr-frontend-flame.vercel.app/favicon.svg',
          },
          {
            '@type': 'WebApplication',
            name: 'QuickQR',
            url: 'https://quickqr-frontend-flame.vercel.app/',
            applicationCategory: 'UtilitiesApplication',
            operatingSystem: 'Web',
    <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm sm:p-10">
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">Fast URL QR generation</span>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Create high-quality URL QR codes in seconds.</h1>
        <p className="text-lg text-slate-600">Generate unlimited QR codes for URLs instantly. Download ready-to-use QR images with secure backend integration and responsive performance.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/generate" className="btn btn-primary">
            Generate QR
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn more
          </Link>
        </div>
      </div>
    </section>

    <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">Why QuickQR</h2>
        <p className="mt-4 text-sm text-slate-600">QuickQR is built for speed, clarity, and modern web sharing. It focuses entirely on URL QR codes so every interaction stays fast and reliable.</p>
        <div className="mt-8 space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Fast generation</h3>
            <p className="mt-2 text-sm text-slate-600">Create a QR code in moments with minimal input and optimized backend flow.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">SEO-ready pages</h3>
            <p className="mt-2 text-sm text-slate-600">Every page includes metadata, OpenGraph, Twitter cards, and structured schema data for better indexing.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Secure backend</h3>
            <p className="mt-2 text-sm text-slate-600">API calls use a secure Railway endpoint and no sensitive secrets are exposed in client code.</p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
        <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm text-slate-600">
          <li>Enter a title and URL into the generator.</li>
          <li>Send the request to the secure backend.</li>
          <li>Download the high-quality QR image instantly.</li>
        </ol>
      </div>
    </section>

    <section className="grid gap-6 md:grid-cols-3">
      <Card title="Ready for web" description="Create URL QR codes that look great on screens and printed media.">
        <p className="text-sm text-slate-600">The generator creates crisp output with mobile-friendly usage in mind.</p>
      </Card>
      <Card title="SEO optimized" description="Metadata, schema, and fast loading behavior are applied across pages.">
        <p className="text-sm text-slate-600">Structured data and canonical URLs improve search engine visibility.</p>
      </Card>
      <Card title="Secure backend" description="The application uses a Railway production API without exposing secrets.">
        <p className="text-sm text-slate-600">The frontend calls the secure backend URL and keeps requests scoped to URL QR generation.</p>
      </Card>
    </section>

    <section className="card">
      <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-5 text-sm text-slate-600">
        <div>
          <h3 className="font-semibold text-slate-900">What is a QR Code?</h3>
          <p className="mt-2">A QR code is a scannable image that encodes a URL, making it easy to open links from a phone camera or scanner app.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">How do I generate a QR Code?</h3>
          <p className="mt-2">Fill in a title and URL, then click Generate. Your QR code is created instantly and available for download.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Is QuickQR free?</h3>
          <p className="mt-2">Yes. QuickQR provides free URL QR code generation with a fast and simple experience.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Do QR Codes expire?</h3>
          <p className="mt-2">No. Generated QR codes remain valid as long as the underlying URL is reachable.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Can I download QR Codes?</h3>
          <p className="mt-2">Yes. Every generated QR code includes a Download button so you can save the image file immediately.</p>
        </div>
      </div>
    </section>
  </div>
)

export default Home;
