import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import data from '../data.json'

function Footer() {
  const navLinks = data.navLinks

  const iconMap = {
    Instagram: FaInstagram,
    LinkedIn: FaLinkedin,
    Twitter: FaTwitter
  }

  const socialLinks = data.socialLinks.map((s) => ({
    ...s,
    icon: iconMap[s.name] || FaInstagram
  }))

  return (
    <footer className="mt-auto bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-5">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              RX Pharma
            </p>
            <p className="mt-2 text-xs text-slate-300 leading-5">
              Trusted compound care, delivered with precision and care.
            </p>
          </div>

          <div>
            <ul className="space-y-2 text-xs text-slate-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-300">HQ:</span> {data.contact.hq}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Email:</span> {data.contact.email}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Phone:</span> {data.contact.phone}
            </p>

            <div className="mt-3 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className="inline-flex items-center justify-center w-6 h-6 rounded border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-slate-300 shadow-inner shadow-slate-950/30">
          <div className="overflow-hidden">
              <div className="animate-slide-lr whitespace-nowrap text-xs sm:text-sm">
              Fun fact: {data.funFact}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
