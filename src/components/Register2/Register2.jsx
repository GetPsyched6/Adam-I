import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register2.module.css';
import NavBar from '../Navbar/Navbar';
import Button from '../Button/Button';
import InputBox from '../InputBox/InputBox';

function Register2() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/');
  };
  const [formData, setFormData] = React.useState({
    contact: '',
    position: '',
    number: '',
    email: '',
    website: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.coloring}>
        <div className={styles['sub-container']}>
          <h1 className={styles.heading}>Company Registration</h1>
          <h3 className={styles.part}>Contact Information (2 of 2)</h3>
          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.sec}>
              <InputBox
                id="contact"
                label="Main Person of Contact*"
                required
                name="contact"
                onChange={event => {
                  handleChange(event);
                }}
                value={formData.contact}
                size="large"
              />
              <InputBox
                id="position"
                label="Position*"
                required
                name="position"
                onChange={event => {
                  handleChange(event);
                }}
                value={formData.position}
                size="large"
              />
            </div>

            <div className={styles.sec}>
              <InputBox
                id="number"
                label="Phone Number*"
                required
                name="number"
                onChange={event => {
                  handleChange(event);
                }}
                value={formData.number}
              />
              <InputBox
                id="email"
                label="Email"
                required
                name="email"
                onChange={event => {
                  handleChange(event);
                }}
                value={formData.email}
              />
            </div>

            <div className={styles.sec}>
              <InputBox
                id="website"
                label="Company Website*"
                required
                name="website"
                onChange={event => {
                  handleChange(event);
                }}
                value={formData.website}
              />
            </div>
            <div className={styles['login-link']}>
              Have an account? <a href="/login">Login</a>
            </div>

            <div className={styles.btn}>
              <Button isSubmit text="Register" />
              <Button
                isSubmit
                isAction
                onClick={() => {
                  handleBack();
                }}
                text="Back"
              />
            </div>
          </form>
          <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
          <div className={styles.Invest}>
            Shaping tomorrow together, Invest in Africa&apos;s potential.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register2;
