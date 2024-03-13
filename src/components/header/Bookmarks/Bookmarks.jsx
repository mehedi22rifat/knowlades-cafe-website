
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'


const Bookmarks = ({bookmark,readingtime}) => {
  return (
        <div className="md:w-1/3 bg-slate-100 ml-2 pt-5 text-center rounded-xl">
               <div>
                <h3 className='text-2xl font-bold'>Reading Time:{readingtime}</h3>
               </div>
            <h2 className="text-[25px] font-bold">book marks:{bookmark.length}</h2>

             {
                bookmark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
             }
        </div>
   
  )
}

Bookmarks.propTypes = {
  bookmark:PropTypes.array,
  readingtime:PropTypes.number
}

export default Bookmarks