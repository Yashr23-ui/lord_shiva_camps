import React from 'react'
import Image from 'next/image'
import { FiHeart, FiMapPin, FiAward } from 'react-icons/fi'

const hosts = [
  {
    name: 'Ravi Kandari',
    role: 'Founder & Your Host',
    description: 'For many years, Ravi served in maritime security, working across vast oceans and protecting people with unwavering focus. Despite the long voyages and demanding responsibilities, his heart always belonged to the mountains he grew up in. After completing his service, he returned to Chopta with a dream—to create a place where travellers could experience the peace, purity, and warmth he always found here. Today, Ravi welcomes guests with the discipline of his security background and the kindness of true Himalayan hospitality.',
    interests: ['Maritime Security', 'Mountain Trekking', 'Local Heritage'],
    image: '/images/host-1.jpg',
  },
  {
    name: 'Rahul Bisht',
    role: 'Co-Host & Trek Guide',
    description: 'From the oceans to the Himalayas – Rahul spent years serving in maritime security, working across international waters and protecting people with unwavering focus. Yet through every voyage, the mountains of Uttarakhand always called him back. Today, he brings together the discipline of his security background and the warmth of Himalayan hospitality—ensuring every guest feels safe, guided, and genuinely welcomed.',
    interests: ['Maritime Security', 'Trekking', 'Mountain Culture'],
    image: '/images/host-2.jpg',
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

        {/* Hosts Section - Large Photos */}
        <div className="space-y-24 mb-20">
          {hosts.map((host, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image - Large and Prominent */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={host.image}
                    alt={host.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay with name at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-light mb-2">{host.name}</h3>
                    <p className="text-lg text-white/90 font-light">{host.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    {host.description}
                  </p>
                  
                  {/* Interests/Tags */}
                  <div className="flex flex-wrap gap-3">
                    {host.interests.map((interest, i) => (
                      <span
                        key={i}
                        className="px-5 py-2.5 bg-slate-900 text-white rounded-sm text-sm font-light tracking-wide"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-slate-50 rounded-sm border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
              <FiHeart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-3">
              Passionate Hosts
            </h3>
            <p className="text-slate-600 font-light leading-relaxed">
              We genuinely care about your experience and comfort, ensuring every moment is memorable
            </p>
          </div>
          
          <div className="text-center p-8 bg-slate-50 rounded-sm border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
              <FiMapPin className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-3">
              Local Experts
            </h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Deep knowledge of every trail and the best recommendations from those who know the mountains
            </p>
          </div>
          
          <div className="text-center p-8 bg-slate-50 rounded-sm border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
              <FiAward className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-3">
              Safety First
            </h3>
            <p className="text-slate-600 font-light leading-relaxed">
              With maritime security backgrounds, your safety and security are always our top priorities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}