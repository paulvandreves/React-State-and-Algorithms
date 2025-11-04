// PSEUDOCODE SKELETON – implement the logic yourself while learning React Hooks.
// Goal: Keep React state in sync with window.localStorage for a given key.
// API: const [value, setValue, remove] = useLocalStorage(key, initialValue)
// - value: current state value (parsed from localStorage on mount)
// - setValue(next): updates state and writes JSON to localStorage
// - remove(): removes key from localStorage and resets state to initialValue

// import { useState, useEffect, useCallback } from 'react'

/**
 * @template T
 * @param {string} key
 * @param {T | (() => T)} initialValue
 * @returns {[T, (next: T | ((prev: T) => T)) => void, () => void]}
 */
export const useLocalStorage = (key, initialValue) => {
  // 1) Create a lazy initializer function that:
  //    - tries to read window.localStorage.getItem(key)
  //    - if found, JSON.parse and return it (handle try/catch for malformed JSON)
  //    - if not found or parse fails, return initialValue (call if it's a function)

  // 2) useState with the lazy initializer from step 1
  //    const [value, setValue] = useState(() => /* read from storage or initial */)

  // 3) useEffect when `key` changes:
  //    - re-read from storage using the same logic as step 1
  //    - update state to what storage currently has for the new key

  // 4) create setValueSafely via useCallback([key]):
  //    - setValue(prev => resolve next value (support function updaters))
  //    - write JSON.stringify(resolved) to localStorage under `key` (try/catch)

  // 5) create remove via useCallback([key, initialValue]):
  //    - removeItem(key) from localStorage (try/catch)
  //    - reset state back to initialValue (call if function)

  // 6) return [value, setValueSafely, remove]

  // Placeholder so file compiles until you implement it:
  return [undefined, () => {}, () => {}]
}


