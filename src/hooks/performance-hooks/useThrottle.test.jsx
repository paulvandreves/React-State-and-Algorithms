import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useThrottle } from './useThrottle'

describe('useThrottle', () => {
  it('throttles rapid value changes to at most once per delay', () => {
    vi.useFakeTimers()

    const { result, rerender } = renderHook(({ v, d }) => useThrottle(v, d), {
      initialProps: { v: 0, d: 200 },
    })

    expect(result.current).toBe(0)

    rerender({ v: 1, d: 200 })
    // leading update should not fire immediately since last update was just now
    expect(result.current).toBe(0)

    act(() => {
      vi.advanceTimersByTime(199)
    })
    expect(result.current).toBe(0)

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current).toBe(1)

    // Multiple rapid changes should collapse into one trailing update
    rerender({ v: 2, d: 200 })
    rerender({ v: 3, d: 200 })
    expect(result.current).toBe(1)

    act(() => {
      vi.advanceTimersByTime(200)
    })
    expect(result.current).toBe(3)

    vi.useRealTimers()
  })
})


