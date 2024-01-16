import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';

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
      <div className={styles.wrapper}>
        <div className={styles.blur_wrapper}>
          <form action="" className={styles.register_form} onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className={styles.register_input}>
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
                value={formData.email}
                size="large"
              />
              <InputBox
                id="password"
                label="Password"
                Required
                name="password"
                onChange={handleChange}
                value={formData.password}
                size="large"
              />
            </div>

            <div className={styles.login_link}>
              Have an account?{' '}
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </div>
            <Button isSubmit text="Register" />
          </form>
          <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
      </div>
    </div>
  );
}

export default Register;
