# 🖤✨ Portfolio — Dark Luxury Theme

A modern, full-screen portfolio built with **React 18 + TypeScript + Vite + Framer Motion + Tailwind CSS**.  
Dark obsidian background · Gold accents · Particle hero · Spring animations · Custom cursor · Fully responsive.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── index.html                    # Root HTML — Google Fonts loaded here
├── public/
│   └── favicon.svg               # Gold Z favicon (swap with your own)
└── src/
    ├── App.tsx                   # Root — load screen + section layout
    ├── main.tsx                  # React DOM entry
    ├── index.css                 # Global styles, CSS variables, animations
    ├── vite-env.d.ts
    ├── types/
    │   └── index.ts              # Shared TypeScript types
    ├── constants/
    │   └── index.ts              # ← ALL YOUR CONTENT LIVES HERE
    ├── utils/
    │   └── motion.ts             # Framer Motion variant presets
    ├── hooks/
    │   └── useInView.ts          # Intersection Observer + animated counter
    └── components/
        ├── CustomCursor.tsx      # Magnetic dot + spring ring cursor
        ├── Navbar.tsx            # Sticky glass nav + fullscreen mobile menu
        ├── Hero.tsx              # Particle canvas, animated name, CTAs
        ├── About.tsx             # Bio, animated stat counters, photo slot
        ├── Skills.tsx            # Devicon icons, filterable by category
        ├── Projects.tsx          # Filterable card grid with hover overlays
        ├── Experience.tsx        # Alternating timeline with scroll reveals
        ├── Contact.tsx           # Validated contact form + social links
        └── Footer.tsx            # Brand, nav, social, scroll-to-top
```

---

## 🎨 Personalisation

### 1 · Your Info (`src/constants/index.ts`)

Open `src/constants/index.ts` and update the `personalInfo` block at the top:

```ts
export const personalInfo: TPersonalInfo = {
  name:      "Jane Doe",
  firstName: "Jane",
  lastName:  "Doe",
  tagline:   "Full Stack Developer & Digital Craftsman",
  bio:       "Your bio here...",
  bio2:      "Second bio paragraph...",
  email:     "jane@example.com",
  location:  "Lagos, Nigeria",
  github:    "https://github.com/janedoe",
  linkedin:  "https://linkedin.com/in/janedoe",
  twitter:   "https://twitter.com/janedoe",
  stats: [
    { value: 3,  suffix: "+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Projects Shipped"  },
    { value: 15, suffix: "+", label: "Happy Clients"     },
    { value: 8,  suffix: "",  label: "Core Technologies" },
  ],
};
```

### 2 · Projects (`src/constants/index.ts`)

Each project entry:

```ts
{
  name:           "My Project",
  description:    "Short description...",
  tags:           [{ name: "React", color: "blue" }],  // blue | green | pink | purple
  image:          "/projects/my-project.png",          // put screenshots in /public/projects/
  sourceCodeLink: "https://myproject.com",
  category:       "E-Commerce",                        // used for filter tabs
  gradient:       "from-blue-900/40 via-purple-900/20 to-obsidian-mid",
},
```

### 3 · Your Photo (`src/components/About.tsx`)

Find the comment `/* Replace this div with an <img> */` and swap in:

```tsx
<img
  src="/me.jpg"          // place your photo at public/me.jpg
  alt="Your Name"
  className="w-full h-full object-cover object-top"
/>
```

### 4 · Logo (`public/favicon.svg` + Navbar / Footer)

Replace the inline `<svg>` polygon in `Navbar.tsx`, `Footer.tsx` and `App.tsx`'s load screen with your own logo SVG, or swap to an `<img>` tag:

```tsx
// In Navbar.tsx — replace Logo component
const Logo = () => (
  <img src="/logo.svg" alt="Logo" className="w-9 h-9" />
);
```

### 5 · Contact Form

The form currently simulates a send with a `setTimeout`. To hook it up:

**Option A — EmailJS (zero backend)**
```bash
npm install @emailjs/browser
```
```ts
// In Contact.tsx handleSubmit:
import emailjs from "@emailjs/browser";
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { name: form.name, email: form.email, message: form.message },
  "YOUR_PUBLIC_KEY"
);
```

**Option B — Formspree**
```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

---

## 🚀 Deployment

### Vercel (recommended — zero config)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to app.netlify.com/drop
```

### GitHub Pages
```bash
# vite.config.ts — add base: '/your-repo-name/'
npm run build
# push dist/ to gh-pages branch
```

---

## 🛠 Tech Stack

| Layer       | Library               | Version  |
|-------------|----------------------|----------|
| Framework   | React                | 18       |
| Language    | TypeScript           | 5        |
| Build       | Vite                 | 5        |
| Styling     | Tailwind CSS         | 3        |
| Animation   | Framer Motion        | 11       |
| Icons       | React Icons          | 5        |
| Fonts       | Cormorant Garamond, Syne, JetBrains Mono |  |
| Skill Icons | Devicons CDN         | —        |

---

## 🎛 Customising Colours

All colour tokens live in `tailwind.config.ts`:

```ts
colors: {
  gold: {
    DEFAULT: "#C9A84C",   // main gold
    light:   "#E8CB7A",   // lighter gold (gradient end)
    dark:    "#9A7A2E",   // darker gold (scrollbar)
    muted:   "rgba(201,168,76,0.15)",
  },
  obsidian: {
    DEFAULT: "#070707",   // deepest black
    mid:     "#0E0E0E",   // section alternate bg
    light:   "#161616",
    surface: "#1C1C1C",   // card bg
  },
}
```

CSS variables are also available globally via `src/index.css`:
```css
:root {
  --gold:         #C9A84C;
  --obsidian:     #070707;
  --text-primary: #F0EDE8;
}
```

---

## 📜 License

MIT — free to use, modify and deploy. Attribution appreciated but not required.
