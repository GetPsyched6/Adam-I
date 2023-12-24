import React from 'react';
import './Login.css';
import NavBar from '../Navbar/Navbar';

function Login() {
  return (
    <div>
      {' '}
      <div className="login-container">
        <NavBar />
        <div className="Login">
          <form action="">
            <h1>Login</h1>
            <input
              type="text"
              id="email"
              className="login-email"
              placeholder="Email"
              autoComplete="username"
            />
            <input
              type="password"
              id="password"
              className="login-password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <p className="Register">
              Dont have account? <a href="/register">Register</a>
            </p>
            <div className="Remember-check">
              <input type="checkbox" name="Remember" id="" />{' '}
              <span className="Remember">Remember Me</span>
            </div>
            <button type="button" className="login-btn">
              Login
            </button>
          </form>
          <div className="aboutus">© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
        <span className="invast">Shaping tomorrow together, Invest in Africas potential.</span>
      </div>
    </div>
  );
}

export default Login;
