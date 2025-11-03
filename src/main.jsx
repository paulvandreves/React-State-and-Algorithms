import React, { StrictMode, Component, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import { useCounter } from './hooks/useCounter'
import { useToggle } from './hooks/useToggle'
import { usePrevious } from './hooks/usePrevious'
import { useDebounce } from './hooks/useDebounce'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error) {}
  render() {
    if (this.state.hasError) {
      return (
        <div className="border border-red-300 rounded-lg bg-red-50 p-4 text-red-800">
          <div className="font-semibold">Section failed</div>
          <div className="text-sm mt-1">{String(this.state.error?.message || this.state.error)}</div>
          <div className="text-xs mt-2">Implement the hook to interact with it.</div>
        </div>
      )
    }
    return this.props.children
  }
}

function CounterDemo() {
  const { count, increment, decrement, incrementBy, reset } = useCounter(0)
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">useCounter</h2>
      <div className="text-lg">Count: <span className="font-mono font-bold">{count}</span></div>
      <div className="flex gap-2 mt-3">
        <button className="btn" onClick={decrement}>-1</button>
        <button className="btn" onClick={increment}>+1</button>
        <button className="btn" onClick={() => incrementBy(5)}>+5</button>
        <button className="btn-secondary" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

function ToggleDemo() {
  const { value, toggle, set } = useToggle(false)
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">useToggle</h2>
      <div className="text-lg">Value: <span className="font-mono font-bold">{String(value)}</span></div>
      <div className="flex gap-2 mt-3">
        <button className="btn" onClick={toggle}>Toggle</button>
        <button className="btn" onClick={() => set(true)}>Set true</button>
        <button className="btn" onClick={() => set(false)}>Set false</button>
      </div>
    </div>
  )
}

function PreviousDemo() {
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

function DebounceDemo() {
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

function HookPlayground() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-4">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Hook Playground</h1>
      <p className="text-gray-600 mb-2">Interact with each hook below while you TDD the implementation.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <ErrorBoundary>
          <CounterDemo />
        </ErrorBoundary>
        <ErrorBoundary>
          <ToggleDemo />
        </ErrorBoundary>
        <ErrorBoundary>
          <PreviousDemo />
        </ErrorBoundary>
        <ErrorBoundary>
          <DebounceDemo />
        </ErrorBoundary>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold">React State Tutorial</div>
          <nav className="text-sm text-gray-600"><a className="hover:text-gray-900" href="#">Docs</a></nav>
        </div>
      </header>
      <main>
        <section className="max-w-5xl mx-auto px-6 py-8">
          <App />
        </section>
        <section className="px-6 py-2">
          <HookPlayground />
        </section>
      </main>
      <footer className="mt-8 text-center text-xs text-gray-500 py-6">Built with Vite + React + Tailwind</footer>
    </div>
  </StrictMode>,
)
