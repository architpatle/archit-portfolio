# Portfolio — Theme N · The Kinetic Type

> Black + Acid Lime · Bebas Neue + DM Mono · Typographic Brutalism

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Motion (Framer) | 11 |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx       ✅ Built
│   │   │   └── index.js
│   │   ├── Hero/                ⏳ Next
│   │   ├── About/               ⏳ Pending
│   │   ├── Experience/          ⏳ Pending
│   │   ├── Skills/              ⏳ Pending
│   │   ├── Projects/            ⏳ Pending
│   │   ├── Education/           ⏳ Pending
│   │   ├── Certifications/      ⏳ Pending
│   │   ├── Contact/             ⏳ Pending
│   │   └── Footer/              ⏳ Pending
│   ├── styles/
│   │   ├── theme.js             ✅ Design tokens
│   │   └── index.css            ✅ Global styles
│   ├── App.jsx                  ✅ Root component
│   └── main.jsx                 ✅ Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Design Tokens

All colors, fonts, spacing and transitions live in `src/styles/theme.js`.
Import in any component:

```js
import { theme } from "../../styles/theme";
```

## Customization

Open `src/styles/theme.js` and update:
- `NAV_LINKS` — your actual section labels & anchors
- Replace `YOUR.NAME` in `Navbar.jsx` with your real name

---

## Sections Build Order (Planned)

1. ✅ Navbar
2. ⏳ Hero
3. ⏳ About
4. ⏳ Experience
5. ⏳ Skills
6. ⏳ Projects
7. ⏳ Education
8. ⏳ Certifications
9. ⏳ Contact
10. ⏳ Footer
