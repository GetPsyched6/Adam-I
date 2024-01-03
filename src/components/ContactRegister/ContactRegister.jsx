import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContactRegister.module.css';
import NavBar from '../Navbar/Navbar';
import Button from '../Button/Button';
import InputBox from '../InputBox/InputBox';

function ContactRegister() {
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
    navigate('/companyregister');
  };

  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.sub_wrapper}>
        <h3>Company Registration</h3>
        <h5>Contact Information (2 of 2)</h5>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_group}>
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

          <div className={styles.input_group}>
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

          <div className={styles.input_group}>
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
          <div className={styles.login_link}>
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
      </div>
      <div className={styles.aboutus}>© 2023 - Invest Africa :: Powered by Adam-i Japan</div>
      <div className={styles.invest}>
        Shaping tomorrow together, Invest in Africa&apos;s potential.
      </div>
    </div>
  );
}

export default ContactRegister;
