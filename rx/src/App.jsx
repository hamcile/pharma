import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import HomePage from './pages/index'
import ContactPage from './pages/contact'
import AboutPage from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
