import './App.css'
import Counter from './Counter' ;
import Batsman from './Batsman';
// import Users from './Users';

function App() {
  
  function handleClick(){
    alert("I am Clicked")
  }
  const handleClick3 =() =>{
    alert("I am Clicked 3");
  }
  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
  
      <h1>Vite + React</h1>
      {/* <Users></Users> */}
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2(){
        alert("I am Clicked 2");
      }}>Click Me2</button>
      <button onClick={handleClick3}>Click Me</button>
      <button onClick={() => alert("Clicked 4")}>Click Me</button>
      
      {/* <button onClick={handleAdd5(7)}>Click Add 5</button> */}
      <button onClick={() => handleAdd5(100)}>Click Add 5</button>
    </>
  )
}

export default App
