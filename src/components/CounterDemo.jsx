import { useCounter } from '../hooks/state-hooks/useCounter'

const CounterDemo = () => {
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

export default CounterDemo


