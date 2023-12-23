// import React, { useState } from 'react';
// import Resizer from 'react-image-file-resizer';
// import './createPost.css';
// import BlogList from '../../components/bloglist/BlogList';


// const CreatePost = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', content: '', imageUrl: '' });
//   const [selectedFile, setSelectedFile] = useState();

//   // const handleTitleChange = (e) => {
//   //   setNewPost({ ...newPost, title: e.target.value });
//   // };

//   // const handleContentChange = (e) => {
//   //   setNewPost({ ...newPost, content: e.target.value });
//   // };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     Resizer.imageFileResizer(
  //       file,
  //       600, // Max width
  //       400, // Max height
  //       'JPEG', // Image format
  //       100, // Quality
  //       0, // Rotation
  //       (resizedImage) => {
  //         setNewPost({ ...newPost, imageUrl: resizedImage });
  //         setSelectedFile(file);
  //       },
  //       'base64' // Output type
  //     );
  //   }
  // };

//   const handleAddPost = () => {
//     if (newPost.title && newPost.content) {
//       setNewPost({ title: '', content: '', imageUrl: '' });
//       setSelectedFile(null);
//       alert('Post added successfully');
//     } else {
//       alert('Please fill in title and content');
//     }
//   };

  // const handleClear = () => {
  //   const confirmed = window.confirm("Are you sure you want to clear the post?")

  //   if (confirmed) {
  //   setNewPost({ title: '', content: '', imageUrl: '' });
  //   setSelectedFile(null);
  //   }
  // };

//   return (
//     <div className="create-post">
//       <h2>Create New Post</h2>
//       <label><b>Post Title</b></label>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newPost.title}
//         onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//         required
//       />
//       <label><b>Post Content</b></label>
//       <textarea
//         placeholder="Content"
//         value={newPost.content}
//         onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//         required
//       />
//       <label><b>Post Image</b></label>
//       <input
//         type="file"
//         id="image-btn"
//         accept="image/*"
//         onChange={handleImageChange}
//         hidden
//       />
//       <label htmlFor="image-btn">Choose File</label>
//       {selectedFile && <p>{selectedFile.name}</p>}
//       <button className="postButton" onClick={handleAddPost}>
//         Post
//       </button>
//       <button onClick={handleClear}>Clear</button>

//       <br></br>
//       <div>
//         <BlogList post = {posts}/>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;


import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import './createPost.css';
//import BlogList from '../../components/bloglist/BlogList';

const CreatePost = () => {
  const [posts, setPosts] = useState([ ]);

  const [newPost, setNewPost] = useState({ title: '', content: '', imageUrl: '' });
  const [selectedFile, setSelectedFile] = useState();

  // const handleAddPost = () => {
  //   if (newPost.title && newPost.content) {
  //     //setPosts([...posts, { ...newPost, id: Date.now() }]);
  //     setPosts([...posts, { ...newPost, id: Date.now(), image: newPost.imageUrl }]);
  //     setNewPost({ title: '', content: '', imageUrl: ''  });
  //     setSelectedFile(null);
  //     alert('Post added successfully');
  //   } else {
  //     alert('Please fill in title and content');
  //   }
  // };

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { ...newPost, id: Date.now(), image: newPost.imageUrl  }]);
      setNewPost({ title: '', content: '', imageUrl: ''  });
      setSelectedFile(null);
      alert('Post added successfully');
    } else {
      alert('Please fill in title and content');
    }
   };

  const [imageDataUrl, setImageDataUrl] = useState('');
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     Resizer.imageFileResizer(
  //       file,
  //       600, // Max width
  //       400, // Max height
  //       'JPEG', // Image format
  //       100, // Quality
  //       0, // Rotation
  //       (resizedImage) => {
  //         setNewPost({ ...newPost, imageUrl: URL.createObjectURL(resizedImage) });
  //         setSelectedFile(file);
  //       },
  //       'base64' // Output type
  //     );
  //   }
  //  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Reset imageDataUrl state
      setImageDataUrl('');
   
      Resizer.imageFileResizer(
        file,
        600, // Max width
        400, // Max height
        'JPEG', // Image format
        100, // Quality
        0, // Rotation
        (resizedImage) => {
          setImageDataUrl(resizedImage);
          setNewPost({ ...newPost, image: resizedImage }); // Update newPost with image data URL
          setSelectedFile(file);
        },
        'base64' // Output type
      );
    }
   };
  const handleClear = () => {
    const confirmed = window.confirm("Are you sure you want to clear the post?")

    if (confirmed) {
    setNewPost({ title: '', content: '', imageUrl: '' });
    setSelectedFile(null);
    }
  };

  return (
    <div>
            <section className="hero">
        <div className="headerTitles">
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://i.imgur.com/eZUHFIu.jpg"
          alt=""
        />
      </section>
    <div className="create-post">
      <h2>Create New Post</h2>
      <label><b>Title</b></label>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        required
      />
      <br></br>
      <label><b>Content</b></label>
       <textarea
         placeholder="Content"
         value={newPost.content}
         onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
         required
       />
      <br></br>
      <label><b>Post Image</b></label>
      <input
        type="file"
        id="image-btn"
        accept="image/*"
        onChange={handleImageChange}
        hidden
       />
      <br></br>
      <div style={{ margin: '10px' }} type="button" class="btn btn-light">
          <label htmlFor="image-btn">Choose File</label>
          {selectedFile && <p>{selectedFile.name}</p>}
      </div>

      <div class="button-container">
        <button className="postButton" onClick={handleAddPost}>
          Post
        </button>
        <button className="clearButton"onClick={handleClear}>Clear</button>
      </div>
      </div>
      {/* <hr /> */}
        <div className="postList">
          <div className="blog-posts-container">
          <h2><b></b>Blog Posts</h2>
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-image">
                 {/* <img src={post.imageUrl} alt="Post" /> 
                <img src={`data:image/jpeg;base64,${post.image}`} alt="Post" /> */}
                {imageDataUrl && <img src={imageDataUrl} alt="Post" />} {/* Display uploaded image */}
              </div>
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default CreatePost;