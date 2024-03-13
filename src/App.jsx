
import { useState } from 'react'
import './App.css'
import Blogs from './components/header/Blogs/Blogs'
import Bookmarks from './components/header/Bookmarks/Bookmarks'
import Headers from './components/header/Headers'
// import { l } from 'vite/dist/node/types.d-FdqQ54oU'
function App() {

  const [bookmark,setBookmark] =useState([])
  const [readingtime,setReadingtime] =useState(0)

  const handleBookmarkButton = (blog) =>{
    // console.log(blog)
    const newBookmarks =[...bookmark,blog]
    setBookmark(newBookmarks)
  }

  const handleSetTimesRed =(tims) =>{
    //  console.log(tims);
      const newReadingtime = readingtime+tims;
      setReadingtime(newReadingtime);
  }


  return (
    <>
     
        <Headers></Headers>
      

      <main className='md:flex max-w-[90%] m-auto'>
      <Blogs 
      handleBookmarkButton={handleBookmarkButton}
      handleSetTimesRed={handleSetTimesRed}
      ></Blogs>
      <Bookmarks 
      bookmark={bookmark}
      readingtime={readingtime}
      ></Bookmarks>
      </main>
    </>
  )
}

export default App
