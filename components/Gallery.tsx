'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'

const galleryImages = [
  { id: 1, title: 'Mountain View from Balcony', category: 'Views' },
  { id: 2, title: 'Cozy Living Room', category: 'Interior' },
  { id: 3, title: 'Outdoor Dining Area', category: 'Outdoor' },
  { id: 4, title: 'Sunset Over Mountains', category: 'Views' },
  { id: 5, title: 'Modern Kitchen', category: 'Interior' },
  { id: 6, title: 'Garden Area', category: 'Outdoor' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 font-light mb-4">
            The Scenes at Our Camps
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            EXPLORE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-sm overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="text-white text-sm font-light">{image.title}</p>
                <p className="text-white/60 text-xs mt-1">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
          >
            <FiX size={32} />
          </button>
          <div
            className="relative max-w-6xl w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <p className="text-white text-xl font-light">
                {galleryImages[selectedImage].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

