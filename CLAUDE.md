# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 frontend application for Fundacja Everest (Everest Foundation) that uses:
- **Next.js 13** with App Router (experimental appDir enabled)
- **Chakra UI** for component library and styling
- **Contentful CMS** for content management
- **React Server Components** for data fetching

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Directory Structure

- **`app/`** - Next.js 13 App Router pages
  - Each subdirectory represents a route (e.g., `fundacja/`, `kontakt/`, `aktualnosci/`)
  - Routes contain `page.jsx` (page component) and optional `loading.jsx`
  - Page-specific components live in `[route]/components/` subdirectories
  - `layout.jsx` - Root layout with Navbar and Footer
  - `providers.js` - Chakra UI provider with custom theme configuration

- **`components/`** - Shared components used across multiple pages
  - `Navbar.jsx` - Main navigation component
  - `Footer.jsx` - Footer component
  - `Main/` - Homepage components (Hero, Main, Slider, Tabs)

- **`lib/`** - Contentful CMS data fetching utilities
  - Each file exports an async function that fetches specific content types
  - Pattern: `get[ContentType].jsx` (e.g., `getContent.jsx`, `getNews.jsx`)

- **`public/`** - Static assets (images, icons)

### Key Patterns

**Server Components & Data Fetching:**
- Pages are Server Components by default and fetch data directly from Contentful
- Import and call `lib/get*` functions at the page level
- Pass fetched data as props to client/server components

Example:
```jsx
import getContent from "@/lib/getContent";
import Component from "./components/Component";

export default async function Page() {
  const data = await getContent();
  return <Component content={data} />;
}
```

**Contentful Integration:**
- Environment variables (`.env`): `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_KEY`, `CONTENTFUL_DELIVERY_TOKEN`, `CONTENTFUL_PREVIEW_TOKEN`
- Each `lib/get*` function creates a Contentful client and fetches entries
- Rich text content is rendered using `@contentful/rich-text-react-renderer`
- Images from Contentful are hosted on `images.ctfassets.net` (configured in `next.config.js`)

**Styling:**
- Chakra UI components are used throughout
- Custom theme in `app/providers.js`:
  - Heading font: 'Open Sans'
  - Body font: 'Montserrat'
- Global styles in `app/index.css` and `app/globals.css`

**Client Components:**
- Use `"use client"` directive for interactive components
- `providers.js` is a client component wrapping the app with Chakra providers

### Navigation Structure

Routes correspond to foundation sections:
- `/` - Homepage (main landing page)
- `/fundacja` - About the foundation
- `/podopieczni` - Beneficiaries/proteges
- `/aktualnosci` - News/updates
- `/kontakt` - Contact page
- `/turnusy-wytchnieniowe` - Respite care programs
- `/polityka-prywatnosci` - Privacy policy
- `/thanks` - Thank you page

## Configuration Files

- **`next.config.js`** - Next.js configuration with experimental App Router and Contentful image domain
- **`jsconfig.json`** - Path aliases (`@/*` maps to root)
- **`.env`** - Contentful API credentials (not committed to git)
- **`.nvmrc`** - Node version specification

## Important Notes

- This project uses the Next.js 13 App Router (experimental in this version)
- All Contentful fetching happens server-side in page components
- When adding new Contentful content types, create a new `lib/get[ContentType].jsx` file following existing patterns
- Component naming uses PascalCase for React components
- Polish language is used in the UI (lang="pl" in layout)
