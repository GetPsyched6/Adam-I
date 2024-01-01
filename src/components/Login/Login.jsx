import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';

function Login() {
  const Navigate = useNavigate();
  const handlesubmit = e => {
    e.preventDefault();
    Navigate('/');
  };
  return (
    <div>
      <div className="login-container">
        <NavBar />
        <div className="Login">
          <form action="" onSubmit={handlesubmit}>
            <h1>Login</h1>
            <label htmlFor="email">
              {' '}
              <input
                type="text"
                id="email"
                className="login-email"
                placeholder="Email"
                autoComplete="username"
              />
            </label>
            <label htmlFor="password">
              {' '}
              <input
                type="password"
                id="password"
                className="login-password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </label>

            <div className="Register">
              Don&apos;t have an account? <a href="/register">Register</a>
            </div>
            <div className="Remember-check">
              <label htmlFor="remember" className="Remember">
                <input type="checkbox" name="Remember" id="remember" />
                Remember Me
              </label>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="aboutus">© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
        <span className="invast">
          Shaping tomorrow together, Invest in Africa&apos;s potential.
        </span>
      </div>
    </div>
  );
}

export default Login;
