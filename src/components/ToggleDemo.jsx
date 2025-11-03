import { useToggle } from '../hooks/state-hooks/useToggle'

const ToggleDemo = () => {
  const { value, toggle } = useToggle(false)
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-2">useToggle</h2>
      <div className="flex items-center justify-between mt-3">
        <div className="text-lg">Value: <span className="font-mono font-bold">{String(value)}</span></div>
        <button
          type="button"
          role="switch"
          aria-checked={value}
          onClick={toggle}
          className={
            `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ` +
            (value ? 'bg-green-500 focus:ring-green-500' : 'bg-gray-300 focus:ring-gray-400')
          }
        >
          <span
            className={
              `inline-block h-5 w-5 transform rounded-full bg-white transition-transform ` +
              (value ? 'translate-x-5' : 'translate-x-1')
            }
          />
        </button>
      </div>
    </div>
  )
}

export default ToggleDemo