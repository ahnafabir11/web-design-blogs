import './Blog.css';
import React from 'react';

const Blog = ({blog}) => {
  const blogDate = new Date(blog.date);

  return (
    <div className="Blog">
      <img src={blog.thumbnail.small} alt={blog.title} className="blog_thumbnail" />

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