import { useState } from 'react'
import './Counter.css'

const STEP_OPTIONS = [1, 5, 10]

export default function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const increment = () => setCount((c) => c + step)
  const decrement = () => setCount((c) => c - step)
  const reset = () => setCount(0)

  let hint = 'Start at zero — tap + or −'
  if (count > 0) hint = 'Counting up'
  else if (count < 0) hint = 'Counting down'

  return (
    <div className="counter-card">
      <p className="counter-label">Current count</p>
      <output className="counter-value" aria-live="polite">
        {count}
      </output>
      <p className="counter-hint">{hint}</p>

      <div className="counter-controls" role="group" aria-label="Counter controls">
        <button type="button" className="btn btn-secondary" onClick={decrement}>
          −{step}
        </button>
        <button type="button" className="btn btn-primary" onClick={increment}>
          +{step}
        </button>
      </div>

      <div className="counter-step">
        <span className="step-label">Step size</span>
        <div className="step-options" role="radiogroup" aria-label="Step size">
          {STEP_OPTIONS.map((value) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={step === value}
              className={`step-btn ${step === value ? 'step-btn--active' : ''}`}
              onClick={() => setStep(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="btn btn-ghost" onClick={reset}>
        Reset
      </button>
    </div>
  )
}
