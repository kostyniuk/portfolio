# SEO with Next.js App Router

A practical guide to achieving optimal SEO in Next.js, based on real implementation.

## Table of Contents

1. [Metadata Configuration](#metadata-configuration)
2. [Dynamic OG Images](#dynamic-og-images)
3. [Dynamic Favicons](#dynamic-favicons)
4. [File-Based Conventions](#file-based-conventions)
5. [Testing & Validation](#testing--validation)

---

## Metadata Configuration

### Basic Setup in `layout.tsx`

```tsx
import { Metadata } from "next/types";

export const metadata: Metadata = {
  // Required: Base URL for resolving relative URLs in metadata
  metadataBase: new URL("https://yourdomain.com"),

  // Title with template for nested pages
  title: {
    default: "Your Name — Your Title",
    template: "%s | Your Name", // Nested pages: "Blog | Your Name"
  },

  // Description (150-160 chars optimal for search results)
  description: "Concise description of who you are and what you do.",

  // Keywords (less important now, but still useful)
  keywords: ["keyword1", "keyword2", "keyword3"],

  // Author info
  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
  creator: "Your Name",

  // OpenGraph (Facebook, LinkedIn, Discord, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Your Name",
    title: "Your Name — Your Title",
    description: "Same or similar to main description.",
  },

  // Twitter/X Cards
  twitter: {
    card: "summary_large_image", // Use large image for better visibility
    title: "Your Name — Your Title",
    description: "Same or similar to main description.",
    creator: "@yourhandle",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
```

### Key Points

- **`metadataBase`** is required for OG/Twitter images to have absolute URLs
- **Title template** automatically formats nested page titles
- Keep **descriptions consistent** across default, OG, and Twitter
- **`summary_large_image`** shows a bigger preview on Twitter/X

---

## Dynamic OG Images

### Create `app/opengraph-image.tsx`

Next.js automatically generates `og:image` meta tags from this file.

```tsx
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Your Name — Your Title";
export const size = {
  width: 1200,  // Standard OG image width
  height: 630,  // Standard OG image height
};
export const contentType = "image/png";

export default async function Image() {
  // Load local images as base64
  const profileData = await readFile(join(process.cwd(), "public/profile.jpg"));
  const profileBase64 = `data:image/jpeg;base64,${profileData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "80px",
          background: "#1a1a1c",
          color: "#f5f5f3",
        }}
      >
        {/* Your design here */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: "64px", fontWeight: 600 }}>Your Name</div>
          <div style={{ fontSize: "28px", color: "#a0a0a0" }}>Your Title</div>
        </div>
        <img
          src={profileBase64}
          width={400}
          height={400}
          style={{ borderRadius: "24px", objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}
```

### Twitter Image

Create `app/twitter-image.tsx` with the same structure. Next.js uses this for `twitter:image`.

```tsx
// Can be identical to opengraph-image.tsx
// Or customize for Twitter's display
```

### Tips for OG Images

- **1200x630** is the standard size
- Keep text **large and readable** — it's often shown small
- **Dark backgrounds** work well across platforms
- Include your **photo/logo** for recognition
- Test with real social platforms, not just preview tools

---

## Dynamic Favicons

### Create `app/icon.tsx`

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1c",
          borderRadius: 4,
          color: "#f5f5f3",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        AK
      </div>
    ),
    { ...size }
  );
}
```

### Apple Touch Icon

Create `app/apple-icon.tsx` for iOS home screen icons:

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1c",
          borderRadius: 32,
          color: "#f5f5f3",
          fontSize: 80,
          fontWeight: 700,
        }}
      >
        AK
      </div>
    ),
    { ...size }
  );
}
```

---

## File-Based Conventions

Next.js App Router uses **file naming conventions** to auto-generate meta tags:

| File | Generated Tag |
|------|---------------|
| `app/opengraph-image.tsx` | `<meta property="og:image" ...>` |
| `app/twitter-image.tsx` | `<meta name="twitter:image" ...>` |
| `app/icon.tsx` | `<link rel="icon" ...>` |
| `app/apple-icon.tsx` | `<link rel="apple-touch-icon" ...>` |
| `app/sitemap.ts` | `/sitemap.xml` |
| `app/robots.ts` | `/robots.txt` |

### Static Files Also Work

You can use static images instead of dynamic generation:

```
app/
├── opengraph-image.png    # Static OG image
├── twitter-image.jpg      # Static Twitter image
├── icon.ico               # Static favicon
├── apple-icon.png         # Static Apple touch icon
```

### Route-Specific Images

Nest these files in route folders for page-specific images:

```
app/
├── opengraph-image.tsx        # Site-wide default
├── blog/
│   └── opengraph-image.tsx    # Blog-specific
├── projects/
│   └── opengraph-image.tsx    # Projects-specific
```

---

## Testing & Validation

### Preview Tools

| Tool | URL | Best For |
|------|-----|----------|
| **OpenGraph.xyz** | opengraph.xyz | Multi-platform preview |
| **Metatags.io** | metatags.io | Live preview + code |
| **Facebook Debugger** | developers.facebook.com/tools/debug | Facebook + cache clear |
| **Twitter Validator** | cards-dev.twitter.com/validator | Twitter/X cards |
| **LinkedIn Inspector** | linkedin.com/post-inspector | LinkedIn posts |

### Local Testing

```bash
# Check OG image renders correctly
curl -s http://localhost:3000/opengraph-image -o test-og.png
open test-og.png

# Check meta tags in HTML
curl -s http://localhost:3000 | grep -E '<meta property="og:|<meta name="twitter:'
```

### After Deployment

1. Run your URL through **Facebook Debugger** to clear cache
2. Check **Twitter Validator** for card preview
3. Test in **LinkedIn Post Inspector** if sharing there
4. Verify **favicon** appears in browser tab

### Common Issues

| Issue | Solution |
|-------|----------|
| Images not showing | Check `metadataBase` is set |
| Cached old images | Use platform debuggers to clear cache |
| Wrong dimensions | Ensure 1200x630 for OG, 32x32 for favicon |
| Fonts not loading | Use system fonts in ImageResponse |

---

## Quick Checklist

- [ ] `metadataBase` set in `layout.tsx`
- [ ] Title with template configured
- [ ] Description under 160 characters
- [ ] `opengraph-image.tsx` created (1200x630)
- [ ] `twitter-image.tsx` created (can mirror OG)
- [ ] `icon.tsx` created (32x32)
- [ ] `apple-icon.tsx` created (180x180)
- [ ] Tested with preview tools
- [ ] Cleared cache on social platforms after deploy
