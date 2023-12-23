import React, { useState } from 'react';
import BlogList from '../bloglist/BlogList';

const BlogPage = () => {
  const [posts, setPosts] = useState([{ title: '', content: '' }]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div>
      <h1>My Blog</h1>
      <BlogList posts={posts} />
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />

      <textarea
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default BlogPage;


// import React, { useState } from 'react';
// import './blogPage.css';

// const BlogPage = () => {
//   const [posts, setPosts] = useState([
    
//         {
//           id: 1,
//           title: 'Sample Title 1',
//           content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//           image: 'url_to_image_1.jpg', // URL to the image
//         },
//         {
//           id: 2,
//           title: 'Sample Title 2',
//           content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
//           image: 'url_to_image_2.jpg', // URL to the image
//         },
//   ]);

//   const [newPost, setNewPost] = useState({ title: '', content: '' });

//   const handleAddPost = () => {
//     if (newPost.title && newPost.content) {
//       setPosts([...posts, { ...newPost, id: Date.now() }]);
//       setNewPost({ title: '', content: '' });
//     }
//   };

//   return (
//     <div className="formContainer" style={{ backgroundImage: "url('YOUR_IMAGE_URL')" }}>
//       <h2>Create New Post</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newPost.title}
//         onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Content"
//         value={newPost.content}
//         onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//       />
//       <input type="file" />
//       <button onClick={handleAddPost}>Add Post</button>

//       <div className="postList">
//         <h2>Blog Posts</h2>
//         {posts.map((post) => (
//           <div className="post" key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             {/* Additional post details or components can be added here */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
