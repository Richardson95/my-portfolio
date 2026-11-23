# emmanuel adeyemo — portfolio

My personal site. React 19, TypeScript, Vite and Tailwind CSS v4.

```bash
npm install
npm run dev
npm run build
```

## Where things live

- `src/data/projects.ts`: every project on the site. Add one here and it shows up; `featured` gets the long write-up, `more` goes in the grid.
- `src/data/experience.ts`: work history.
- `src/data/profile.ts`: contact links, résumé link, toolbox and the numbers in the About section.
- `public/work/`: screenshots (1200×750 WebP) and app icons.

Screenshots are taken from the live sites at 1440×900 and converted to WebP at quality ~75, so the whole folder stays under a megabyte.

Light and dark themes follow the visitor's system setting. Colours are CSS variables at the top of `src/index.css`.
