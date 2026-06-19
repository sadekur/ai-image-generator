# AGENTS.md

## Overview

Two-package monorepo: `client/` (React 19, CRA) and `server/` (Node.js placeholder).
No root workspace orchestration — all commands run inside the subdirectory.

## Client (`client/`)

CRA-based React 19 app. Entrypoint: `src/index.js`.

| Command | Action |
|---------|--------|
| `npm start` | Dev server on `http://localhost:3000` |
| `npm test` | Jest (CRA interactive watch) |
| `npm run build` | Production build to `client/build/` |
| `npm run eject` | One-way — avoid |

Testing: CRA + react-testing-library + jest-dom. `setupTests.js` imports `@testing-library/jest-dom`. Single test: `src/App.test.js`.

ESLint uses CRA defaults (`eslintConfig` in `package.json`).

## Server (`server/`)

`package.json` exists with `main: "index.js"`, but **no source code yet** — no `index.js`, no dependencies.
Placeholder test script (`echo` + exit 1) — never use.

## Environment

- `client/.env` and `server/.env` exist, both empty
- All `.env` files (including root, `client/.env`, `server/.env`) are gitignored
- `.env*.local` files in both packages are also gitignored

## Constraints

- No root-level scripts — always work inside `client/` or `server/`
- `build/` and `coverage/` are gitignored
- `*.md` files are gitignored (AGENTS.md included)
