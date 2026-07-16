import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import GenerateQR from './pages/GenerateQR'
import History from './pages/History'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <Navbar />
      <main className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateQR />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
