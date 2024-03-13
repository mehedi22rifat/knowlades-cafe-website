import { useEffect } from "react";
import { useState } from "react";
// import Blogs from './Blogs';
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs,setBlogs] =useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
          <h2 className="text-[23px] font-bold">Blogs: {blogs.length}</h2>
           {
            blogs.map(blog =><Blog
                 key={blog.id}
                  blog={blog}>

            </Blog>)
           }  
        </div>
    );
};

export default Blogs;