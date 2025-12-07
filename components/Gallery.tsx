'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const galleryImages = [
  { 
    id: 1, 
    image: '/images/gallery/Chandrashila.jpg' 
  },
  { 
    id: 2, 
    image: '/images/gallery/deoria-tal.jpg' 
  },
  { 
    id: 3, 
    image: '/images/gallery/meadows.jpg' 
  },
  { 
    id: 4, 
    image: '/images/gallery/tungnath.jpg' 
  },
  { 
    id: 5, 
    image: '/images/family-camp.jpg' 
  },
  { 
    id: 6, 
    image: '/images/about-chopta.jpg' 
  },
  { 
    id: 7, 
    image: '/images/hero-bg.jpg' 
  },
  { 
    id: 8, 
    image: '/images/photo7.jpg' 
  },
  { 
    id: 9, 
    image: '/images/photo8.jpg' 
  },
  // Add more images here:
  // { 
  //   id: 7, 
  //   image: '/images/gallery/your-photo-name.jpg' 
  // },
  // { 
  //   id: 8, 
  //   image: '/images/gallery/another-photo.jpg' 
  // },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

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

        {/* Auto-sliding Carousel */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div className="relative aspect-[16/10] rounded-sm overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="min-w-full h-full relative cursor-pointer flex-shrink-0"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.image}
                    alt={`Lord Shiva Camps - ${image.image.split('/').pop()?.replace(/\.(jpg|jpeg|png)/i, '') || 'Gallery'} - Chopta Village, Uttarakhand`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === currentIndex}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
                src={galleryImages[selectedImage].image}
                alt={`Gallery image ${selectedImage + 1}`}
                fill
                className="object-contain rounded-sm"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

