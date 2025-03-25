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
      <Student></Student>
      <Developer name="Moinul" tech="Python"></Developer>
      <Developer name="Shabana" tech="Django"></Developer>
      <Person></Person>
    </>
  )
}
function Student(){
  return(
    <div className='student'>
      <h2>Hello, I am a student. My age is 23</h2>
      <p>Name : </p>
      <p>Department : </p>
    </div>
  )
}
function Developer(props) {
  console.log(props);
  return (
    <div style={
      {
        border: '1px solid',
        borderRadius: '20px',
      }
    }>
      <h2>Hello, I am {props.name} a developer. My experience is 5 years</h2>
      <p>Technology {props.tech}</p>
    </div>
  )
}
function Person(){
  const age = 23;
  const name = "Moinul Islam"
  const personStyle = {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
    border: '2px solid black',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'white'
  }
  return(
    <div  id='' title='tooltip' style={personStyle}>
      <h2 >Hello, I am a person {name}.My Age is {age}</h2>
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
