import React from 'react'
import { FiHeart, FiMapPin, FiAward } from 'react-icons/fi'

const hosts = [
  {
    name: 'John & Sarah',
    role: 'Your Hosts',
    description: 'With over 10 years of experience in hospitality, we love sharing our home and local knowledge with travelers from around the world.',
    interests: ['Cooking', 'Travel', 'Photography'],
  },
  {
    name: 'Local Community',
    role: 'Your Guides',
    description: 'Our extended family of local guides and neighbors are always ready to help you discover hidden gems and authentic experiences.',
    interests: ['Culture', 'History', 'Adventure'],
  },
]

export default function AboutHosts() {
  return (
    <section id="hosts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
            Meet Your Hosts
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Friendly, knowledgeable, and always here to make your stay special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {hosts.map((host, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-slate-900 rounded-sm flex items-center justify-center text-white text-2xl font-light mr-6">
                  {host.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-slate-900">{host.name}</h3>
                  <p className="text-slate-600 font-light">{host.role}</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed font-light">
                {host.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {host.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-900 text-white rounded-sm text-sm font-light"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
              <FiHeart className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-3">
              Passionate Hosts
            </h3>
            <p className="text-slate-600 font-light">
              We genuinely care about your experience and comfort
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
              <FiMapPin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-3">
              Local Experts
            </h3>
            <p className="text-slate-600 font-light">
              Get the best recommendations from people who know the area
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 text-center">
            <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
              <FiAward className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-3">
              Award-Winning Service
            </h3>
            <p className="text-slate-600 font-light">
              Recognized for excellence in hospitality and guest satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

