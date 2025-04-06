
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <div className="main-container flex text-center">

        <div className="left-container w-[70%]">
          <Blogs></Blogs>

        </div>

        <div className="right-container w-[30%] ">
          <h1>Reading time 0</h1>
          <h1>Bookmarked count 0</h1>
        </div>
     </div>
    </>
  )
}

export default App
