import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/80 py-6 backdrop-blur">
    <div className="container-app grid gap-4 text-sm text-slate-500 sm:grid-cols-[1.5fr_1fr] sm:items-center">
      <div>
        <p>© 2026 QuickQR. Built for fast QR generation.</p>
        <p>Fast, secure, and mobile-ready URL QR codes.</p>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-4 sm:justify-end">
        <Link to="/about" className="text-slate-500 hover:text-blue-600">About</Link>
        <Link to="/privacy" className="text-slate-500 hover:text-blue-600">Privacy</Link>
        <Link to="/terms" className="text-slate-500 hover:text-blue-600">Terms</Link>
        <Link to="/contact" className="text-slate-500 hover:text-blue-600">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
