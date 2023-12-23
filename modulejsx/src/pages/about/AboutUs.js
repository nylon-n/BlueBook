import React, { Component } from 'react'
import Socials from '../../components/socials/Socials';
import Developer1 from '../../img/mem1.png';
import MemberProps from './MemberProps';
import './aboutUs.css';

export class AboutUs extends Component {

  render() {
    return (
      <div>
      <section className="hero">
        <div className="headerTitles">
          <span className="headerTitleLg">About BlueBook</span>
        </div>
        <img
          className="headerImg"
          src="https://i.imgur.com/lfJwnig.jpg"
          alt=""
        />
      </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="main-heading">OUR COMPANY</h3>
                <div className="underline mx-auto"></div>
                <p>
                Welcome to BlueBook – your go-to destination for reliable and insightful book reviews! We're here to help you discover your next favorite read with straightforward recommendations spanning various genres. Our dedicated team of book enthusiasts cuts through the noise to provide you with honest and to-the-point reviews, ensuring you spend less time searching and more time reading.
                At BlueBook, we're more than just reviews; we're a community of avid readers. Join the conversation, share your thoughts, and connect with fellow book lovers. Whether you're a seasoned bookworm or a casual reader, BlueBook is your shortcut to literary gems and engaging discussions.
                Get ready to dive into the world of literature with us. Welcome to BlueBook – where every book gets a quick, honest look. Happy reading!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">VISION, MISSION, VALUES</h3>
                <div className="underline mx-auto"></div>
              </div>

              <div className='col-md-4 text-center'>
                <h6>Our Vision</h6>
                <p>At BlueBook, we envision a world where knowledge flows freely, unencumbered by barriers, and where the pursuit of information is a seamless and enriching experience. 
                   Our vision is to be the beacon guiding individuals through the vast seas of knowledge, empowering them to explore, learn, and connect with the information that fuels their curiosity.</p>
              </div>

              <div className='col-md-4 text-center'>
                <h6>Our Mission</h6>
                <p> Providing brief and authentic book reviews, developing a community that welcomes varied opinions, and directing readers to their next literary experience with clarity and enthusiasm. 
                  At BlueBook, we try to cultivate a culture that appreciates the transformational power of storytelling by creating a friendly environment where readers can interact, exchange, and discover 
                  new books. Our objective is to make literary discovery pleasurable and accessible to everyone, ensuring that every reader finds inspiration between the pages of a book. Join us on this 
                  voyage of discovery, investigation, and the common delight of reading.</p>
              </div>

              <div className='col-md-4 text-center'>
                <h6>Our Values</h6>
                <p>At BlueBook, we stand by a set of core values that guide our every endeavor, ensuring a vibrant and enriching experience for our users. 
                  We believe that knowledge should be within reach for everyone, and our platform is designed to be user-friendly and inclusive, making the world of information accessible to all.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Our Team</h3>
                <div className="underline mx-auto"></div>
                <p>HELLO!
                  We are Information technology students and at the same time are avid readers and passionate book enthusiasts at BlueBook. Welcome to our literary haven, where we channel our love for storytelling into comprehensive book reviews and recommendations. With an unwavering devotion to the written word, we embark on a journey through the pages of novels, memoirs, and everything in between.
                  Together let's uncover new stories, share our favorite reads, and engage in lively discussions that fuel our collective passion for the written word. Welcome to BlueBook, where every page tells a story, and every reader finds a connection!
                </p>
              </div>

              <div className='col-md-3 col-sm-6 mb-4'>
                <div className="card shadow">

                  <img src="https://i.imgur.com/G9HQk00.jpg" alt="Team Member 1" style={{ maxWidth: '100%' }} />
                  <div className='card-body text-center'>

                    <MemberProps
                      memname="Joshua Niel Sanguyo"
                      memrole="Front-end Developer"
                      facebookLink="https://www.facebook.com/joshuaniel.sanguyo"
                      instagramLink="https://www.instagram.com/nielapag/"
                      redditLink="https://www.reddit.com/user/Favre99/"
                      
                    />

                  </div>
                </div>
              </div>


              <div className='col-md-3 col-sm-6 mb-4'>
                <div className="card shadow">

                  <img src="https://i.imgur.com/Jl3h2Dy.jpg" alt="Team Member 1" style={{ maxWidth: '100%' }} />
                  <div className='card-body text-center'>

                    <MemberProps
                      memname="Anne Canlas"
                      memrole="Front-end Developer"
                      facebookLink="https://www.facebook.com/anne.canlas.144"
                      instagramLink="https://www.instagram.com/_canlasanne/"
                      redditLink="https://www.reddit.com/user/Zubzer0/"
                    />

                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 mb-4'>
                <div className="card shadow">

                  <img src="https://i.imgur.com/WsOA7uj.jpg" alt="Team Member 1" style={{ maxWidth: '100%' }} />
                  <div className='card-body text-center'>

                    <MemberProps
                      memname="Angelika Lopez"
                      memrole="Front-end Developer"
                      facebookLink="https://www.facebook.com/ur.angel09"
                      instagramLink="https://www.instagram.com/ur.angelm"
                      redditLink="https://www.reddit.com/user/Dominiking/"
                    />

                  </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 mb-4'>
                <div className="card shadow">

                  <img src="https://i.imgur.com/Mniyr4Y.jpg" alt="Team Member 1" style={{ maxWidth: '100%' }} />
                  <div className='card-body text-center'>

                    <MemberProps
                      memname="Jan Pingul"
                      memrole="Front-end Developer"
                      facebookLink="https://www.facebook.com/janjanpingul"
                      instagramLink="https://www.instagram.com/pingulgab/"
                      redditLink="https://www.reddit.com/user/KaSplosion/"
                    />

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default AboutUs;
// function AboutUs() {
//   return(
//     <div>
//       <section className="py-4 bg-info">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 my-auto">
//               <h4>About Us</h4>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="section">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 mb-4 text-center">
//           <h2>Our Company</h2>
//           <div className="underline mx-auto"></div>
//           <p>
//       Hey there, fellow book lover! Welcome to BlueBook, the coolest nook on the internet where the stories are plenty,
//       and the reviews are as diverse as our bookshelves. We're not your average book review site;
//       we're the ultimate haven for the literary souls, the rebels,
//       and the daydreamers who find solace in the written word.
//       </p>
//           </div>
//           <div className="col-md-4">
//             <h5>Our Vision</h5>
//             <div className="underline"></div>
//             <p>
//             At BlueBook, we envision a world where knowledge flows freely, unencumbered by barriers, and where the pursuit of information is a seamless and enriching experience.
//             Our vision is to be the beacon guiding individuals through the vast seas of knowledge, empowering them to explore, learn, and connect with the information that fuels their curiosity.
//         </p>
//           </div>
//           <div className="col-md-4">
//             <h5>Our Mission</h5>
//             <div className="underline"></div>
//             <p>
//         At BlueBook, our mission is to ignite a passion for reading and empower individuals to explore, engage, and connect through the transformative world of literature.
//         We believe that books have the power to inspire, educate, and entertain, and our commitment is to be the catalyst that sparks a love affair with reading in every corner of the globe.
//         </p>
//           </div>
//           <div className="col-md-4">
//             <h5>Our Values</h5>
//             <div className="underline"></div>
//             <p>
//             At BlueBook, we stand by a set of core values that guide our every endeavor, ensuring a vibrant and enriching experience for our users.
//             We believe that knowledge should be within reach for everyone, and our platform is designed to be user-friendly and inclusive, making the world of information accessible to all.
//         </p>
//           </div>
//           <div className="col-md-12 mb-4 text-center">
//           <h2>Our Team</h2>
//           <div className="underline mx-auto"></div>
//           <p>
//           Meet the brilliant minds behind BlueBook, our dedicated team of IT college students who are passionate about bringing the joy of reading to the digital realm.
//         Hailing from diverse backgrounds and united by a love for technology and literature,
//         these talented individuals have collaborated to create an innovative platform that seamlessly blends the world of books with the wonders of digital technology.
//         With a shared vision to make reading accessible and enjoyable for everyone, the BlueBook developers bring a fresh perspective and youthful energy to the world of online literature.
//         Get ready to embark on a literary adventure crafted by the tech-savvy minds at BlueBook!
//       </p>
//           </div>
//         </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AboutUs;
