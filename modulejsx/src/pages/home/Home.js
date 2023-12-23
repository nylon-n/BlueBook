import React, { useState, useEffect } from "react";
import BlogList from "../../components/bloglist/BlogList";
import "./home.css";
import MemberProps from "./MemberProps";

const Home = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="home">
      <section className="hero">
        <div className="headerTitles">
          <span className="headerTitleLg">Uncover Literary Treasures.</span>
          <span className="headerTitleSm">Your Go-To Book Review Source</span>
        </div>
        <img
          className="headerImg"
          src="https://i.imgur.com/e6U3IYI.jpg"
          alt=""
        />
      </section>
      <section className="blog-posts">
        {posts &&
          posts.map((post) => (
            <BlogList
              key={post.id}
              title={post.title}
              content={post.content}
              image={post.image}
            />
          ))}
      </section>

      <section className="section border-top border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4 my-5">
              <div className="card shadow">
                <img
                  className="bookImg"
                  src="https://www.readriordan.com/wp-content/uploads/2017/09/T_ReadRiordan_PercyJackson_TheLightningThief.jpg"
                  alt="Team Member 1"
                  style={{
                    maxWidth: "100%",
                    minHeight: "400px",
                    maxHeight: "400px",
                  }}
                />

                <div
                  className="card-body d-flex flex-column justify-content-between align-items-start"
                  style={{
                    maxWidth: "100%",
                    minHeight: "450px",
                    maxHeight: "450px",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  {/* Use 'text-left' class for left alignment */}
                  <h6 className="text-left">
                    {" "}
                    A Fictional Masterpiece: Percy Jackson & the Olympians: The
                    Lightning Thief{" "}
                  </h6>
                  <button className="bookCategory text-left">Fantasy</button>
                  <p className="bookDesc text-left">
                    Book Title: Percy Jackson & the Olympians The Lightning
                    Thief "Percy Jackson & the Olympians: The Lightning Thief"
                    introduces us to Percy, an ordinary 12-year-old who
                    discovers he's a Greek god's son. The fast-paced narrative
                    captivates, making it unwise to pause for long. I once lost
                    myself in Grover's shoes. The first-person storytelling,
                    reminiscent of Harry Potter, makes this series a delightful
                    must-read. A famous story.
                  </p>
                  <button className="bookBtn text-left">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 my-5">
              <div className="card shadow">
              <img
                  className="bookImg"
                  src="https://media.newyorker.com/photos/59096d0f6552fa0be682fe8d/master/w_2240,c_limit/Michaud-The-Subversive-Brilliance-of-A-Little-Life.jpg"
                  alt="Team Member 1"
                  style={{
                    maxWidth: "100%",
                    minHeight: "400px",
                    maxHeight: "400px",
                  }}
                />
                <div
                  className="card-body d-flex flex-column justify-content-between align-items-start"
                  style={{
                    maxWidth: "100%",
                    minHeight: "450px",
                    maxHeight: "450px",
                    overflow: "hidden",
                  }}
                >
                  <h6> The Subversive Brilliance of “A Little Life” </h6>
                  <button className="bookCategory">Novel</button>
                  <p className="bookDesc">
                    Hanya Yanagihara's "A Little Life" ranks among the most
                    beautifully written yet profoundly melancholic books I've
                    encountered. This emotionally gripping novel takes readers
                    on a relentless rollercoaster, highlighting the intricate
                    messiness of humanity. It poignantly explores the struggles,
                    both mental and physical, revealing the harsh reality that
                    some individuals, despite relentless efforts, cannot
                    overcome world full of people.{" "}
                  </p>
                  <button className="bookBtn">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 my-5">
              <div className="card shadow">
              <img
                  className="bookImg"
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615620038i/57393737.jpg"
                  alt="Team Member 1"
                  style={{
                    maxWidth: "100%",
                    minHeight: "400px",
                    maxHeight: "400px",
                  }}
                />
                <div
                  className="card-body d-flex flex-column justify-content-between align-items-start"
                  style={{
                    maxWidth: "100%",
                    minHeight: "450px",
                    maxHeight: "450px",
                    overflow: "hidden",
                  }}
                >
                  <h6>
                    {" "}
                    Finding Solace in Bianca Sparacino's 'A Gentle Reminder{" "}
                  </h6>
                  <button className="bookCategory">Poetry</button>
                  <p className="bookDesc">
                    {" "}
                    A Gentle Reminder This is a book I wouldn’t hesitate to
                    recommend to someone, especially someone who’s been in
                    emotional pain. The messages aren’t pushy, not forced, that
                    you’d find them cringy and irrelevant. The writing is so
                    personal to the writer that you want to keep the words so
                    close to your heart as well, whether or not you’ve gone
                    through similar heartbreak. I’m sure anyone who’ve read this
                    would want to keep it with them in their journey.
                  </p>
                  <button className="bookBtn">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 mh-5 my-5">
              <div className="card shadow">
              <img
                  className="bookImg"
                  src="https://cdn.kobo.com/book-images/1962c25c-ae6a-4273-b3f9-e2d071334841/1200/1200/False/jack-and-jill-13.jpg"
                  alt="Team Member 1"
                  style={{
                    maxWidth: "100%",
                    minHeight: "400px",
                    maxHeight: "400px",
                  }}
                />
                <div
                  className="card-body d-flex flex-column justify-content-between align-items-start"
                  style={{
                    maxWidth: "100%",
                    minHeight: "450px",
                    maxHeight: "450px",
                    overflow: "hidden",
                  }}
                >
                  <h6> Jack and Jill </h6>
                  <button className="bookCategory">Children's Story</button>
                  <p className="bookDesc">
                    "Jack and Jill" is a traditional English nursery rhyme that
                    tells the simple yet whimsical tale of two siblings, Jack
                    and Jill, who embark on a journey to fetch a pail of water
                    from a nearby well. As the story unfolds, the mischievous
                    duo encounters a series of playful adventures and mishaps,
                    including Jack's unfortunate tumble and Jill's subsequent
                    fall. The rhyme's catchy verses and charming narrative have
                    made it a beloved classic, passed down through generations.
                  </p>
                  <button className="bookBtn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='quote-container py-5'>

      <br />
      <br />
      <br />
      <br />

        <div className="outerContainer">
          <div className="centeredDiv">
            <div className="quotationContainer">
              <p className="quotation">“</p>
            </div>
            <p className="reviewText">
              A word after a word after a word is power.
            </p>
          </div>
        </div>
      

      <div className="outerContainer">
        <img
          className="roundedImage"
          src="https://i.imgur.com/PSl2ZX0.png"
          alt=""
        />
        <p className="imageText">&nbsp; &nbsp; &nbsp;</p>{" "}
        {/* Add space using &nbsp; or adjust styles as needed */}
        <p className="reviewerName">Margaret Atwood</p>
      </div>

      <br />
      <br />
      <br />
      <br />

      </div>

      <section className="section border-top">

        </section>


        <div className="container">
          <div className="row justify-content-center">

          <div className="col-md-3 col-sm-6 mb-4 my-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left">

                <h3 className="main-heading text-left">COLLECTION</h3>
                <hr className="horizontalLine"/>

                <p className="justifiedParagraph">
                Welcome to our Collection Section, dedicated to reviewing books with multiple volumes or editions. Explore in-depth analyses and insights into literary works that span various releases and editions in this curated space. Happy reading!
                </p>
              </div>
            </div>
          </div>
          </div>

            <div className="col-md-3 col-sm-6 mb-4 my-3">
              <div
                className="card border"
                style={{ borderColor: "rgba(169, 169, 169, 0.5)" }}
              >
                <img
                  className="bookImg"
                  src="https://cdn.kobo.com/book-images/63222867-476c-48c2-862f-a2604e09ce67/1200/1200/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"
                  alt="Team Member 1"
                  style={{
                    maxWidth: "100%",
                    minHeight: "400px",
                    maxHeight: "400px",
                  }}
                />

                <div
                  className="card-body d-flex flex-column justify-content-between align-items-start"
                  style={{
                    maxWidth: "100%",
                    minHeight: "320px",
                    maxHeight: "320px",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  <h6> Harry Potter </h6>
                  <button className="bookCategory"> Collection </button>
                  <p className="bookDesc">
                    Harry Potter, an orphaned wizard, discovers his magical
                    heritage on his 11th birthday. Enrolling at Hogwarts School
                    of Witchcraft and Wizardry, he befriends Ron and Hermione,
                    unravels mysteries, and confronts the dark wizard Voldemort,
                    in a thrilling saga of friendship, and bravery...
                  </p>
                  <button className="bookBtn text-left">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-2 my-3">
              <div
                className="card border"
                style={{ borderColor: "rgba(169, 169, 169, 0.5)" }}
              >
                <img
                  className="bookImg"
                  src="https://cdn.kobo.com/book-images/01ed6df8-7939-4297-ba48-ae97faedc129/353/569/90/False/a-game-of-thrones-the-illustrated-edition.jpg"
                  alt="Team Member 1"
                  style={{
                    maxWidth: "100%",
                    minHeight: "400px",
                    maxHeight: "400px",
                  }}
                />
                <div
                  className="card-body d-flex flex-column justify-content-between align-items-start"
                  style={{
                    maxWidth: "100%",
                    minHeight: "320px",
                    maxHeight: "320px",
                    overflow: "hidden",
                  }}
                >
                  <h6> Game of Thrones </h6>
                  <button className="bookCategory"> Collection </button>
                  <p className="bookDesc">
                    Game of Thrones, based on George R.R. Martin's 'A Song of
                    Ice and Fire,' depicts noble families vying for control of
                    the Iron Throne in the fictional continents of Westeros and
                    Essos. Amid political intrigue, betrayal, and supernatural
                    threats, the series unfolds a gripping tale of power
                    struggles and epic battles.{" "}
                  </p>
                  <button className="bookBtn">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 my-3">
              <div
                className="card border"
                style={{ borderColor: "rgba(169, 169, 169, 0.5)" }}
              >
                <img
                  className="bookImg"
                  src="https://cdn.kobo.com/book-images/5addc4c9-fbc1-42d7-a79f-cec7619d4b23/1200/1200/False/the-great-gatsby-a-novel-1.jpg"
                  alt="Team Member 1"
                  style={{
                    maxWidth: "100%",
                    minHeight: "400px",
                    maxHeight: "400px",
                  }}
                />
                <div
                  className="card-body d-flex flex-column justify-content-between align-items-start"
                  style={{
                    maxWidth: "100%",
                    minHeight: "320px",
                    maxHeight: "320px",
                    overflow: "hidden",
                  }}
                >
                  <h6> The Great Gatsby </h6>
                  <button className="bookCategory"> Collection </button>
                  <p className="bookDesc">
                    {" "}
                    In the roaring '20s, Jay Gatsby's opulent parties conceal a
                    quest to reunite with lost love, Daisy Buchanan. Narrated by
                    Nick Carraway, this tragic tale explores wealth, decadence,
                    and the elusive American Dream in F. Scott Fitzgerald's 'The
                    Great Gatsby. It is a spectacle for all to read.
                  </p>
                  <button className="bookBtn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Home;
// // import React, { useEffect, useState } from 'react';
// // import BlogList from '../../components/bloglist/BlogList';
// // import './home.css';

// // const HomePage = () => {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
// //     setPosts(storedPosts);
// //   }, []);

// //   return (
// //     <div className='bg'>
// //       <h1>Post List</h1>
// //       <div className='imageee'>
// //       {/* <img style={{ width: '1600px', height: 'auto' }} src='homebig.png' alt=''/> */}
// //       </div>

// //       <div className='test'>
// //       <BlogList post={posts}/>
// //       </div>

// //     </div>
// //   );
// // };

// // export default HomePage;

// import React from 'react';
// import BlogList from '../../components/bloglist/BlogList.jsx';
// import Header from '../../components/header/Header';

// const Home = () => {
//   return (
//     <div className="home">
//       <Header />
//       <section className="hero">

//         <h1>Welcome to Blue Book!</h1>

//       </section>
//       <section className="blog-posts">

//         {posts.map((post) => (
//           <BlogList
//             key={post.id}
//             title={post.title}
//             content={post.content}
//             image={post.image}
//           />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Home;
