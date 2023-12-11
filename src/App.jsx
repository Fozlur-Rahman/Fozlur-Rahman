import { useState } from 'react'
import './App.css'
import Navbar from './Shared/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Hobbies from './pages/Hobbies/Hobbies'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Hobbies></Hobbies>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
