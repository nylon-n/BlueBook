import React, { useState, useEffect } from 'react';
import BlogList from '../../components/bloglist/BlogList';
import './landing.css'

const Hame = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="home">
      <section className="hero">
        <div className="headerTitles">
          {/* <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span> */}
        </div>
        {/* <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        /> */}
      </section>
      <section className="blog-posts">
        {posts && posts.map((post) => (
          <BlogList
            key={post.id}
            title={post.title}
            content={post.content}
            image={post.image}
          />
        ))}
      </section>
    </div>
  );
};

export default Hame;