import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register2.module.css';
import NavBar from '../Navbar/Navbar';
import Button from '../Button/Button';

function Register2() {
  const Navigate = useNavigate();
  const handlesubmit = e => {
    e.preventDefault();
    Navigate('/login');
  };
  const handleback = () => {
    Navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.Nav}>
        <NavBar className />
      </div>
      <div className={styles.coloring}>
        <div className={styles['sub-container']}>
          <h1 className={styles.heading}>Company Registration</h1>
          <h3 className={styles.part}>Contact Information (2 of 2)</h3>
          <form className={styles.Form} onSubmit={handlesubmit}>
            <div className={styles.sec}>
              <label htmlFor="contact">
                {' '}
                <input
                  type="text"
                  id="contact"
                  placeholder="Main Person of Contact*"
                  className={styles.contact}
                />
              </label>
              <label htmlFor="position">
                {' '}
                <input
                  type="text"
                  id="position"
                  placeholder="Position*"
                  className={styles.position}
                />
              </label>
            </div>

            <div className={styles.sec}>
              <label htmlFor="number">
                {' '}
                <input
                  type="number"
                  id="number"
                  placeholder="Phone Number*"
                  className={styles.number}
                />
              </label>
              <label htmlFor="email">
                {' '}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className={styles.email}
                />
              </label>
            </div>

            <div className={styles.sec}>
              <label htmlFor="website-url">
                {' '}
                <input
                  type="text"
                  id="website-url"
                  placeholder="Company Website*"
                  className={styles['website-url']}
                />
              </label>
            </div>
            <div className={styles['login-link']}>
              have an account? <a href="/login">Login</a>
            </div>

            <div className={styles.btn}>
              <Button type="submit" Name="Register" backgroundColor="rgba(255, 228, 120, 0.82)" />
              <Button
                Name="Back"
                onClick={() => {
                  handleback();
                }}
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
