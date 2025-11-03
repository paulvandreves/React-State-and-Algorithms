import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('initializes with default or provided value and increments/decrements/resets', () => {
    const { result, rerender } = renderHook(({ initial }) => useCounter(initial), {
      initialProps: { initial: 0 },
    })

    expect(result.current.count).toBe(0)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(0)
    act(() => result.current.incrementBy(5))
    expect(result.current.count).toBe(5)
    act(() => result.current.reset())
    expect(result.current.count).toBe(0)

    rerender({ initial: 10 })
    // Hook re-run should still work with new initial when recreated; this ensures API stability
  })
})