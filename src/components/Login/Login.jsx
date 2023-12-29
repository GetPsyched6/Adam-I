import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import NavBar from '../Navbar/Navbar';
import Button from '../Button/Button';

function Login() {
  const Navigate = useNavigate();
  const handlesubmit = e => {
    e.preventDefault();
    Navigate('/');
  };
  return (
    <div>
      <div className={styles['login-container']}>
        <NavBar />
        <div className={styles.Login}>
          <form action="" className={styles.login_form} id="loginForm" onSubmit={handlesubmit}>
            <div className={styles['login-input']}>
              <h1>Login</h1>
              <label htmlFor="email">
                {' '}
                <input
                  type="text"
                  id="email"
                  className={styles['login-email']}
                  placeholder="Email"
                  autoComplete="username"
                />
              </label>
              <label htmlFor="password">
                {' '}
                <input
                  type="password"
                  id="password"
                  className={styles['login-password']}
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </label>
            </div>

            <div className={styles['register-link']}>
              Don&apos;t have an account? <a href="/register">Register</a>
            </div>
            <div className={styles['remember-check']}>
              <label htmlFor="remember" className={styles.remember}>
                <input type="checkbox" name="remember" id="remember" />
                <span className={styles['checkbox-icon']} />
                Remember Me
              </label>
            </div>
            <Button type="submit" Name="Login" />
          </form>
          <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
        <span className={styles.invast}>
          Shaping tomorrow together, Invest in Africa&apos;s potential.
        </span>
      </div>
    </div>
  );
}

export default Login;
