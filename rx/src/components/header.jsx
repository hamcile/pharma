import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import data from '../data.json'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = data.navLinks

  return (
    <header className="sticky top-0 z-100 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <Link to="/">
          <h1 className="m-0 text-2xl lg:text-3xl font-bold text-gray-800 tracking-normal px-3 py-2 rounded-lg border border-transparent hover:border-gray-300 transition-all duration-300 cursor-pointer">
            {data.brand.name}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className={`text-gray-700 font-medium text-base lg:text-lg px-3 py-2 rounded-lg border transition-all duration-300 ${
                    isActive ? 'border-gray-300' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
              )
            })}
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
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className={`block text-gray-700 font-medium py-3 px-3 rounded-lg border transition-all duration-300 ${
                    isActive ? 'border-gray-300' : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
