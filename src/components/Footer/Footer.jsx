import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.socialmedia}>
        <Link to="https://www.facebook.com/" className={styles.icon_wrapper}>
          <FaFacebookF className={styles.icon} />
          <p>Facebook</p>
        </Link>
        <Link to="https://www.facebook.com/" className={styles.icon_wrapper}>
          <FaInstagram className={styles.icon} />
          <p>Instagram</p>
        </Link>
        <Link to="https://www.facebook.com/" className={styles.icon_wrapper}>
          <FaTwitter className={styles.icon} />
          <p>Twitter</p>
        </Link>
        <Link to="https://www.facebook.com/" className={styles.icon_wrapper}>
          <FaYoutube className={styles.icon} />
          <p>Youtube</p>
        </Link>
      </div>
      <div className={styles.divider} />
      <div>
        <p className={styles.contactinfo}>
          <span className={styles.title}>Adam Innovations Co. Ltd</span>
          <br />
          Global IT Park, 1188-2, Urasa, Minami Uonuma
          <br />
          Niigata 9497302 Japan
          <br />
          Tel: (+81)25-788-0665
          <br />
          Email: <u>info@adam-i.jp</u>
          <br />
          <br className={styles.spacing} />
          <span className={styles.subtitle}>
            Copyright ©2024 Invest Africa. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
