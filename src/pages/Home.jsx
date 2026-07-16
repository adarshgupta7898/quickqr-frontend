import { Link } from 'react-router-dom';
import Card from '../components/common/Card';

const Home = () => (
  <div className="space-y-8">
    <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm sm:p-10">
      <div className="max-w-2xl space-y-4">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">Fast QR creation</span>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Create and manage QR codes effortlessly.</h1>
        <p className="text-lg text-slate-600">Generate modern QR codes for URLs, text, email, Wi-Fi details, and contacts from a single experience.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/generate" className="btn btn-primary">
            Generate QR
          </Link>
          <Link to="/history" className="btn btn-secondary">
            View History
          </Link>
        </div>
      </div>
    </section>

    <div className="grid gap-6 md:grid-cols-3">
      <Card title="Quick generation" description="Build QR codes in a few clicks.">
        <p className="text-sm text-slate-600">The streamlined workspace helps you create and review QR content without friction.</p>
      </Card>
      <Card title="Saved history" description="Keep a record of every QR code you create.">
        <p className="text-sm text-slate-600">Visit the history page to revisit, share, or manage prior assets.</p>
      </Card>
      <Card title="Responsive layout" description="Everything adjusts smoothly across screen sizes.">
        <p className="text-sm text-slate-600">The dashboard is designed to feel polished on desktop and mobile.</p>
      </Card>
    </div>
  </div>
);

export default Home;
