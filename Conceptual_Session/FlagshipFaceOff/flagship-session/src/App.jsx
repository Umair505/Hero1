import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
     <h1 className='text-2xl text-black'>Navbar</h1>
      <Outlet></Outlet>
     <h1 className='text-2xl text-black'>Footer</h1>
    </>
  )
}

export default App
