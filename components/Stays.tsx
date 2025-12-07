'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiArrowRight, FiX } from 'react-icons/fi'

const stays = [
  {
    title: 'Tent Camping',
    description: 'Comfortable tent setups with essential amenities and breathtaking mountain views. Perfect for couples and solo campers seeking peace and tranquility in nature.',
    features: ['Comfortable Tents', 'Mountain View', 'Campfire Area', 'Essential Amenities'],
    image: '/images/hero-bg.jpg', // Using hero-bg as placeholder until tent-camping.jpg is added
  },
  {
    title: 'Family Camp',
    description: 'Spacious camping area with separate spaces, comfortable camping facilities, and panoramic nature views. Ideal for families and group camping.',
    features: ['Separate Camping Area', 'Group Facilities', 'Panoramic Views', 'Extra Space'],
    image: '/images/family-camp.jpg',
  },
]

// Room/Camp photos - Add your room photos here
const roomPhotos = [
  { id: 1, image: '/images/family-camp.jpg', title: 'Family Camp Interior' },
  { id: 2, image: '/images/interior1.jpg', title: 'Tent Setup' },
  { id: 3, image: '/images/about-chopta.jpg', title: 'Camp View' },
  // Add more room photos here:
  // { id: 4, image: '/images/gallery/room-1.jpg', title: 'Room Name' },
  // { id: 5, image: '/images/gallery/room-2.jpg', title: 'Room Name' },
]

export default function Stays() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

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
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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

        {/* Room Photos Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
              Take a Look Inside
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Room & Camp Photos
            </h2>
            <p className="text-slate-600 font-light max-w-2xl mx-auto">
              Explore our comfortable accommodations and beautiful camping setups
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {roomPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.id)}
                className="relative aspect-square rounded-sm overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-light">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal for Room Photos */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-50"
            >
              <FiX size={32} />
            </button>
            <div
              className="relative max-w-6xl w-full h-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={roomPhotos.find(p => p.id === selectedPhoto)?.image || ''}
                  alt={roomPhotos.find(p => p.id === selectedPhoto)?.title || ''}
                  fill
                  className="object-contain rounded-sm"
                  sizes="90vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-sm">
                <p className="text-white text-xl font-light">
                  {roomPhotos.find(p => p.id === selectedPhoto)?.title}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-24">
          <p className="text-slate-600 mb-8 font-light italic text-lg">
            "The mountains are calling and I must go"
          </p>
          <p className="text-slate-500 text-sm">— John Muir</p>
        </div>
      </div>
    </section>
  )
}