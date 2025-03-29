import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

function App() {
  const countriesPromise = fetch('https://restcountries.com/v3.1/all')
    .then(res  => res.json())


  return (
    <>
      <Suspense fallback={<h3>Nadir Bhai Going.....</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
