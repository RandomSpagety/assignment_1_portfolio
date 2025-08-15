# Assignment 1 — React Portfolio (Starter)

This repo is a **ready-to-run starter** for your A1. It includes:
- 5 pages (Home, About, Projects, Services, Contact)
- Site-wide nav + custom logo
- About page with **legal name**, **headshot**, and **Resume (PDF) link**
- Projects (≥3) grid
- Services list
- Contact form that **captures data and redirects to Home** (no backend).
- Clean styling, Vite + React Router

## How to run
```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev
# open the printed localhost URL
```

## What to customize (do these before submission)
- **Logo**: replace `src/assets/logo.svg` if you want
- **Headshot**: replace `src/assets/headshot.svg` with your own photo (same name or update import in About.jsx)
- **Legal Name**: update in `src/pages/Home.jsx` and `src/pages/About.jsx`
- **Resume**: replace `public/resume.pdf` with your own PDF (keep the same name)
- **Projects**: edit `src/pages/Projects.jsx` data array (title/role/outcome/images)
- **Services**: edit `src/pages/Services.jsx`
- **Contact behavior**: currently logs to console + alert + redirects (A1 requirement)

## Build
```bash
npm run build
npm run preview
```
