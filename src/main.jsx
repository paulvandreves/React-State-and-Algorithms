import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import CounterDemo from './components/CounterDemo.jsx'
import ToggleDemo from './components/ToggleDemo.jsx'
import PreviousDemo from './components/PreviousDemo.jsx'
import DebounceDemo from './components/DebounceDemo.jsx'

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
