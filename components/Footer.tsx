'use client'

import { useState } from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  const [email, setEmail] = useState('')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic here
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-white/60 font-light">Stay updated with our latest offers and news</p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 font-light"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-slate-900 rounded-sm font-medium hover:bg-white/90 transition-colors uppercase tracking-wide text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-6">Camps</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Your adventure in nature. Experience authentic camping and create unforgettable outdoor memories.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60 font-light">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stays')}
                  className="hover:text-white transition-colors"
                >
                  Stays
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('treks')}
                  className="hover:text-white transition-colors"
                >
                  Treks
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('hosts')}
                  className="hover:text-white transition-colors"
                >
                  Our Hosts
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60 font-light">
              <li>Chopta Village</li>
              <li>Rudraprayag District, Uttarakhand</li>
              <li>+91 (XXX) XXX-XXXX</li>
              <li>info@camps.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-white/40 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Camps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

