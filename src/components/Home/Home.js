import './Home.css';
import React, { useContext, useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Modal from '../Modal/Modal';
import { BlogContext, ModalContext } from '../../App';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog] = useContext(BlogContext);
  const [isModalOpen] = useContext(ModalContext);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts`)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <div className="Home">
      {
        blogs.map(blog => <Blog key={blog.id} blog={blog} />)
      }
      <div className="overlay" style={{ opacity: isModalOpen ? 1 : 0 }}></div>
      <Modal blog={selectedBlog} />

      
    </div>
  );
};

export default Home;