import React from 'react'
import { FiWifi, FiCoffee, FiHome, FiMapPin, FiShield, FiUsers, FiShoppingBag, FiNavigation } from 'react-icons/fi'

const offerings = [
  {
    icon: FiHome,
    title: 'Comfortable Tents',
    description: 'Well-equipped camping tents with essential amenities and beautiful nature views',
  },
  {
    icon: FiWifi,
    title: 'Free WiFi',
    description: 'High-speed internet connection available at the campsite',
  },
  {
    icon: FiCoffee,
    title: 'Campfire Meals',
    description: 'Delicious, authentic local cuisine prepared over campfires with love and care',
  },
  {
    icon: FiShoppingBag,
    title: 'Outdoor Dining',
    description: 'Experience flavors that blend local charm with outdoor cooking',
  },
  {
    icon: FiMapPin,
    title: 'Prime Location',
    description: 'Located in Chopta village, gateway to Tungnath, Chandrashila, and many famous treks',
  },
  {
    icon: FiNavigation,
    title: 'Trekking Guides',
    description: 'Expert guidance on local treks, trail information, and trekking support',
  },
  {
    icon: FiShield,
    title: 'Safe & Secure',
    description: 'Your safety and security are our top priorities in the wilderness',
  },
  {
    icon: FiUsers,
    title: 'Local Guidance',
    description: 'Get insider tips and recommendations from your friendly camp hosts',
  },
]

export default function WhatWeOffer() {
  return (
    <section id="offerings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
            All You Need for a Comfortable Stay
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            FACILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-sm border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">
                  {offering.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-light">
                  {offering.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

