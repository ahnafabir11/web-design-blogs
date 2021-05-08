import './Home.css';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts`)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="Home">
      {
        blogs.map(blogs => <Blog blog={blogs}/> )
      }
    </div>
  );
};

export default Home;