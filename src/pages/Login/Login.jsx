/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';
import InputBox from '../../components/InputBox/InputBox';

function Login() {
  const LOGIN_URL = `${process.env.REACT_APP_BACKEND_URL}/login`;
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Login');

  const alertDuration = 5000;
  const [alert, setAlert] = useState({ message: '', state: '', active: false });

  const toggleAlert = () => {
    setAlert(prevAlert => ({
      ...prevAlert,
      active: !prevAlert.active,
    }));
  };

  const [formData, setFormData] = React.useState({
    email: '',
    accountPassword: '',
    accountType: '',
    remember: '',
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      email: formData.email,
      accountPassword: formData.accountPassword,
      accountType: formData.accountType,
      remember: formData.remember,
    };
    setButtonText('...');
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let alertMessage = '';
      let alertState = '';

      if (response.ok) {
        alertMessage = 'Login successful. Redirecting...';
        alertState = 'success';
        setTimeout(() => {
          navigate('/');
        }, alertDuration + 1000);
        setButtonText('Login');
      } else {
        alertMessage = 'Login failed, please retry.';
        alertState = 'error';
        setButtonText('Login');
      }

      // !Start Alert with set alert-data.
      setAlert(prevAlert => ({
        ...prevAlert,
        message: alertMessage,
        state: alertState,
      }));
      toggleAlert();

      const alertTimeout = setTimeout(() => {
        toggleAlert();
      }, alertDuration);

      return () => clearTimeout(alertTimeout);
      // *catch when unknown error happens
    } catch (error) {
      setAlert(prevAlert => ({
        ...prevAlert,
        message: error.toString(),
        state: 'error',
      }));
      toggleAlert();

      const alertTimeout = setTimeout(() => {
        toggleAlert();
      }, alertDuration);
      return () => clearTimeout(alertTimeout);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.blur_wrapper}>
        <form action="" className={styles.login_form} id="loginForm" onSubmit={handleSubmit}>
          <div className={styles.login_input}>
            <h2>Login</h2>
            <InputBox
              id="email"
              label="Email"
              required
              name="email"
              type="email"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.email}
              size="large"
            />
            <InputBox
              id="accountPassword"
              label="Password"
              required
              name="accountPassword"
              type="password"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.accountPassword}
              size="large"
            />
            <InputBox
              id="accountType"
              label="Account Type"
              required
              isDropdown
              name="accountType"
              type="text"
              onChange={event => {
                handleChange(event);
              }}
              value={formData.accountType}
              size="large"
            >
              <option value="User" title="User">
                User
              </option>
              <option value="Company" title="Company">
                Company
              </option>
            </InputBox>
          </div>

          <div className={styles.register_link}>
            Don&apos;t have an account?{' '}
            <Link to="/register" className={styles.link}>
              Register
            </Link>
          </div>
          <div className={styles.checkbox_wrapper} tabIndex="0">
            <label htmlFor="remember" className={styles.remember}>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                onChange={handleChange}
                checked={formData.remember}
              />
              <span className={styles.checkbox_icon} />
              Remember Me
            </label>
          </div>
          <Button isSubmit text={buttonText} />
        </form>
        <div className={styles.aboutus}>
          © {new Date().getFullYear()} - Invest Africa :: Powered by Adam-i Japan
        </div>
      </div>
      <Alert message={alert.message} state={alert.state} isActive={alert.active} />
    </div>
  );
}

export default Login;
