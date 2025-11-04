import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useInterval } from './useInterval'

describe('useInterval', () => {
  it('invokes the latest callback on each interval tick and responds to delay changes', () => {
    vi.useFakeTimers()

    const spy = vi.fn()
    const { rerender } = renderHook(({ cb, d }) => useInterval(cb, d), {
      initialProps: { cb: spy, d: 100 },
    })

    act(() => {
      vi.advanceTimersByTime(350)
    })
    expect(spy).toHaveBeenCalledTimes(3)

    const spy2 = vi.fn()
    rerender({ cb: spy2, d: 100 })

    act(() => {
      vi.advanceTimersByTime(200)
    })
    expect(spy2).toHaveBeenCalledTimes(2)

    // Pause
    rerender({ cb: spy2, d: null })
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(spy2).toHaveBeenCalledTimes(2)

    vi.useRealTimers()
  })
})


