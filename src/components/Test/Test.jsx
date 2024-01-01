import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Test.css';

const login = () => {
  const navigation = useNavigate();
  return (
    <div className="Login">
      <input type="text" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <span className="Remember">
        <input type="checkbox" /> <span>Keep Me Logged In</span>
      </span>
      <button className="Login-btn" type="button" onClick={() => navigation('/')}>
        Log In
      </button>
      <div className="Other-Options">
        <a href="/forgot-password">FORGOT PASSWORD?</a>
        <a href="/register">
          NEW USER? <span className="Register-color">REGISTER</span>
        </a>
      </div>
    </div>
  );
};
export default login;
