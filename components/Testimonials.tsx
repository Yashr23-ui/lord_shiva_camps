import React from 'react'

const testimonials = [
  {
    name: 'Sarah & Michael',
    location: 'New York, USA',
    text: 'Had a wonderful stay with warm and friendly hospitality, comfortable rooms, and stunning mountain views. The staff were exceptionally helpful, making it a truly memorable experience.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai, India',
    text: 'These camps offer comfortable camping with breathtaking mountain views, made unforgettable by warm, attentive, and impeccable hospitality. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    location: 'London, UK',
    text: 'A clean and well-maintained property with delicious home-cooked meals, complemented by attentive service from the hosts. The perfect peaceful retreat.',
    rating: 5,
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    text: 'Exceptional camping experience with stunning views. The camps offer comfortable facilities, delicious food, and attentive service. Highly recommended for an unforgettable outdoor adventure.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
            Hear From Our Guests
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed font-light italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

