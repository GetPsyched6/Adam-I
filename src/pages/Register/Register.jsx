import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import styles from './Register.module.css';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';

function Register() {
  const Navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    accountPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      accountPassword: formData.accountPassword,
      confirmPassword: formData.confirmPassword,
    };

    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Registration Successful');
        // Handle success, maybe redirect or clear form
      } else {
        console.error('Registration Failed');
        // Handle error, show message to user
      }
    } catch (error) {
      console.error('Error during submission:', error);
      // Handle error, show message to user
    }
    Navigate('/');
  };

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
                id="name"
                label="Full Name"
                required
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                size="large"
              />
              <InputBox
                id="email"
                label="Email"
                required
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                size="large"
              />
              <InputBox
                id="accountPassword"
                label="Password"
                required
                tooltip="password-tooltip"
                name="accountPassword"
                type="password"
                onChange={handleChange}
                value={formData.accountPassword}
                size="large"
              />
              <InputBox
                id="confirmPassword"
                label="Confirm Password"
                required
                tooltip="password-tooltip"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                value={formData.confirmPassword}
                size="large"
              />
              <Tooltip
                id="password-tooltip"
                style={{
                  backgroundColor: 'black',
                  color: '#fff',
                  padding: '1rem 1.5rem 1.5rem',
                  borderRadius: '16px',
                }}
                opacity={1}
                role="tooltip"
              >
                <div className={styles.tooltip_wrapper}>
                  <p className={styles.tooltip_title}>Password Requirements:</p>
                  <ul className={styles.tooltip_list_wrapper}>
                    <li>8-128 characters with a mix of letters and numbers</li>
                    <li>Must include both upper and lower case letters</li>
                  </ul>
                </div>
              </Tooltip>
            </div>

            <div className={styles.login_link}>
              Have an account?{' '}
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </div>
            <Button isSubmit isAction text="Register" />
          </form>
          <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
      </div>
    </div>
  );
}

export default Register;
