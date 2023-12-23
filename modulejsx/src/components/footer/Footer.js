import React from 'react';
import './footer.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/Home';
import Create from '../../pages/create/CreatePost';
import AboutUs from '../../pages/about/AboutUs';
import Contact from '../../pages/contact/Contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className='footer-section footer bg-dark text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h5>Blog Overview</h5>
            <hr />
            <p>
            BlueBook is your go-to destination for reliable and insightful book reviews, offering straightforward recommendations across genres, fostering a <br/>community of avid readers, 
            and providing a <br/>shortcut to literary gems and engaging discussions.
            </p>
            <br></br>

            <div><p className='text-white mb-1'>
              <b>Socials</b><br />
              <div class ="linkicons">
                <a href="https://facebook.com/bluebook" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/bluebook" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/bluebook" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </p></div>
          </div>

          <div className='col-md-4'>
            <h5>Quick Links</h5>
            <hr />
            <div style={{ marginTop: '10px' }}><a href to="/" margin-top='10px'><b>Home</b></a></div>
            <div style={{ marginTop: '10px' }}><a href to="/"><b>Blog</b></a></div>
            <div style={{ marginTop: '10px' }}><a href to="/"><b>About</b></a></div>
            <div style={{ marginTop: '10px' }}><a href to="/"><b>Contact</b></a></div>
          </div>

          <div className='col-md-4'>
            <h5>Contact Information</h5>
            <hr width="70%"/>
            <div><p className='text-white mb-1'>
              <b>Address</b><br />
              Angeles City
              </p>
            </div>

          <div><p className='text-white mb-1'>
            <b>Email</b><br />
            bluebook.blogs@gmail.com
            </p>
          </div>

        <div><p className='text-white mb-1'>
          <b>Contact Number</b><br />
          87000
          </p>
        </div>

          </div>
        </div>
      </div>

      <footer style={{ text: '#000', backgroundColor: '#0eebf0', textAlign: 'center' }}>
        <p>&copy; {currentYear} <b>BlueBook</b>. All Rights Reserved.</p>
      </footer>
    </section>
  );
};        

export default Footer;