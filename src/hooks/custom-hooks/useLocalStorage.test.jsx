import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  it('reads, writes, and removes values from localStorage', () => {
    const key = 'ls:test'
    window.localStorage.removeItem(key)

    const { result, rerender } = renderHook(({ k }) => useLocalStorage(k, 1), {
      initialProps: { k: key },
    })

    expect(result.current[0]).toBe(1)

    act(() => result.current[1](2))
    expect(result.current[0]).toBe(2)
    expect(JSON.parse(window.localStorage.getItem(key))).toBe(2)

    // Rerender with same key should hydrate from storage
    rerender({ k: key })
    expect(result.current[0]).toBe(2)

    // Remove
    act(() => result.current[2]())
    expect(result.current[0]).toBe(1)
    expect(window.localStorage.getItem(key)).toBe(null)
  })
})


