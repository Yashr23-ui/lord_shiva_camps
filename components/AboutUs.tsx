import React from 'react'

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-700 to-slate-900 rounded-sm overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-4xl font-light mb-6">Our Story</h3>
                  <p className="text-lg opacity-90 font-light leading-relaxed">
                    A place where every guest becomes part of our extended family
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-light mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8">
              Nature's Retreat
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Welcome to our camps in Chopta village, where adventure meets the Himalayas. 
                We are passionate about providing trekkers and campers with an authentic, exciting, 
                and memorable outdoor experience in one of the most beautiful regions of Uttarakhand.
              </p>
              <p>
                Our camps were born from a simple idea: to create a perfect base camp for 
                trekkers exploring the many trails around Chopta. We believe that the best
                outdoor experiences come from connecting with nature, local culture, 
                and the thrill of mountain trekking.
              </p>
              <p>
                Nestled in Chopta village, our camps offer the perfect starting point for 
                treks to Tungnath, Chandrashila, Deoria Tal, and many other beautiful destinations. 
                Surrounded by majestic mountains, alpine meadows, and fresh mountain air, we ensure 
                your comfort and enjoyment during your trekking and camping adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

