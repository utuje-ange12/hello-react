# Hello React: Developer Profile Page

A developer profile page rebuilt with **React 19**, **Vite** and **Tailwind CSS v4**.
This is the classwork for **Week 7, Day 1: What is React? Setting Up Your First Project** (Advanced Frontend Web Development).

The goal is clean structure and reusable JSX: small components that receive content through props.

## What the page shows

- Full name, role, city and a short bio
- A list of at least four skills
- At least two sample projects with working links
- A responsive layout that works on mobile and desktop

## Tech stack

| Tool | Purpose |
|---|---|
| React 19 | UI library: components and JSX |
| Vite | Development server and build tool |
| Tailwind CSS v4 | Utility classes for styling (via `@tailwindcss/vite`) |
| Node.js 20.19+ or 22.12+ | Runtime needed by Vite |

## Components

All reusable components live in `src/components/` and are composed in `src/App.jsx`.

| Component | Props | Purpose |
|---|---|---|
| `Navbar` | `name` | Top bar with the name and section links |
| `ProfileHeader` | `name`, `role`, `city`, `bio` | Main identity block |
| `SkillList` | `skills` (array) | Renders skill badges with `.map()` and stable `key`s |
| `ProjectCard` | `title`, `description`, `link` | One project card |

Data flows one way: `App` (parent) passes props down to each child component.

## Project structure

```
hello-react/
├── public/                 # static files served directly
├── src/
│   ├── assets/             # imported images and other assets
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProfileHeader.jsx
│   │   ├── SkillList.jsx
│   │   └── ProjectCard.jsx
│   ├── App.jsx             # composes the components and holds the data
│   ├── index.css           # global CSS, contains @import "tailwindcss"
│   └── main.jsx            # React entry point (createRoot)
├── index.html              # HTML shell containing #root
├── package.json            # dependencies and npm scripts
├── vite.config.js          # Vite, React and Tailwind plugins
└── .gitignore              # excludes node_modules and dist
```

## Getting started

### Requirements

Check your versions:

```bash
node -v
npm -v
```

You need Node.js 20.19+ or 22.12+.

### Run it locally

```bash
git clone https://github.com/utuje-ange12/hello-react.git
cd hello-react
npm install
npm run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173).

### How this project was created

```bash
npm create vite@latest hello-react -- --template react
cd hello-react
npm install
npm install tailwindcss @tailwindcss/vite
```

Then:

1. Added `tailwindcss()` to the `plugins` list in `vite.config.js`
2. Replaced the content of `src/index.css` with `@import "tailwindcss";`
3. Confirmed `src/main.jsx` imports `./index.css`

No Tailwind v3 `init` command or `tailwind.config.js` is needed with Tailwind v4.

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run lint` | Runs the ESLint script |
| `npm run build` | Creates the optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for checking |

## Classwork requirements checklist

- [x] Project created with Vite, React 19 and Tailwind CSS v4
- [ ] Functional components with capitalized names
- [ ] Reusable components in `src/components/`, imported into `App.jsx`
- [ ] At least two examples of props
- [ ] Skills and projects rendered with `.map()` and stable keys
- [ ] Styled with Tailwind utility classes
- [ ] Looks good on mobile and desktop
- [ ] Meaningful HTML elements, alt text on images, working project links
- [ ] No direct DOM manipulation for React content
- [ ] Components inspected in React DevTools
- [ ] `npm run build` succeeds
- [ ] `npm run preview` shows the same page as dev

## Progress log

| Stage | Status |
|---|---|
| 1. Setup: Vite, React, Tailwind v4 | Done |
| 2. Navbar and ProfileHeader | To do |
| 3. SkillList and ProjectCard | To do |
| 4. App.jsx composed with data | To do |
| 5. React DevTools inspection | To do |
| 6. Production build and preview | To do |

## Key concepts practiced

- **Components:** reusable functions that return JSX
- **JSX:** `className` instead of `class`, closed tags, one parent element
- **Props:** read-only inputs passed from parent to child
- **One-way data flow:** data moves down from `App` to its children
- **Declarative UI:** describe what the screen should look like, and React updates the DOM
- **Virtual DOM and reconciliation:** React compares the old and new element trees and commits only the needed changes

## Notes

- `node_modules/` and `dist/` are not committed to Git.
- Building (`npm run build`) is not the same as deploying. The `dist/` folder must be uploaded to a web host to publish the app.

## Author

**utuje-ange12**
GitHub: [@utuje-ange12](https://github.com/utuje-ange12)

## Resources

- [React Learn](https://react.dev/learn)
- [Your First Component](https://react.dev/learn/your-first-component)
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Vite Getting Started](https://vite.dev/guide/)
- [Tailwind CSS v4 with Vite](https://tailwindcss.com/docs/installation/using-vite)