import { useState } from 'react'
import { useDebounce } from '../hooks/state-hooks/useDebounce'

const DebounceDemo = () => {
  const [text, setText] = useState('')
  const debounced = useDebounce(text, 500)
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">useDebounce (500ms)</h2>
      <input className="input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type quickly..." />
      <div className="mt-2 text-sm text-gray-600">Immediate: {text || '(empty)'} | Debounced: {debounced || '(empty)'}</div>
    </div>
  )
}

export default DebounceDemo


