import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo.jsx'
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
      <ToDo task="Learn React jsx" isDone={true}></ToDo>
      <ToDo task="Revise JS" isDone={true}></ToDo>
      <ToDo task="Revise Algo" isDone={false}></ToDo>
      {/* <Student></Student>
      <Developer name="Moinul" tech="Python"></Developer>
      <Developer name="Shabana" tech="Django"></Developer>
      <Person></Person>
      <Player name="tamim" runs = "5000"></Player>
      <Player name="Mushfiq" runs = "5000"></Player>
      <Salami event="Roja Eid" amount="2000"></Salami>
      <Salami event="Graduation" amount="1500"></Salami>
      <Advice advice ="Always Be Humble"></Advice>
      <Advice advice ="Every Soul must test death"></Advice> */}
    </>
  )
}
function Advice({advice}){
  return(
    <div>
      <h2>Advice:{advice}</h2>
      <p>Do not forget to practice regularly</p>
      <p>Stay motivated</p>
    </div>
  )
}
function Salami({event,amount}){
  return(
    <div className='student'>
      <p>Salami For : {event}</p>
      <p>Amount : {amount}</p>
    </div>
  )
}
function Player({name,runs}){
  return(
    <div className='student'>
      <h2>Hello, I am a player. My age is 25</h2>
      <p>Name : {name}</p>
      <p>Runs : {runs}</p>
    </div>
  )
}
// const {name,tech} = {name : 'John', tech :'35'}
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
