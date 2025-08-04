import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { Link } from "react-router-dom"
import { Button } from "./ui/Button"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors"
              onClick={closeMenu}
            >
              Island Grill
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/order"
                className="text-green-400 hover:text-green-300 px-3 py-2 text-sm font-medium font-semibold transition-colors"
              >
                Order Food
              </Link>
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-medium transition-colors">
              Make Reservation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-green-500 hover:text-green-400 hover:bg-green-500/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-green-700">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-green-400 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/order"
                className="block px-3 py-2 text-base font-medium text-green-400 hover:text-green-300 font-semibold transition-colors"
                onClick={closeMenu}
              >
                Order Food
              </Link>
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Make Reservation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}