import './Blog.css';
import React, { useContext } from 'react';
import { BlogContext, ModalContext } from '../../App';

const Blog = ({blog}) => {
  const blogDate = new Date(blog.date);
  const [, setSelectedBlog] = useContext(BlogContext);
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  const handleBlogClick = () => {
    setSelectedBlog(blog);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="Blog">
      <div className="blog_thumbnail_container">
        <div className="hover_effect" onClick={handleBlogClick}>
          <p>Learn More</p>
        </div>
        <img src={blog.thumbnail.small} alt={blog.title} className="blog_thumbnail" />
      </div>

      <div className="blog_details">
        <h2 className="blog_title">{blog.title}</h2>
        <p className="blog_content">{blog.content}</p>
        <div className="blog_footer">
          <p>{blog.author.name} - {blog.author.role}</p>
          <p>{blogDate.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;