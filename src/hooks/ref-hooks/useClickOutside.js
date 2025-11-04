// PSEUDOCODE SKELETON – implement useClickOutside yourself.
// Goal: Call `handler` when a click/touch occurs outside target ref(s).

// import { useEffect } from 'react'

/**
 * @param {React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[]} targets
 * @param {(event: MouseEvent | TouchEvent) => void} handler
 */
export const useClickOutside = (targets, handler) => {
  // 1) useEffect with [targets, handler] deps to add and cleanup listeners.

  // 2) Normalize to an array of refs.

  // 3) Helper: isEventOutside(target) => true if all refs either empty or do not contain target.

  // 4) onPointer handler: if outside, call handler(event).

  // 5) Add listeners on document for mousedown and touchstart (passive true on touchstart),
  //    return cleanup removing them.
}


