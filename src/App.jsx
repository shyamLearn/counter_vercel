import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="app-eyebrow">Week 2 · React + Vite</p>
        <h1>Counter</h1>
        <p className="app-subtitle">
          Interactive counter with adjustable step size — built for Vercel deploy.
        </p>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  )
}

export default App
