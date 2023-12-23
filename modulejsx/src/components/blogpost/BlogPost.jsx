import React from 'react';
import PropTypes from 'prop-types';
import './blogPost.css'; 

const BlogPost = ({ title, content, imageUrl }) => {
  return (
    <div className="blogPost">
      <img src={imageUrl} alt="Post" className="postImg" />
      <div className="postContent">
        <h2 className="postTitle">{title}</h2>
        <p className="postDesc">{content}</p>
      </div>
    </div>
  );

};

BlogPost.propTypes = {
  title:PropTypes.string.isRequired, 
  content: PropTypes.string.isRequired

}

export default BlogPost;