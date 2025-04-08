
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/navbar/Navbar'

function App() {
  const [bookmarked,setBookmarked] = useState([]);
  const [readingCount,setReadingCount] = useState(0);
  const handleBookMarks = (blog) => {
    setBookmarked([...bookmarked, blog]); 
  }
  const handleMarkAsRead = (time,id) =>{
    setReadingCount(readingCount+time);
    handleRemoveFromBookmark(id);
  }
  const handleRemoveFromBookmark =(id) =>{
    const remainingBookmark = bookmarked.filter((mark) =>mark.id!=id);
    setBookmarked(remainingBookmark);
  }
  return (
    <>
     <Navbar></Navbar>
     <div className="main-container flex text-center">

        <div className="left-container w-[70%]">
          <Blogs handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>

        </div>

        <div className="right-container w-[30%] ">
          <h1>Reading time {readingCount}</h1>
          <h1>Bookmarked count 0</h1>
          {
           bookmarked.map((marked) =><p className='bg-gray-300 p-4 text-black shadow m-2'>{marked.title}</p>) 
          }
        </div>
     </div>
    </>
  )
}

export default App
