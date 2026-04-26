<div align="center">

```
██████╗ ██████╗  ██████╗ ███╗   ██╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║██╔██╗ ██║   ██║   █████╗  
██╔══██╗██╔══██╗██║   ██║██║╚██╗██║   ██║   ██╔══╝  
██████╔╝██║  ██║╚██████╔╝██║ ╚████║   ██║   ███████╗
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝
```

**A minimalist poetry library — where ink meets eternity.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-F5A96B?style=flat-square)

</div>

---

## ✦ What is Bronte?

Bronte is a thoughtfully designed web experience for discovering poetry. Browse hundreds of poets and their works, read individual poems in a clean editorial layout, and search across the entire library — all powered by the public [PoetryDB API](https://poetrydb.org).

No accounts. No clutter. Just verses.

---

## ✦ Features

| | |
|---|---|
| 🖋️ **Editorial design** | Playfair Display headings, EB Garamond body — feels like a real book |
| 🌗 **Dark / light mode** | Warm parchment light theme, deep midnight ink dark theme |
| ⚡ **Fast navigation** | Next.js App Router with React Query caching |
| 🔍 **Live search** | Filter poets and poems instantly as you type |
| 📱 **Fully responsive** | Clean layout from mobile to widescreen |

---

## ✦ Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript 5
- **Styling** — Tailwind CSS v4 + shadcn/ui
- **Data fetching** — TanStack React Query v5
- **Fonts** — Playfair Display & EB Garamond (via `next/font`)
- **Data source** — [PoetryDB](https://poetrydb.org) (public API, no key required)

---

## ✦ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/nagraj05/poetry.git
cd poetry

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start reading.

---

## ✦ Project Structure

```
bronte/
├── app/
│   ├── page.tsx                    ← Landing page
│   ├── dashboard/
│   │   ├── page.tsx                ← Poets index
│   │   ├── [author]/page.tsx       ← Poems by author
│   │   └── [author]/[title]/       ← Individual poem view
├── components/                     ← UI components (sidebar, search, loader…)
├── hooks/                          ← React Query data hooks
├── services/                       ← PoetryDB API fetch functions
└── providers/                      ← QueryClientProvider
```

---

## ✦ Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

---

<div align="center">

Made with ♥ for people who still believe words matter.

</div>
