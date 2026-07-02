# Integrated Security Specialist — Personal Website

A premium, enterprise-grade personal website positioning you as an **Integrated Security Specialist** spanning cybersecurity, physical security, maritime security, and executive protection.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Shadcn-style UI components** (Radix UI)
- **EmailJS** (contact form)
- **Markdown blog** (gray-matter + remark)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

All content is centralized in **`src/data/site-config.ts`** — update your:

- Contact details (email, phone, LinkedIn, GitHub)
- Professional experience
- Certifications
- Projects
- Services
- Testimonials

Replace **`public/cv.pdf`** with your actual CV.

Update **`siteConfig.url`** in `site-config.ts` and **`public/sitemap.xml`** / **`public/robots.txt`** with your domain before deploying.

## EmailJS Setup

1. Copy `.env.example` to `.env.local`
2. Add your EmailJS service, template, and public key
3. The contact form will send emails automatically

## Blog

Add markdown files to **`content/blog/`** with frontmatter:

```yaml
---
title: "Post Title"
date: "2026-01-01"
excerpt: "Brief description"
category: "Category"
---
```

## Build & Deploy

```bash
npm run build
```

Static files are exported to **`out/`** — deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Features

- Dark/light mode
- Animated hero with world map & particle network
- Command palette (Ctrl+K)
- Scroll progress indicator
- Skills dashboard
- Expandable experience timeline
- Blog with RSS feed
- PWA manifest & service worker
- SEO metadata & Schema.org
- WCAG-accessible components
- 404 & loading pages

## Project Structure

```
src/
├── app/              # Next.js pages & layout
├── components/
│   ├── effects/      # Particle & map backgrounds
│   ├── layout/       # Navbar, footer, theme, command palette
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── data/             # Site content configuration
└── lib/              # Utilities & blog helpers
content/blog/         # Markdown blog posts
public/               # Static assets, manifest, sitemap
```
