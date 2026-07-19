import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import Seo from "../components/common/Seo";

const Home = () => {
  return (
    <div className="space-y-10">
      <Seo
        title="Free QR Code Generator - Create Unlimited QR Codes Online | QuickQR"
        description="Generate unlimited QR codes for URLs instantly. Download high-quality QR codes for free. Fast, secure and mobile-friendly QR code generator."
        pathname="/"
        structuredData={[
          {
            "@type": "WebSite",
            name: "QuickQR",
            url: "https://quickqr-frontend-flame.vercel.app/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://quickqr-frontend-flame.vercel.app/generate",
              "query-input": "required name=content",
            },
          },
          {
            "@type": "Organization",
            name: "QuickQR",
            url: "https://quickqr-frontend-flame.vercel.app/",
            logo: "https://quickqr-frontend-flame.vercel.app/favicon.svg",
          },
          {
            "@type": "WebApplication",
            name: "QuickQR",
            url: "https://quickqr-frontend-flame.vercel.app/",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
          },
        ]}
      />

      {/* Hero */}
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm sm:p-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            Fast URL QR Generation
          </span>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Create High-Quality URL QR Codes in Seconds
          </h1>

          <p className="text-lg text-slate-600">
            Generate unlimited QR codes for URLs instantly. Download
            high-quality QR images for free with a secure backend and
            lightning-fast performance.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/generate" className="btn btn-primary">
              Generate QR
            </Link>

            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose QuickQR?
          </h2>

          <p className="mt-4 text-sm text-slate-600">
            QuickQR is designed for speed, simplicity and reliability.
            Generate beautiful URL QR codes without unnecessary options.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Instant Generation
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Generate QR codes within seconds using our optimized backend.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                SEO Optimized
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Built with metadata, structured data, OpenGraph and Twitter
                Cards for better visibility.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Secure Backend
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Powered by Spring Boot and Railway with secure API
                communication.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            How It Works
          </h2>

          <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm text-slate-600">
            <li>Enter a title and URL.</li>
            <li>Click Generate.</li>
            <li>Download your QR Code instantly.</li>
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Fast Generation"
          description="Create QR codes instantly."
        >
          <p className="text-sm text-slate-600">
            Optimized backend ensures extremely fast QR generation.
          </p>
        </Card>

        <Card
          title="SEO Ready"
          description="Built for Google Search."
        >
          <p className="text-sm text-slate-600">
            Structured data, sitemap, robots.txt and metadata included.
          </p>
        </Card>

        <Card
          title="Secure"
          description="Powered by Railway."
        >
          <p className="text-sm text-slate-600">
            Uses a secure Spring Boot backend with MySQL database.
          </p>
        </Card>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-5 text-sm text-slate-600">
          <div>
            <h3 className="font-semibold text-slate-900">
              What is a QR Code?
            </h3>
            <p className="mt-2">
              A QR code is a scannable image that opens a URL using a phone
              camera.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Is QuickQR Free?
            </h3>
            <p className="mt-2">
              Yes. QuickQR allows unlimited URL QR code generation for free.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Do QR Codes Expire?
            </h3>
            <p className="mt-2">
              No. Static URL QR codes do not expire as long as the URL remains
              available.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Can I Download My QR Code?
            </h3>
            <p className="mt-2">
              Yes. Every generated QR code can be downloaded immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;