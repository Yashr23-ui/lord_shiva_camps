'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiExternalLink } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // EmailJS configuration
      // You'll need to replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS is not configured. Please set up your EmailJS credentials.')
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          // Template variables - matching your EmailJS template
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          title: 'New Contact Form Submission',
          time: new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short'
          }),
          to_email: 'lordshivacamps@gmail.com', // Your email
        },
        publicKey
      )

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at lordshivacamps@gmail.com',
      })
    } finally {
      setIsSubmitting(false)
    }
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
                  <p className="text-slate-600 font-light leading-relaxed mb-3">
                    Chopta Village<br />
                    Rudraprayag District<br />
                    Uttarakhand, India
                  </p>
                  <a
                    href="https://share.google/uDO6QrTLbwfgQFnvD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-medium text-sm transition-colors"
                  >
                    <span>Get Directions</span>
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-white" size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="font-medium text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-600 font-light">
                    +91 9997617346 (Primary)<br />
                    +91 7895866292 (Secondary)
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
                    lordshivacamps@gmail.com<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-sm flex items-start gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <FiCheckCircle className="mt-0.5 flex-shrink-0" size={20} />
                ) : (
                  <FiAlertCircle className="mt-0.5 flex-shrink-0" size={20} />
                )}
                <p className="text-sm font-light">{submitStatus.message}</p>
              </div>
            )}

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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition font-light disabled:bg-slate-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition font-light disabled:bg-slate-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition font-light disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder="+91 9997617346"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition resize-none font-light disabled:bg-slate-50 disabled:cursor-not-allowed"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-slate-900 text-white rounded-sm font-medium hover:bg-slate-800 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-2">Find Us</h3>
            <p className="text-slate-600 font-light">Visit us at our location in Chopta Village</p>
          </div>
          <div className="relative w-full h-96 rounded-sm overflow-hidden shadow-lg border border-slate-200 group">
            <a
              href="https://share.google/uDO6QrTLbwfgQFnvD"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543084.7444990098!2d78.29648095863993!3d30.514104400124268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909cb2bc7857b0b%3A0xc5f02b3fb4aba578!2sLord%20Shiva%20Camp!5e1!3m2!1sen!2sin!4v1765099102103!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Lord Shiva Camps Location"
              ></iframe>
              {/* Overlay button */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-sm px-6 py-3 rounded-sm shadow-lg flex items-center gap-2">
                  <FiMapPin size={20} className="text-slate-900" />
                  <span className="text-slate-900 font-medium">Click to open in Google Maps</span>
                  <FiExternalLink size={18} className="text-slate-900" />
                </div>
              </div>
            </a>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://share.google/uDO6QrTLbwfgQFnvD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-light text-sm transition-colors"
            >
              <FiMapPin size={16} />
              <span>Get Directions on Google Maps</span>
              <FiExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}