import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Bella Vista</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Authentic Italian cuisine in the heart of Little Italy. Experience the taste of tradition with every bite.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-orange-400">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-gray-300 hover:text-orange-400">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-orange-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-orange-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Italian Street</li>
              <li>Little Italy, NY 10013</li>
              <li>(555) 123-4567</li>
              <li>info@bellavista.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
 