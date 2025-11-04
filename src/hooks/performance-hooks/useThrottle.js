// PSEUDOCODE SKELETON – implement useThrottle yourself.
// Goal: Return a version of `value` that updates at most once per `delay` ms.
// Behavior: Allow trailing update so the latest value is eventually emitted.

// import { useEffect, useRef, useState } from 'react'

/**
 * @template T
 * @param {T} value
 * @param {number} [delay=200]
 * @returns {T}
 */
export const useThrottle = (value, delay = 200) => {
  // 1) useState to hold throttledValue initialized with incoming `value`.

  // 2) useRef to track last execution timestamp.

  // 3) useRef to hold a trailing timeout id.

  // 4) useEffect on [value, delay]:
  //    - compute time since last execute
  //    - if >= delay: update state immediately and record timestamp
  //    - else: schedule a timeout for the remaining time to set latest value
  //    - cleanup: clear any scheduled timeout

  // 5) return throttledValue

  // Placeholder return
  return value
}


