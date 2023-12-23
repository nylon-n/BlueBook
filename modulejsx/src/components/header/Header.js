// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link,
//   Routes,
//   Route
// }from 'react-router-dom';

// import './header.css'
// import Home from '../../pages/home/Home';
// import Create from '../../pages/create/CreatePost';
// import AboutUs from '../../pages/about/AboutUs';
// import Contact from '../../pages/contact/Contact';
// import Login from '../../pages/login/Login';

// const Header = () => {

//   return (
//     <Router>
//       <div>
//         <div class="header">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container">
//             <Link className="navbar-brand" to="/">
//               <img
//                 src='https://i.imgur.com/HTwnYvY.png'
//                 alt="Logo"
//                 className="logo" 
//                /> </Link>
//             <button 
//               className="navbar-toggler" 
//               type="button" 
//               data-bs-toggle="collapse" 
//               data-bs-target="#navbarNav" 
//               aria-controls="navbarNav" 
//               aria-expanded="false" 
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/myhome">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/mycreate">Blog</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/about">About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/contact">Contact</Link>
//                 </li>
//                  <li className="nav-item">
//                   <Link className="nav-link" to="/logout">Logout</Link>
//                 </li> 
//               </ul>
//             </div>
//           </div>
//         </nav>
//         </div>
  
//         <Routes>
          // <Route 
          //     exact
          //     path = "/myhome"
          //     element ={<Home/>}
          // ></Route>

          // <Route 
          //     exact
          //     path = "/mycreate"
          //     element ={<Create/>}
          // ></Route>

          // <Route 
          //     exact
          //     path = "/aboutus"
          //     element ={<AboutUs/>}
          // ></Route>

          // <Route 
          //     exact
          //     path = "/contact"
          //     element ={<Contact/>}
          // ></Route>
 
          // <Route 
          //     exact
          //     path = "/logout"
          //     element ={<Login/>}
          // ></Route> 

//       </Routes>
//   </div>
// </Router>
// )
  
// };

// export default Header;


// Header.js
import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';

import './header.css';
import Home from '../../pages/home/Home';
import Create from '../../pages/create/CreatePost';
import AboutUs from '../../pages/about/AboutUs';
import Contact from '../../pages/contact/Contact';

const Header = () => {
  return (
    <Router>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6695f8' }}>
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src='https://i.imgur.com/zFUIq9F.png' alt="Logo" className="logo" />
            </NavLink>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="mama" exact to="/home"><b>Home</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/create"><b>Blog</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/aboutus"><b>About</b></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/contact"><b>Contact</b></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  
      <Routes>
      <Route 
              exact
              path = "/home"
              element ={<Home/>}
          ></Route>

          <Route 
              exact
              path = "/create"
              element ={<Create/>}
          ></Route>

          <Route 
              exact
              path = "/aboutus"
              element ={<AboutUs/>}
          ></Route>

          <Route 
              exact
              path = "/contact"
              element ={<Contact/>}
          ></Route>
      </Routes>
    </Router>
  );
};

export default Header;
