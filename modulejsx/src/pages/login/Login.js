import React, { useState } from 'react';
import './login.css'; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter your username and password');
    }
  };

  return (
    <div class="big-container">
    <div className="login">
      <div className="loginForm">
        <div className="logoContainer">
             <img
                src='https://i.imgur.com/HTwnYvY.png'
                alt="Logo"
                className="logo" 
               /> 
            </div>
            <h1 className="loginTitle"><b>Login</b></h1>
            <form>
            <div className="formGroup">
                <label>Username:</label>
                <input 
                className="loginInput" type="text" placeholder="Enter your username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password:</label>
                <input
                className="loginInput" type="password" placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="loginButton" type="button" onClick={handleLogin}>
                <b>Login</b>
                </button>
            </div>
            </form>
        </div>
        <div className="welcomeImage">
          <img
            src="https://i.pinimg.com/564x/81/50/24/81502455d0e19ce751cdfa14c31e233e.jpg"
            alt="Welcome to the Site"
            className="welcomeImg"
          />
      </div>
    </div>
    </div>
  );
};

export default Login;
