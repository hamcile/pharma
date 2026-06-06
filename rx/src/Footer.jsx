function Footer() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: '📸' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' }
  ]

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
                  <a
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-300">HQ:</span> 123 Remedy Lane, Springfield, IL 62704
            </p>
            <p className="mt-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Email:</span> support@rxpharma.example
            </p>
            <p className="mt-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Phone:</span> (555) 012-3456
            </p>

            <div className="mt-3 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="inline-flex items-center justify-center w-6 h-6 rounded border border-slate-700 bg-slate-900/80 text-sm transition hover:border-slate-500 hover:bg-slate-800"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-slate-300 shadow-inner shadow-slate-950/30">
          <div className="overflow-hidden">
            <div className="animate-slide-lr whitespace-nowrap text-xs sm:text-sm">
              Fun fact: RX Pharma packages over 7,500 personalized prescriptions a month with a 99.9% accuracy rate and ships them in sustainable packaging. 🚚✨
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
