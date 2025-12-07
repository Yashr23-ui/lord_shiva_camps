# Deployment Guide for Lord Shiva Camps Website

## 🚀 Quick Deploy to Vercel (Recommended)

### Step 1: Commit Your Changes

```bash
# Add all files
git add .

# Commit changes
git commit -m "Ready for deployment - Complete website with SEO, contact form, and all features"

# Push to GitHub
git push origin master
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up/Login (use GitHub account for easiest setup)

2. **Import Your Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add these three variables:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_public_key
     ```
   - Get these from your `.env.local` file

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `your-project-name.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., lordshivacamps.com)
   - Follow DNS setup instructions

---

## 🌐 Alternative: Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables (same as Vercel)
6. Click "Deploy site"

---

## 📋 Pre-Deployment Checklist

- [x] All code committed to Git
- [ ] Environment variables ready (EmailJS credentials)
- [ ] Test contact form locally
- [ ] Test all links and navigation
- [ ] Check images load correctly
- [ ] Update domain URLs in `app/layout.tsx` and `app/sitemap.ts` after deployment

---

## 🔧 After Deployment

### 1. Update Domain URLs

After you get your domain, update these files:
- `app/layout.tsx` - Replace `https://lordshivacamps.com` with your actual domain
- `app/sitemap.ts` - Replace `https://lordshivacamps.com` with your actual domain

### 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `yourdomain.com/sitemap.xml`

### 3. Test Everything

- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] Google Maps link works
- [ ] All images load
- [ ] Mobile responsive
- [ ] Gallery slideshow works

---

## 🆘 Troubleshooting

### Build Fails
- Check environment variables are set
- Make sure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Check image paths are correct
- Ensure images are in `public/images/` folder
- Check file names match exactly (case-sensitive)

### Contact Form Not Working
- Verify EmailJS environment variables are set
- Check EmailJS service is active
- Test form submission

---

## 📞 Need Help?

If you encounter issues:
1. Check Vercel/Netlify build logs
2. Test locally first: `npm run build`
3. Check browser console for errors

Good luck with your deployment! 🎉

