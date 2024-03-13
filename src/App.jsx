
import './App.css'
import Blogs from './components/header/Blogs/Blogs'
import Bookmarks from './components/header/Bookmarks/Bookmarks'
import Headers from './components/header/Headers'
function App() {


  return (
    <>
     
        <Headers></Headers>
      

      <main className='md:flex max-w-[90%] m-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
