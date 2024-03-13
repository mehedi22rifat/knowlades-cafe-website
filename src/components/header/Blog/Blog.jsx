

import PropTypes from 'prop-types'
const Blog = ({blog}) => {
    // console.log(blog)
    const {title,cover,author,author_img,reading,posted_date,hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <h2 className='text-4xl'> {title}</h2>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                     <img className='w-20 h-20 rounded-full' src={author_img} alt="" />
                      <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                      </div>
                 </div>
                <div>
                     <h3>{reading}</h3>
                </div>
            </div>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>)
                }
            </p>
       </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;