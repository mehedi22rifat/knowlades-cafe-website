
import { IoBookmarksOutline } from "react-icons/io5";
import PropTypes from 'prop-types'
const Blog = ({blog,handleBookmarkButton,handleSetTimesRed}) => {
    // console.log(blog)
    const {title,cover,author,author_img,reading,posted_date,hashtags} = blog;
    return (
        <div className='mb-8'>
            <img className='w-full mb-5 rounded-lg' src={cover} alt="" />
            <h2 className='text-4xl'> {title}</h2>
            <div className='flex justify-between items-center mt-4 mb-4'>
                <div className='flex items-center'>
                     <img className='w-20 h-20 rounded-full' src={author_img} alt="" />
                      <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                      </div>
                 </div>
                <div className='flex space-x-2'>
                     <h3>{reading} min read</h3>
                     <button onClick={() => handleBookmarkButton(blog)}><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleSetTimesRed(reading)} className="text-violet-800 font-bold underline">Mark as read</button>
       </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleBookmarkButton:PropTypes.func,
    handleSetTimesRed:PropTypes.func,
}
export default Blog;