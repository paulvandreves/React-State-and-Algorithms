import { useState } from 'react'

/**
 * useToggle provides boolean state with a handy toggle and setter.
 * Common use case: show/hide UI (modals, dropdowns), enable/disable flags, feature switches.
 *
 * @param {boolean} [initial=false] - Initial boolean value
 * @returns {{
 *   value: boolean,
 *   toggle: () => void,
 *   set: (next: boolean) => void
 * }}
 */

export const useToggle = (initial = false) => {
}