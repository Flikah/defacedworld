# defacedworld.com

SEO & Digital Growth agency site for Spencer Wilkinson.

Built with Next.js 14 (App Router) · Deployed on Vercel · Styled with CSS Modules

---

## Stack

- **Framework**: Next.js 14 App Router
- **Styling**: CSS Modules (no Tailwind, no UI library — full custom)
- **AI**: Anthropic Claude via `@anthropic-ai/sdk` (server-side only)
- **Email**: Resend (contact form + auto-reply)
- **Hosting**: Vercel
- **Domain**: GoDaddy (DNS pointed to Vercel)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your API keys

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

---

## Environment Variables

| Variable | Where to get it | Required |
|---|---|---|
| `ANTHROPIC_API_KEY` | console.anthropic.com | Yes |
| `RESEND_API_KEY` | resend.com | For contact form |
| `CONTACT_EMAIL` | Your email | For contact form |

---

## Deploy to Vercel

### First time

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — it detects Next.js automatically
```

Or connect via GitHub:
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import from GitHub
3. Add environment variables in Vercel dashboard → Settings → Environment Variables
4. Deploy — takes ~2 minutes

### Connect defacedworld.com domain

In Vercel:
1. Project → Settings → Domains
2. Add `defacedworld.com` and `www.defacedworld.com`
3. Vercel gives you DNS records to add

In GoDaddy:
1. DNS → Manage DNS
2. Add/edit the A record and CNAME Vercel gives you
3. DNS propagates in 5–30 minutes

---

## Set up Resend (contact form emails)

1. Sign up at resend.com (free — 3,000 emails/month)
2. Go to Domains → Add Domain → enter `defacedworld.com`
3. Add the TXT and MX DNS records Resend gives you in GoDaddy
4. Once verified, go to API Keys → Create API Key
5. Add the key to `.env.local` as `RESEND_API_KEY`
6. The contact form sends two emails:
   - One to you (new enquiry notification, styled HTML)
   - One to the person who submitted (auto-reply confirmation)

---

## Project Structure

```
defacedworld/
├── app/
│   ├── api/
│   │   ├── analyze/route.ts    ← Claude SEO analysis (POST /api/analyze)
│   │   └── contact/route.ts    ← Contact form handler (POST /api/contact)
│   ├── about/
│   │   ├── page.tsx            ← About Spencer page
│   │   └── page.module.css
│   ├── contact/
│   │   ├── page.tsx            ← Contact form with package pre-selection
│   │   └── page.module.css
│   ├── services/
│   │   ├── page.tsx            ← 3 packages + add-ons + FAQ
│   │   └── page.module.css
│   ├── globals.css             ← Design system CSS variables
│   ├── layout.tsx              ← Root layout + SEO metadata
│   ├── page.tsx                ← Homepage with URL analyzer
│   └── page.module.css
├── components/
│   ├── Nav.tsx                 ← Sticky nav
│   ├── Nav.module.css
│   ├── Footer.tsx              ← Footer with links
│   └── Footer.module.css
├── .env.example                ← Template — copy to .env.local
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## How the URL Analyzer Works

1. User enters a URL on the homepage
2. POST request hits `/api/analyze` (server-side Next.js route)
3. Server calls Claude API with a structured prompt — **API key never touches the browser**
4. Claude returns a JSON report: scores, findings, warnings, strengths, keywords
5. Report renders on the homepage with the bottom half blurred/locked
6. Locked section upsells to full paid audit ($497) or Audit+Fix ($1,497)

---

## Pricing (editable in `app/services/page.tsx`)

| Package | Price | What's included |
|---|---|---|
| Audit Report | $497 one-time | Full report + 30-min call |
| Audit + Fix | $1,497 one-time | Report + implementation |
| Growth Retainer | $997/month | Ongoing SEO management |

---

## Customisation Notes

- **Colors**: Edit CSS variables in `app/globals.css` — `--red`, `--black`, `--white` etc.
- **Pricing**: Update in `app/services/page.tsx`
- **About page**: Update your story in `app/about/page.tsx`
- **Email address**: Change `spencer@defacedworld.com` everywhere (grep for it)
- **Claude model**: Change `claude-sonnet-4-20250514` in `app/api/analyze/route.ts`
- **Locked section**: Adjust what's shown free vs. locked in `app/page.tsx`

---

## Adding a Blog (future)

Next.js App Router makes this straightforward:
1. Create `app/blog/page.tsx` for the blog index
2. Create `app/blog/[slug]/page.tsx` for individual posts
3. Store posts as MDX files in a `/content/posts` folder
4. Use `next-mdx-remote` or `contentlayer` to parse them

This is the highest-leverage SEO addition you can make to the site.

---

## License

Private — Spencer Wilkinson / defacedworld.com
