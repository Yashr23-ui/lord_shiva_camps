'use client'

import NextImage from 'next/image'
import { FiArrowDown, FiMapPin } from 'react-icons/fi'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/images/hero-bg.jpg"
          alt="Lord Shiva Camps - Mountain view of Chopta Village, Uttarakhand, India - Himalayan camping destination"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNFYzMkg2ek02IDRWMGgtMnY0SDB2Mmg0djRoMlY2aDRWNEg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Small Tag */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <FiMapPin className="text-white" size={16} />
          <span className="text-sm text-white/90 font-light tracking-wide">Chopta Village, Uttarakhand</span>
        </div>

        {/* Main Heading - LORD SHIVA CAMPS BIG */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-none tracking-tight">
          LORD SHIVA
          <br />
          <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            CAMPS
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 max-w-4xl mx-auto font-light leading-relaxed">
          Gateway to Adventure in the Himalayas
        </p>

        {/* Sub Description */}
        <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Experience authentic camping, thrilling treks, and unforgettable adventures
          <br className="hidden sm:block" />
          Your perfect base for exploring Tungnath, Chandrashila & beyond
        </p>

        {/* CTA Buttons - Larger & More Interactive */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('stays')}
            className="group px-12 py-5 bg-white text-slate-900 rounded-sm font-semibold hover:bg-white/90 transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl tracking-wide uppercase text-sm relative overflow-hidden"
          >
            <span className="relative z-10">Book Your Stay</span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-semibold">
              Book Your Stay
            </span>
          </button>
          <button
            onClick={() => scrollToSection('treks')}
            className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-sm font-semibold hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105 tracking-wide uppercase text-sm shadow-lg"
          >
            Explore Treks
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Animated */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('stays')}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider mb-2 font-light">Scroll Down</span>
          <FiArrowDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}