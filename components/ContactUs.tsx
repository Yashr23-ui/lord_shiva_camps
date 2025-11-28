'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-light text-slate-900 mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-white" size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="font-medium text-slate-900 mb-2">Address</h4>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Chopta Village<br />
                    Rudraprayag District<br />
                    Uttarakhand, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-white" size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="font-medium text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-600 font-light">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-white" size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="font-medium text-slate-900 mb-2">Email</h4>
                  <p className="text-slate-600 font-light">
                    info@camps.com<br />
                    bookings@camps.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-900 text-white rounded-sm">
              <div className="flex items-start mb-4">
                <FiClock className="mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium mb-3">Business Hours</h4>
                  <p className="text-white/80 font-light leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition font-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition font-light"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition font-light"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition resize-none font-light"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-slate-900 text-white rounded-sm font-medium hover:bg-slate-800 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
              >
                <FiSend size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

