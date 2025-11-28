import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import AboutCamps from '../components/SereneLuxury'
import Stays from '../components/Stays'
import Treks from '../components/Treks'
import WhatWeOffer from '../components/WhatWeOffer'
import AboutUs from '../components/AboutUs'
import AboutHosts from '../components/AboutHosts'
import Gallery from '../components/Gallery'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutCamps />
      <Stays />
      <Treks />
      <WhatWeOffer />
      <AboutUs />
      <AboutHosts />
      <Gallery />
      <ContactUs />
      <Footer />
    </main>
  )
}

