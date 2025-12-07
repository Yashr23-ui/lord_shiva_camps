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

## Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails directly from the browser. To set it up:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/) (free tier available)

2. **Set up an Email Service**:
   - Go to "Email Services" in your EmailJS dashboard
   - Add a service (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**:
   - Go to "Email Templates"
   - Create a new template
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Sender's phone
     - `{{message}}` - Message content
   - Set "To Email" to: `lordshivacamps@gmail.com` (or your email)

4. **Get your credentials**:
   - Service ID: Found in "Email Services"
   - Template ID: Found in "Email Templates"
   - Public Key: Found in "Account" → "General"

5. **Create a `.env.local` file** in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Restart your development server** after adding the environment variables

## Notes

- Replace placeholder images and content with actual homestay information.
- Update contact details, addresses, and social media links as needed.
- The contact form will show an error if EmailJS is not configured. Make sure to set up the environment variables.

