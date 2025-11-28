'use client'

import { FiArrowRight, FiMapPin, FiActivity } from 'react-icons/fi'

const treks = [
  {
    name: 'Tungnath Trek',
    difficulty: 'Moderate',
    duration: '1-2 Days',
    description: 'The highest Shiva temple in the world, offering stunning views of the Himalayas. A spiritual and scenic journey.',
    highlights: ['Highest Shiva Temple', 'Panoramic Views', 'Spiritual Experience'],
  },
  {
    name: 'Chandrashila Peak',
    difficulty: 'Moderate to Difficult',
    duration: '2-3 Days',
    description: 'A challenging trek that rewards with 360-degree views of snow-capped peaks including Nanda Devi, Trishul, and Chaukhamba.',
    highlights: ['360° Mountain Views', 'Sunrise Views', 'Challenging Route'],
  },
  {
    name: 'Deoria Tal Trek',
    difficulty: 'Easy to Moderate',
    duration: '1 Day',
    description: 'A beautiful high-altitude lake reflecting the peaks of Chaukhamba. Perfect for beginners and nature lovers.',
    highlights: ['Mountain Lake', 'Reflection Views', 'Beginner Friendly'],
  },
  {
    name: 'Rohini Bugyal Trek',
    difficulty: 'Moderate',
    duration: '2 Days',
    description: 'Explore the beautiful alpine meadows with breathtaking views of the surrounding peaks.',
    highlights: ['Alpine Meadows', 'Wildflowers', 'Scenic Views'],
  },
]

export default function Treks() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="treks" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
            Explore the Himalayas
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Popular Treks
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Chopta village is the gateway to some of the most beautiful treks in the region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treks.map((trek, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-2">{trek.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <FiActivity size={16} />
                      <span>{trek.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin size={16} />
                      <span>{trek.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed font-light">
                {trek.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {trek.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-sm text-sm font-light"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center text-slate-900 font-medium hover:text-primary-600 transition-colors group-hover:translate-x-2 duration-300"
              >
                Plan Your Trek
                <FiArrowRight className="ml-2" size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6 font-light">
            Many more treks and trails await you in and around Chopta. Our team can help you 
            plan the perfect trekking adventure based on your experience level and interests.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-slate-900 text-white rounded-sm font-medium hover:bg-slate-800 transition-all uppercase tracking-wide text-sm"
          >
            Get Trekking Guidance
          </button>
        </div>
      </div>
    </section>
  )
}


