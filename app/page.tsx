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
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Lord Shiva Camps',
    description: 'Authentic camping and trekking experiences in Chopta Village, Uttarakhand. Gateway to Tungnath, Chandrashila Peak, and Deoria Tal.',
    image: 'https://lordshivacamps.com/images/hero-bg.jpg',
    url: 'https://lordshivacamps.com',
    telephone: '+919997617346',
    email: 'lordshivacamps@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chopta Village',
      addressLocality: 'Rudraprayag District',
      addressRegion: 'Uttarakhand',
      postalCode: '246419',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.514104400124268',
      longitude: '78.29648095863993',
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://www.instagram.com/lord.shiva.camps/',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '25',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
        <WhatsAppButton />
      </main>
    </>
  )
}

