# LiangTang

[![Deploy to GitHub Pages](https://github.com/unknowIfGuestInDream/LiangTang/actions/workflows/github-pages.yml/badge.svg)](https://github.com/unknowIfGuestInDream/LiangTang/actions/workflows/github-pages.yml)
[![CI](https://github.com/unknowIfGuestInDream/LiangTang/actions/workflows/node.js.yml/badge.svg)](https://github.com/unknowIfGuestInDream/LiangTang/actions/workflows/node.js.yml)

Personal site of Liang Tang ([resume.tlcsdm.com](https://resume.tlcsdm.com/)),
based on the latest [mldangelo/personal-site](https://github.com/mldangelo/personal-site)
template (Next.js 16 + TypeScript + Tailwind CSS).

## Quick start

```bash
nvm use # uses .nvmrc
npm install
npm run dev    # development at http://localhost:3000
npm run build  # static export to ./out
npm run lint   # Biome
npm test       # Vitest
```

## Customizing the data

All personal data lives under [`src/data/`](src/data/):

- `about.ts` — markdown shown on the About page
- `contact.ts` — links shown on the Contact page and footer
- `projects.ts` — projects shown on the Projects page
- `routes.ts` — top-navigation routes
- `resume/degrees.ts` · `resume/courses.ts` · `resume/skills.ts` · `resume/work.ts`
- `stats/personal.tsx` · `stats/site.ts`

Project images live in [`public/images/projects/`](public/images/projects/),
and the deployed CNAME is in [`public/CNAME`](public/CNAME).

## Deployment

Pushes to `master` automatically build with Next.js's static export
(`output: 'export'`) and deploy to GitHub Pages via
[`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).

## License

MIT — see [LICENSE](LICENSE). Template originally by
[Michael D'Angelo](https://github.com/mldangelo).
