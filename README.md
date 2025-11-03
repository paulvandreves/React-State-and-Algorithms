# react-state-tutorial

Clean starter created with Vite + React.

- Boilerplate logos, styles, and template copy have been removed.
- Entry point: `src/main.jsx`
- App component: `src/App.jsx`

Scripts:
- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run preview` – preview production build

## Interview Prep Tutorial (TDD)

This repo includes a series of Test-Driven-Development challenges that ramp from easy to hard across two tracks:

- Data Structures & Algorithms
- React Hooks fundamentals

### Install testing dependencies

Run once:

```bash
npm i -D vitest @vitest/coverage-v8 @testing-library/react @testing-library/user-event @testing-library/dom jsdom
```

### Run tests (watch mode)

```bash
npm test
```

Or with UI:

```bash
npm run test:ui
```

### Track 1: Data Structures & Algorithms

Implement the functions/classes so the tests pass. Start at 01 and move down:

1. `src/challenges/01-sumArray.js` — basic array reduction
2. `src/challenges/02-fizzBuzz.js` — conditionals & modulo
3. `src/challenges/03-binarySearch.js` — O(log n) search
4. `src/challenges/04-stack.js` — LIFO stack implementation
5. `src/challenges/05-linkedList.js` — singly linked list
6. `src/challenges/06-lruCache.js` — map + list eviction policy

Each has a corresponding `*.test.js` file that defines expected behavior. Start with the simplest test, make it pass, then continue.

### Track 2: React Hooks Fundamentals

Build small, focused hooks and verify them with tests using `@testing-library/react`:

1. `src/hooks/useCounter.js` — count/increment/decrement/reset
2. `src/hooks/useToggle.js` — boolean toggler with setter
3. `src/hooks/usePrevious.js` — previous value across renders
4. `src/hooks/useDebounce.js` — debounce a value with timers

Run only a single test file while developing:

```bash
npm test -- src/hooks/useCounter.test.jsx
```

Tips:
- Keep implementations small; let tests drive the design.
- Prefer pure functions and controlled effects (for hooks, use React timers and clean up correctly).
- Add edge cases after the happy path is green.
