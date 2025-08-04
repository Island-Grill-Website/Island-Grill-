import { Link } from "react-router-dom"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
]

const contactInfo = ["123 4th Street", "Brooklyn NY 10013", "(555) 123-4567", "info@islandgrill.com"]

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-bold text-green-500 hover:text-green-400 transition-colors mb-4"
            >
              Island Grill
            </Link>
            <p className="text-green-200 mb-6 max-w-md leading-relaxed">
              Authentic Caribbean cuisine in the heart of Brooklyn. Experience the taste of tradition with every bite.
            </p>
            <div className="flex space-x-4">{/* Add social media icons here when needed */}</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="text-green-300 hover:text-green-500 transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-green-300 hover:text-green-500 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-green-200">
              {contactInfo.map((info, index) => (
                <li key={index} className="leading-relaxed">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {currentYear} Island Grill Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}