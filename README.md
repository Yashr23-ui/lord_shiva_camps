# Homestay Website

A modern, responsive landing page for a homestay business built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 **Landing Page** - Beautiful hero section with smooth scrolling
- ✨ **What We Offer** - Showcase of amenities and services
- 📖 **About Us** - Story and information about the homestay
- 👥 **About the Hosts** - Introduction to the hosts
- 📧 **Contact Us** - Contact form and information
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Modern Design** - Clean, professional, and visually appealing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Customization

You can easily customize the website by editing:

- **Content**: Update text in the component files in `/components`
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Images**: Replace placeholder content with actual images
- **Contact Info**: Update contact details in `ContactUs.tsx` and `Footer.tsx`

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── WhatWeOffer.tsx # Services/offerings
│   ├── AboutUs.tsx     # About section
│   ├── AboutHosts.tsx  # Hosts section
│   ├── ContactUs.tsx   # Contact form
│   └── Footer.tsx      # Footer
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Notes

- The contact form currently shows an alert on submission. You'll need to integrate it with a backend service or email service for actual functionality.
- Replace placeholder images and content with actual homestay information.
- Update contact details, addresses, and social media links as needed.

