# Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
- Light/dark mode (class-based, respects OS preference, persists in localStorage)
- Cursor-following ambient glow (disabled on touch devices / reduced-motion)
- Animated gradient hero heading
- Infinite tech-stack marquee
- Animated sliding tabs for the Skills section
- Spotlight hover effect on project cards
- Scroll-reveal animations throughout
- Fully responsive, from small phones up to large desktops

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Personalizing

Almost everything you need to change lives in **`src/data/content.js`** —
your name, title, bio, tech stack, skills, projects, experience, and social
links are all plain arrays/objects there.

Search the codebase for:
- `TODO` — text you should replace
- `IMAGE:` — containers meant to hold a real `<img>`. Drop your images in
  `public/` (e.g. `public/profile.jpg`) and reference them as `/profile.jpg`.

## Project structure

```
src/
  components/
    sections/     # Hero, About, TechStack, Skills, Projects, Experience, Contact
    Navbar.jsx
    Footer.jsx
    ThemeToggle.jsx
    CursorGlow.jsx
    Reveal.jsx           # scroll-reveal wrapper
    SpotlightCard.jsx    # reusable hover-glow card
  context/
    ThemeContext.jsx     # dark/light mode state
  hooks/
    useCursorGlow.js
    useSpotlight.js
  data/
    content.js           # <-- edit this file to personalize the site
  App.jsx
  main.jsx
  index.css
```

## Deploying to Vercel

This is a standard Vite project, so Vercel auto-detects it:

1. Push this project to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. (Vercel fills these in automatically.)
4. Deploy.

No environment variables or extra config are required.
