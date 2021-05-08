import './Modal.css';
import React, { useContext } from 'react';
import { ModalContext } from '../../App';
import defaultAvatar from '../../images/default_avatar.png';

const Modal = ({blog}) => {
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  return (
    <div className="Modal" style={{display: isModalOpen ? 'block' : 'none'}}>
      <div className="close_btn_container" onClick={()=> setIsModalOpen(!isModalOpen)}>
        <p className="close_btn">X</p>
      </div>
      <img src={blog?.thumbnail?.large} alt="" className="modal_thumbnail" />

      <div className="blog_details">
        <h2 className="blog_title">{blog?.title}</h2>
        <p className="blog_content">{blog?.content}</p>
        <div className="modal_footer">
          <div className="avatar_container">
            <img src={blog?.author?.avatar === undefined ? defaultAvatar : blog?.author?.avatar} alt={blog?.author?.name} className="author_avatar"/>
          </div>
          <p>{blog?.author?.name} - {blog?.author?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;