'use client'

import { FiArrowDown } from 'react-icons/fi'

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
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNFYzMkg2ek02IDRWMGgtMnY0SDB2Mmg0djRoMlY2aDRWNEg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 z-0"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 font-light mb-4">
            Chopta Village
          </p>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
          Gateway to
          <br />
          <span className="font-normal">Adventure</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Home to Many Treks in the Himalayas
        </p>
        <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto font-light">
          Experience authentic camping, thrilling treks, and unforgettable adventures
          at our camps in Chopta village, the perfect base for your mountain expeditions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('stays')}
            className="px-10 py-4 bg-white text-slate-900 rounded-sm font-medium hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl tracking-wide uppercase text-sm"
          >
            Explore Stays
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-transparent border border-white/50 text-white rounded-sm font-medium hover:bg-white/10 hover:border-white transition-all transform hover:scale-105 tracking-wide uppercase text-sm"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('stays')}
          className="text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <FiArrowDown size={24} />
        </button>
      </div>
    </section>
  )
}

