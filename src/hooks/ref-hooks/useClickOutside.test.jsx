import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import { useClickOutside } from './useClickOutside'

function Wrapper({ onOutside }) {
  const ref = useRef(null)
  useClickOutside(ref, onOutside)
  return (
    <div>
      <div data-testid="outside">outside</div>
      <div data-testid="inside" ref={ref}>inside</div>
    </div>
  )
}

describe('useClickOutside', () => {
  it('invokes handler when clicking outside the target', () => {
    const spy = vi.fn()
    const { getByTestId } = render(<Wrapper onOutside={spy} />)
    fireEvent.mouseDown(getByTestId('inside'))
    expect(spy).not.toHaveBeenCalled()
    fireEvent.mouseDown(getByTestId('outside'))
    expect(spy).toHaveBeenCalledTimes(1)
  })
})


