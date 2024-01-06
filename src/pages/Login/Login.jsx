import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import NavBar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';

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
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.blur_wrapper}>
        <form action="" className={styles.login_form} id="loginForm" onSubmit={handleSubmit}>
          <div className={styles.login_input}>
            <h2>Login</h2>
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

          <div className={styles.register_link}>
            Don&apos;t have an account?{' '}
            <Link to="/register" className={styles.link}>
              Register
            </Link>
          </div>
          <div className={styles.checkbox_wrapper}>
            <label htmlFor="remember" className={styles.remember}>
              <input type="checkbox" name="remember" id="remember" />
              <span className={styles.checkbox_icon} />
              Remember Me
            </label>
          </div>
          <Button isSubmit text="Login" />
        </form>
        <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
      </div>
    </div>
  );
}

export default Login;
