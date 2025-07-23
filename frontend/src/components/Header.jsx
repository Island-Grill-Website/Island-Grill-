"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              Bella Vista
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#menu" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">
                Menu
              </Link>
              <Link href="#about" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-orange-600 hover:bg-orange-700">Make Reservation</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">
                Home
              </Link>
              <Link href="#menu" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">
                Menu
              </Link>
              <Link href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600">
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600"
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Make Reservation</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}