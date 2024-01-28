import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { validateUserData } from '../../utils/validateUser';
import styles from './Register.module.css';
import Button from '../../components/Button/Button';
import Alert from '../../components/Alert/Alert';
import InputBox from '../../components/InputBox/InputBox';

function Register() {
  const REGISTRATION_URL = 'http://localhost:9000/userregister';

  const Navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Register');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accountPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const alertDuration = 5000;
  const [alert, setAlert] = useState({ message: '', state: '', active: false });

  const toggleAlert = () => {
    setAlert(prevAlert => ({
      ...prevAlert,
      active: !prevAlert.active,
    }));
  };
  useEffect(() => {
    const validationErrors = validateUserData(formData);
    setErrors(validationErrors || {});
  }, [formData]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));

    // *Prevent password must match error until interacted
    if (name === 'confirmPassword') {
      setConfirmPasswordTouched(true);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      accountPassword: formData.accountPassword,
      confirmPassword: formData.confirmPassword,
    };
    setButtonText('...');

    try {
      const response = await fetch(REGISTRATION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let alertMessage = '';
      let alertState = '';

      if (response.ok) {
        alertMessage = 'Signup successful. Redirecting...';
        alertState = 'success';
        setTimeout(() => {
          Navigate('/');
        }, alertDuration + 1500);
        setButtonText('Register');
      } else {
        alertMessage = 'Signup failed, please retry.';
        alertState = 'error';
        setButtonText('Register');
      }

      // !Start Alert with set alert-data.
      setAlert({ message: alertMessage, state: alertState });
      toggleAlert();

      const alertTimeout = setTimeout(() => {
        toggleAlert();
      }, alertDuration);
      return () => clearTimeout(alertTimeout);
    } catch (error) {
      setAlert({ message: error.toString(), state: 'error' });
      toggleAlert();
      setButtonText('Register');

      const alertTimeout = setTimeout(() => {
        toggleAlert();
      }, alertDuration);
      return () => clearTimeout(alertTimeout);
    }
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
                message={errors.name}
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
                message={errors.email}
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
                message={errors.accountPassword}
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
                message={confirmPasswordTouched ? errors.confirmPassword : ''}
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
            <Button isSubmit isAction text={buttonText} />
          </form>
          <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
        </div>
      </div>
      <Alert message={alert.message} state={alert.state} isActive={alert.active} />
    </div>
  );
}

export default Register;
