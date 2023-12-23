import React, { useState } from 'react';
import Login from './pages/login/Login';
import Hame from './pages/land/landing';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (loggedInUsername) => {
    setLoggedIn(true);
  };

  return (
    <div className='app-container'>
      {isLoggedIn && <Header />}
      <div className='content'>
        {isLoggedIn ? (
          // Render Hame only if on the home/landing page
          window.location.pathname === '/Home' ? <Home /> : null
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
