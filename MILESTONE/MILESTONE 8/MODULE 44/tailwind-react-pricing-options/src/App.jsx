import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'

function App() {
  const pricingPromise =fetch('pricingData.json').then(res=>res.json())
  
  return (
    <>
    <header>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <ResultsChart></ResultsChart>
    </main>
    </>
  )
}

export default App
