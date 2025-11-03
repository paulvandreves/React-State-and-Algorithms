import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useToggle } from './useToggle'

describe('useToggle', () => {
  it('toggles boolean state', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current.value).toBe(false)
    act(() => result.current.toggle())
    expect(result.current.value).toBe(true)
    act(() => result.current.set(true))
    expect(result.current.value).toBe(true)
    act(() => result.current.set(false))
    expect(result.current.value).toBe(false)
  })
})