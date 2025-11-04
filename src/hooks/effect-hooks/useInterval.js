// PSEUDOCODE SKELETON – implement useInterval yourself.
// Goal: Call the latest `callback` on a timer every `delay` ms.
// Behavior: If delay is null, pause the interval. Always use latest callback.

// import { useEffect, useRef } from 'react'

/**
 * @param {() => void} callback
 * @param {number | null} delay
 */
export const useInterval = (callback, delay) => {
  // 1) useRef to store the latest callback.

  // 2) useEffect to update ref whenever callback changes.

  // 3) useEffect to manage setInterval when `delay` changes:
  //    - if delay is null, do nothing (paused)
  //    - else create interval that calls ref.current()
  //    - cleanup clears the interval
}


