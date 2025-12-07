'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/logo.png"
                  alt="Lord Shiva Camps Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1
                className={`text-xl md:text-2xl font-light transition-colors ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                Lord Shiva Camps
              </h1>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors hover:text-slate-600 font-light ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('stays')}
              className={`transition-colors hover:text-slate-600 font-light ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Stays
            </button>
            <button
              onClick={() => scrollToSection('treks')}
              className={`transition-colors hover:text-slate-600 font-light ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Treks
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-slate-600 font-light ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('hosts')}
              className={`transition-colors hover:text-slate-600 font-light ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Hosts
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-slate-600 font-light ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-light"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('stays')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-light"
            >
              Stays
            </button>
            <button
              onClick={() => scrollToSection('treks')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-light"
            >
              Treks
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-light"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('hosts')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-light"
            >
              Hosts
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-light"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}