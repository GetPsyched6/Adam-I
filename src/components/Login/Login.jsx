import React from 'react';
import './Login.css';
import NavBar from '../Navbar/Navbar';

function Login() {
  return (
    <div>
      <div className="Container">
        <div className="nave">
          <NavBar />
        </div>
        <div className="Login">
          <h1>Login</h1>
          <input type="text" className="email" id="email" placeholder="Email" />
          <input type="password" className="password" id="password" placeholder="Password" />
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
          <div className="aboutus">© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
        <span className="invast">Shaping tomorrow together, Invest in Africas potential.</span>
      </div>
    </div>
  );
}

export default Login;
