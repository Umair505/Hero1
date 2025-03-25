import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}
function Student(){
  return(
    <div>
      <h2>Hello, I am a student. My age is 15</h2>
    </div>
  )
}
function Person(){
  const age = 23;
  const name = "Moinul Islam"
  return(
    <div>
      <h2>Hello, I am a person {name}.My Age is {age}</h2>
    </div>
  )
}
function Sports(){
  return(
    <div>
      <h3>I love watching cricket</h3>
    </div>
  )
}
export default App
