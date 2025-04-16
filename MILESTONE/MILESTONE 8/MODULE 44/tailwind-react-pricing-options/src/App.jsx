import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

function App() {
  const pricingPromise =fetch('pricingData.json').then(res=>res.json())
  const marksPromise = axios.get('marksData.json');
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

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

      <ResultsChart></ResultsChart>
    </main>
    </>
  )
}

export default App
