import { useState } from 'react'
import { usePrevious } from '../hooks/usePrevious'

const PreviousDemo = () => {
  const [val, setVal] = useState('')
  const prev = usePrevious(val)
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">usePrevious</h2>
      <input className="input" value={val} onChange={(e) => setVal(e.target.value)} placeholder="Type to change value" />
      <div className="mt-2 text-sm text-gray-600">Current: {val || '(empty)'} | Previous: {prev === undefined ? '(undefined)' : prev}</div>
    </div>
  )
}

export default PreviousDemo


