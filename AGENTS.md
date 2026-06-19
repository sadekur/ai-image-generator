# AGENTS.md

## Overview

Two-package monorepo: `client/` (React 19, CRA) and `server/` (Node.js).  
No root workspace orchestration — commands run inside each subdirectory.

## Commands (run from `client/`)

| Command | Action |
|---------|--------|
| `npm start` | Dev server on `http://localhost:3000` |
| `npm test` | Jest (CRA, interactive watch) |
| `npm run build` | Production build to `client/build/` |
| `npm run eject` | One-way — avoid |

Server has no dependencies or test script yet.

## Testing

- CRA + react-testing-library + jest-dom
- `setupTests.js` imports `@testing-library/jest-dom`
- Single test file: `client/src/App.test.js`

## Structure

```
client/     → CRA React app (entry: src/index.js)
server/     → Placeholder (no deps, no code yet)
```

## Constraints

- No root-level scripts — always `cd client` first.
- No lint/typecheck config beyond CRA defaults (`eslintConfig` in package.json).
- `.env*.local` files are gitignored.
