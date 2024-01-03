import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import NavBar from '../Navbar/Navbar';
import Button from '../Button/Button';
import InputBox from '../InputBox/InputBox';

function Register() {
  const Navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    Navigate('/');
  };
  const [formData, setFormData] = React.useState({
    email: '',
    username: '',
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
    <div>
      <div className={styles['register-container']}>
        <NavBar />
        <div className={styles.register}>
          <form action="" className={styles.register_form} onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className={styles['register-input']}>
              <InputBox
                id="username"
                label="Username"
                Required
                name="username"
                onChange={handleChange}
                value={formData.username}
                size="large"
              />
              <InputBox
                id="email"
                label="Email"
                Required
                name="email"
                onChange={handleChange}
                value={formData.username}
                size="large"
              />
              <InputBox
                id="password"
                label="Password"
                Required
                name="password"
                onChange={handleChange}
                value={formData.username}
                size="large"
              />
            </div>

            <div className={styles['login-link']}>
              have an account? <a href="/login">Login</a>
            </div>
            <Button isSubmit text="Register" />
          </form>
          <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
        <div className={styles.invest}>
          Shaping tomorrow together, Invest in Africa&apos;s potential.
        </div>
      </div>
    </div>
  );
}

export default Register;
