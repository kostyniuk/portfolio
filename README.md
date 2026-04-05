# Portfolio

My portfolio. Built with Next.js, shadcn/ui, React Bits, and Motion. Main inspiration is the Luma theme by shadcn and translucent designs. Also my first experience with Motion -- ended up pretty cool I think :)

## Features

- **Bio & Socials** -- Profile card displaying current role, location (Stockholm, Sweden), and email with click-to-copy. Links to GitHub and other social accounts with animated hover states
- **Projects** -- Dedicated section for featured projects with full descriptions, feature breakdowns, embedded video previews, live demo links, and source code references
- **Experience** -- Interactive work history timeline covering career progression. Each role is expandable with detailed achievements, impact statements, and the specific tech stack used at that position
- **Education** -- Academic background with university details and degree information
- **Interests** -- Visual avatar grid of preferred technologies and tools (React, TypeScript, Next.js, PostgreSQL, Bun, Vercel, TanStack, Drizzle, and more)
- **Dark Mode** -- Full dark/light theme support. Toggle via the theme button in the header or press `d` as a keyboard shortcut. Preference persists across sessions
- **Sound Effects** -- Subtle audio feedback on certain interactions using a custom sound engine
- **Custom Visual Effects** -- Electric Border animations on cards, Shiny Text highlights, and glassmorphism/frosted-glass styling throughout the UI
- **Responsive Design** -- Fully responsive layout that adapts across desktop, tablet, and mobile viewports

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui
- **Animations:** Motion (Framer Motion), custom effects (Apple Hello, Electric Border, Shiny Text)
- **Theming:** Dark/light mode via next-themes
- **Linting/Formatting:** ESLint, oxlint, Prettier, oxfmt
- **Package Manager:** Bun
- **Analytics:** Vercel Analytics

## Getting Started

```bash
# Install dependencies
bun install

# Run dev server (Turbopack)
bun run dev

# Build for production
bun run build

# Start production server
bun start
```

The dev server runs at `http://localhost:3000`.

## Project Structure

```
app/              → Pages, layout, header (App Router)
components/       → Shared UI components, icons, theme toggle
features/         → Feature modules (profile, projects, experience, education, interests)
hooks/            → Custom hooks (clipboard, sound, sticky scroll)
lib/              → Utilities, sound engine
public/           → Static assets (images, videos, logos)
```
