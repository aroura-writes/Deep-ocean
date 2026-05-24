# 🌊 Ocean & Night Sky — Contentful Edition

A dark, editorial website exploring deep-sea bioluminescence. Built with **Next.js 14 App Router** and powered by **Contentful CMS**, connected to Vercel via the official marketplace integration — which automatically injects all required environment variables on deployment.

---

## 📁 Project Structure

```
ocean-contentful/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Design tokens, animations
│   ├── explore/page.tsx        # Creature field guide
│   ├── blog/
│   │   ├── page.tsx            # Blog listing (fetches from Contentful)
│   │   └── [slug]/page.tsx     # Individual post (Contentful Rich Text)
│   └── about/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx
├── lib/
│   └── contentful.ts           # Contentful client + typed API helpers
├── .env.example
└── README.md
```

---

## 🚀 Quick Start (Local)

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local` with your Contentful credentials (see below).

### 3. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `CONTENTFUL_SPACE_ID` | ✅ Yes | Your Contentful space ID |
| `CONTENTFUL_DELIVERY_TOKEN` | ✅ Yes | Content Delivery API token (public, published content) |
| `CONTENTFUL_PREVIEW_TOKEN` | Optional | Content Preview API token (draft content) |
| `NEXT_PUBLIC_SITE_URL` | Optional | Full site URL for metadata |

### Where to find your Contentful credentials

1. Log in at [app.contentful.com](https://app.contentful.com)
2. Open your **Space → Settings → API Keys**
3. Click **"Add API Key"** (or use an existing one)
4. Copy:
   - **Space ID** → `CONTENTFUL_SPACE_ID`
   - **Content Delivery API - access token** → `CONTENTFUL_DELIVERY_TOKEN`

---

## ☁️ Deploying to Vercel (3 Steps)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 — Install the Contentful Integration on Vercel

This is the key advantage of Contentful: **no manual environment variable setup**.

1. Go to [vercel.com/integrations/contentful](https://vercel.com/integrations/contentful)
2. Click **"Add Integration"**
3. Select your **Vercel team**
4. Choose your **target project** (the one you just imported)
5. Authorize access to your **Contentful space**
6. Vercel automatically injects:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_DELIVERY_TOKEN`

That is all. No copying tokens manually.

### Step 3 — Import and Deploy

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel detects Next.js automatically — no build config needed
4. The Contentful integration has already added the env vars
5. Click **"Deploy"**

Your site is live and synced with Contentful.

---

## ✍️ Setting Up Contentful Content Model

Contentful needs a **content type** that matches what the code expects. Do this once in your Contentful space.

### Create the "Post" content type

1. Go to **Content Model → Add content type**
2. Name it `Post`, API identifier: `post`
3. Add these fields:

| Field name | API identifier | Field type | Required |
|---|---|---|---|
| Title | `title` | Short text | ✅ |
| Slug | `slug` | Short text | ✅ |
| Published At | `publishedAt` | Date & time | ✅ |
| Description | `description` | Short text | — |
| Body | `body` | Rich text | — |
| Cover Image | `coverImage` | Media (image) | — |

4. Click **Save** → **Activate**

### Creating your first post

1. Go to **Content → Add entry → Post**
2. Fill in title, slug (e.g. `my-first-post`), date, and body
3. Click **Publish**
4. Vercel will pick up the content on the next request (ISR revalidates every 60 seconds)

---

## 🔄 Content Updates Without Redeployment

The blog uses **Incremental Static Regeneration (ISR)** with a 60-second revalidation window. This means:

- Pages are statically generated at build time
- After 60 seconds, Vercel re-fetches from Contentful in the background
- **No redeployment needed** when you publish new content

To trigger an immediate rebuild, go to Vercel → your project → **Redeploy**.

---

## 🎨 Customisation

### Colors — `app/globals.css`

```css
:root {
  --ocean-deep:   #030d1a;
  --ocean-blue:   #38bdf8;
  --ocean-teal:   #2dd4bf;
  --ocean-accent: #4ec9b0;
}
```

### Nav links — `components/Navbar.tsx`

```ts
const links = [
  { href: '/',        label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/blog',    label: 'Journal' },
  { href: '/about',   label: 'About' },
]
```

### Contentful query — `lib/contentful.ts`

The `getAllPosts()` and `getPostBySlug()` functions are in `lib/contentful.ts`. Adjust field names there if you rename fields in Contentful.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | React framework, App Router, ISR |
| [Contentful](https://contentful.com) | Headless CMS with rich text editor |
| [Vercel Integration](https://vercel.com/integrations/contentful) | Auto env var injection |
| [rich-text-react-renderer](https://github.com/contentful/rich-text) | Renders Contentful Rich Text to React |
| [Tailwind CSS](https://tailwindcss.com) | Utility CSS |

---

## ❓ Troubleshooting

**Posts don't appear**
→ Make sure the content type API identifier is exactly `post` (lowercase). Check `lib/contentful.ts` line: `content_type: 'post'`.

**Build error: "Space ID not found"**
→ The Contentful integration may not be linked yet. Go to the Vercel dashboard → your project → Settings → Environment Variables and verify `CONTENTFUL_SPACE_ID` is present.

**Rich text renders blank**
→ Ensure the `body` field in Contentful is of type **Rich text**, not Long text. The `documentToReactComponents` function only works with Rich text documents.

**Local dev shows no posts**
→ Make sure `.env.local` exists (not just `.env.example`) with real values filled in.

---

## 📄 License

MIT — free to use, modify, and deploy.
