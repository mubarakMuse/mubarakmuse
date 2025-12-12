# Deployment Checklist

## ✅ Pre-Deployment Checks

### Code Quality
- [x] JSON files are valid (courses.json validated)
- [x] No linter errors
- [x] No console.log statements in production code
- [x] All imports are correct
- [x] Build completes successfully

### Configuration
- [x] Updated `next.config.js` to use `remotePatterns` instead of deprecated `domains`
- [x] All dynamic routes have `generateStaticParams` for static generation
- [x] Metadata generation is set up for all pages

### Features Verified
- [x] Course pages load dynamically by slug
- [x] Quiz pages work correctly
- [x] Access control system (login/logout) works
- [x] Video embeds work (YouTube)
- [x] Multiple quiz questions per section
- [x] Email links with prepared messages

## 🔧 Environment Variables

Make sure these are set in your deployment platform:

### Required
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (for server-side)

### Optional (for email functionality)
- `MAILGUN_API_KEY` - For sending emails
- `MAILGUN_DOMAIN` - Mailgun domain

### Stripe (if using payments)
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET` - Stripe webhook secret

## 📦 Build & Deploy

### Build Command
```bash
npm run build
```

### Start Command (if needed)
```bash
npm start
```

### Static Generation
- All course pages are statically generated at build time
- Quiz pages are client-side rendered (require access)
- Main course listing page is statically generated

## 🚀 Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Set environment variables

### Other Platforms
- Ensure Node.js 18+ is available
- Run `npm install` then `npm run build`
- Serve the `.next` directory

## 📝 Post-Deployment

- [ ] Test course pages load correctly
- [ ] Test quiz functionality
- [ ] Test login/logout flow
- [ ] Test access control
- [ ] Verify email links work
- [ ] Check video embeds
- [ ] Test on mobile devices
- [ ] Verify SEO metadata

## 🐛 Known Issues / Notes

- Middleware file convention warning (deprecated but still works)
- MAILGUN_API_KEY warning (optional, can be ignored if not using email)
- All course routes are pre-generated for better performance

## 📊 Performance

- Static generation for course pages (fast loading)
- Client-side rendering for quiz (requires access check)
- Optimized images with Next.js Image component
- Code splitting automatic with Next.js
