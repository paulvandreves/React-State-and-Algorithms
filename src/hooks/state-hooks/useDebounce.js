import { useState, useEffect} from 'react'
/**
 * https://react.dev/reference/react/useEffect
 * 
 * 
 * 
 * useDebounce returns a value that updates only after a quiet delay.
 * Common use case: debounce user input before triggering an API request.
 *
 * @template T
 * @param {T} value - The incoming value to debounce
 * @param {number} [delay=300] - Debounce delay in ms
 * @returns {T} Debounced value
 */
export const useDebounce = (value, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return debounceValue; 
  }, [value, delay]);
}; 