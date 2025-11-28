'use client'

import { FiArrowRight } from 'react-icons/fi'

const stays = [
  {
    title: 'Tent Camping',
    description: 'Comfortable tent setups with essential amenities and breathtaking mountain views. Perfect for couples and solo campers seeking peace and tranquility in nature.',
    features: ['Comfortable Tents', 'Mountain View', 'Campfire Area', 'Essential Amenities'],
    image: 'tent',
  },
  {
    title: 'Family Camp',
    description: 'Spacious camping area with separate spaces, comfortable camping facilities, and panoramic nature views. Ideal for families and group camping.',
    features: ['Separate Camping Area', 'Group Facilities', 'Panoramic Views', 'Extra Space'],
    image: 'family',
  },
]

export default function Stays() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="stays" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
            Comfortable Camping in Nature
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            OUR CAMPS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {stays.map((stay, index) => (
            <div
              key={index}
              className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <h3 className="text-3xl font-light mb-2">{stay.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {stay.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {stay.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center text-slate-900 font-medium hover:text-primary-600 transition-colors group-hover:translate-x-2 duration-300"
                >
                  View Details
                  <FiArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-8 font-light italic text-lg">
            "The mountains are calling and I must go"
          </p>
          <p className="text-slate-500 text-sm">— John Muir</p>
        </div>
      </div>
    </section>
  )
}

