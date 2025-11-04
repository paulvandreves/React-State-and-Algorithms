import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useEventCallback } from './useEventCallback'

describe('useEventCallback', () => {
  it('returns a stable reference that calls the latest handler', () => {
    const calls = []
    const { result, rerender } = renderHook(({ n }) => {
      const handler = (x) => calls.push(`${n}:${x}`)
      return useEventCallback(handler)
    }, { initialProps: { n: 'A' } })

    const cb1 = result.current
    cb1(1)
    expect(calls).toEqual(['A:1'])

    rerender({ n: 'B' })
    const cb2 = result.current
    expect(cb2).toBe(cb1) // stable identity
    cb2(2)
    expect(calls).toEqual(['A:1', 'B:2'])
  })
})


