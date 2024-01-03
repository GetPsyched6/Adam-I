import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import NavBar from '../Navbar/Navbar';
import Button from '../Button/Button';
import InputBox from '../InputBox/InputBox';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');
  };

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className={styles['login-container']}>
      <NavBar />
      <div className={styles.login}>
        <form action="" className={styles.login_form} id="loginForm" onSubmit={handleSubmit}>
          <div className={styles['login-input']}>
            <h1>Login</h1>
            <InputBox
              id="email"
              label="Email"
              Required
              name="email"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.email}
              size="large"
            />
            <InputBox
              id="password"
              label="Password"
              Required
              name="password"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.password}
              size="large"
            />
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
          <Button isSubmit text="Login" />
        </form>
        <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
      </div>
      <span className={styles.invest}>
        Shaping tomorrow together, Invest in Africa&apos;s potential.
      </span>
    </div>
  );
}

export default Login;
