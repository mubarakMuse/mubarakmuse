# mubarakmuse.com

Personal site for [Mubarak Muse](https://mubarakmuse.com) — software engineer, entrepreneur, and builder.

Built with [Next.js](https://nextjs.org) (App Router), React, and Tailwind CSS. Deployed on [Vercel](https://vercel.com).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — about, portfolio of small bets, links |
| `/resume` | Resume |
| `/software-engineers` | Recruiting on Paraform + free mock interviews |
| `/technical-interviews` | First-round technical screening (individual B2B side service) |
| `/blog` | Blog posts (add entries in `app/blog/posts.js`) |

### Redirects

| From | To |
|------|-----|
| `/brighter-tunnel` | `/technical-interviews` |
| `/supakid` | [supakidapp.com](https://supakidapp.com) |
| `/goldy` | [goldyphone.com](https://goldyphone.com) |

### Home page

**Portfolio of small bets** (alternating dark gray / white cards):

- [BrighterTunnel](https://brightertunnel.com) — AI service company
- Technical interview services → `/technical-interviews`
- Recruiting on Paraform → `/software-engineers`
- [GoldyPhone](https://goldyphone.com)
- [SupaKid](https://supakidapp.com)

**Links:** Blog, Resume, LinkedIn, Twitter, GitHub, Email

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (+ sitemap via postbuild)
npm run start   # run production server locally
npm run lint    # ESLint
```

## Project structure

```
app/
  page.js                 # Home
  picofme.png             # Profile photo (also used for favicon/icons)
  resume/
  software-engineers/     # Paraform recruiting
  technical-interviews/   # Interview screening service
  blog/
    page.js
    posts.js              # Blog post list — edit to add posts
components/               # Shared UI (ShipFast template leftovers)
libs/seo.js               # SEO metadata helpers
config.js                 # App name, domain, theme
next.config.js            # Redirects, image domains
```

## Configuration

- **Site metadata & domain:** `config.js`
- **Per-page SEO:** `getSEOTags()` in each `page.js` and `libs/seo.js`
- **Redirects:** `next.config.js`
- **Blog posts:** `app/blog/posts.js`
- **Favicon / OG images:** `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.png` (generated from `picofme.png`)

## Environment

Optional env vars (Stripe, Supabase, Mailgun, etc.) only matter if you enable those ShipFast features. The public marketing pages run without them.

## License

Private — personal site.
