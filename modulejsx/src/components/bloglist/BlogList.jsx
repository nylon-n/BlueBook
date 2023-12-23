import React from 'react';
import BlogPost from '../blogpost/BlogPost';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogList;
