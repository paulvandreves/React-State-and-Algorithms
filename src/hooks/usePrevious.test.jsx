import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { usePrevious } from './usePrevious'

describe('usePrevious', () => {
  it('returns previous value after updates', () => {
    const { result, rerender } = renderHook(({ v }) => usePrevious(v), {
      initialProps: { v: 1 },
    })
    expect(result.current).toBeUndefined()
    rerender({ v: 2 })
    expect(result.current).toBe(1)
    rerender({ v: 3 })
    expect(result.current).toBe(2)
  })
})

