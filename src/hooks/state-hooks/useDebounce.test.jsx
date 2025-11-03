import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  it('debounces value changes by delay', () => {
    vi.useFakeTimers()
    const { result, rerender } = renderHook(({ v, d }) => useDebounce(v, d), {
      initialProps: { v: 'a', d: 200 },
    })
    expect(result.current).toBe('a')
    rerender({ v: 'ab', d: 200 })
    expect(result.current).toBe('a')
    act(() => {
      vi.advanceTimersByTime(199)
    })
    expect(result.current).toBe('a')
    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current).toBe('ab')
    vi.useRealTimers()
  })
})

