import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="sticky top-0 z-100 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 tracking-tight">
            RX Pharma
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-700 font-medium text-base lg:text-lg hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 pb-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span 
            className={`w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          ></span>
          <span 
            className={`w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 -translate-x-2' : ''
            }`}
          ></span>
          <span 
            className={`w-7 h-1 bg-gray-800 rounded transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col px-4 sm:px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-gray-700 font-medium py-3 border-b border-gray-200 hover:text-blue-500 transition-colors duration-300 last:border-b-0"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
