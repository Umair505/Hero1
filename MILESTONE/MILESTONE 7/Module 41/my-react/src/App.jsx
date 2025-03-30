
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/bottles'

function App() {
  const bottlesPromise = fetch('bottles.json');

  return (
    <>
      
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Bottles Are Loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}>

        </Bottles>
      </Suspense>     
    </>
  )
}

export default App
