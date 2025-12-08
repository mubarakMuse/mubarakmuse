# SEO Summary for mubarakmuse.com

## How Your Pages Will Appear in Google Search Results

### 🏠 Homepage (`/`)
**Title (50 chars max):**
```
Mubarak Muse - Software Engineer & Consultant
```

**Description (160 chars max):**
```
Software engineer and consultant offering technical screening services through BrighterTunnel and custom software consulting. Based in Minneapolis, Minnesota.
```

**Keywords:**
- Mubarak Muse
- software engineer
- consultant
- technical screening
- BrighterTunnel
- software consulting
- Minneapolis

**How it looks in Google:**
```
┌─────────────────────────────────────────────────────────┐
│ Mubarak Muse - Software Engineer & Consultant           │
│ https://mubarakmuse.com                                  │
│                                                          │
│ Software engineer and consultant offering technical     │
│ screening services through BrighterTunnel and custom     │
│ software consulting. Based in Minneapolis, Minnesota.   │
│                                                          │
│ [OpenGraph Image Preview]                                │
└─────────────────────────────────────────────────────────┘
```

---

### 🚀 BrighterTunnel Page (`/brighter-tunnel`)
**Title:**
```
BrighterTunnel | Technical Screening Service - Mubarak Muse
```

**Description:**
```
Stop wasting your Senior Engineers' time. We technically screen your applicants so you only interview the top 20% who can actually code. Live, human-led technical interviews with detailed reports.
```

**Keywords:**
- technical screening
- coding interviews
- hiring
- engineering recruitment
- technical assessment
- BrighterTunnel
- Karat alternative

**How it looks in Google:**
```
┌─────────────────────────────────────────────────────────┐
│ BrighterTunnel | Technical Screening Service - Mubarak  │
│ https://mubarakmuse.com/brighter-tunnel                 │
│                                                          │
│ Stop wasting your Senior Engineers' time. We            │
│ technically screen your applicants so you only           │
│ interview the top 20% who can actually code. Live,      │
│ human-led technical interviews with detailed reports.    │
│                                                          │
│ [OpenGraph Image Preview]                                │
└─────────────────────────────────────────────────────────┘
```

---

### 💼 Software Consulting Page (`/consulting`)
**Title:**
```
Software Consulting Services - Mubarak Muse
```

**Description:**
```
General software consulting service specializing in building custom software solutions and AI integrations. Expert in full-stack development, AI integration, and technical architecture.
```

**Keywords:**
- software consulting
- AI integration
- custom software development
- web development
- software engineer
- technical consulting

**How it looks in Google:**
```
┌─────────────────────────────────────────────────────────┐
│ Software Consulting Services - Mubarak Muse             │
│ https://mubarakmuse.com/consulting                      │
│                                                          │
│ General software consulting service specializing in      │
│ building custom software solutions and AI               │
│ integrations. Expert in full-stack development, AI       │
│ integration, and technical architecture.                 │
│                                                          │
│ [OpenGraph Image Preview]                                │
└─────────────────────────────────────────────────────────┘
```

---

### 📄 Resume Page (`/resume`)
**⚠️ MISSING SEO METADATA** - Currently using default tags

**Current (Default):**
```
Title: Mubarak Muse
Description: Mubarak Muse's Personal Website
```

**Recommended:**
```
Title: Mubarak Muse - Resume | Software Engineer
Description: Software engineer resume with experience at Amazon, Collective Health, and BrighterTunnel. Full-stack developer specializing in Java, JavaScript, Python, and AWS.
```

---

## ✅ What's Working Well

1. **OpenGraph Images**: You have `opengraph-image.png` and `twitter-image.png` - these will show when your pages are shared on social media
2. **Canonical URLs**: All pages have proper canonical URLs to prevent duplicate content issues
3. **Keywords**: Relevant keywords are set for each page
4. **Meta Descriptions**: All descriptions are under 160 characters (Google's limit)
5. **Structured URLs**: Clean, descriptive URLs (`/brighter-tunnel`, `/consulting`)

---

## 🔧 Recommendations for Improvement

### 1. Add SEO to Resume Page
The resume page is missing custom SEO metadata. Add this:

```javascript
export const metadata = getSEOTags({
  title: "Mubarak Muse - Resume | Software Engineer",
  description: "Software engineer resume with experience at Amazon, Collective Health, and BrighterTunnel. Full-stack developer specializing in Java, JavaScript, Python, and AWS.",
  keywords: ["Mubarak Muse", "resume", "software engineer", "full-stack developer", "Amazon", "Minneapolis"],
  canonicalUrlRelative: "/resume",
});
```

### 2. Add Structured Data (Schema.org)
Consider adding structured data for:
- **Person Schema** on homepage (for Google Knowledge Graph)
- **Service Schema** on consulting page
- **Organization Schema** on BrighterTunnel page

### 3. Update Config Description
Your `config.js` has a generic description. Update it to match your actual services:

```javascript
appDescription: "Software engineer and consultant offering technical screening services through BrighterTunnel and custom software consulting. Based in Minneapolis, Minnesota.",
```

### 4. Add Sitemap
✅ You already have `next-sitemap` configured - this is good!

### 5. Social Media Sharing
When someone shares your pages:
- **Facebook/LinkedIn**: Will show OpenGraph image and description
- **Twitter**: Will show Twitter card with image and description
- **Google Search**: Will show title, description, and URL

---

## 📊 Expected Search Rankings

Your pages should rank well for:
- "Mubarak Muse" (your name - should rank #1)
- "Mubarak Muse software engineer"
- "BrighterTunnel technical screening"
- "technical screening service Minneapolis"
- "software consultant Minneapolis"
- "Karat alternative"

---

## 🎯 Next Steps

1. ✅ Add SEO metadata to resume page
2. ✅ Update config.js description
3. Consider adding structured data for better rich snippets
4. Submit sitemap to Google Search Console
5. Monitor search performance in Google Analytics

---

## 📱 Social Media Preview

When shared on social platforms, your pages will show:

**Homepage:**
- Image: `opengraph-image.png`
- Title: "Mubarak Muse - Software Engineer & Consultant"
- Description: "Software engineer and consultant offering technical screening services..."

**BrighterTunnel:**
- Image: `opengraph-image.png` (or page-specific if added)
- Title: "BrighterTunnel | Technical Screening Service - Mubarak Muse"
- Description: "Stop wasting your Senior Engineers' time..."

**Consulting:**
- Image: `opengraph-image.png`
- Title: "Software Consulting Services - Mubarak Muse"
- Description: "General software consulting service specializing in..."

