import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialmedia}>
        <a href="https://www.facebook.com/">
          <FaFacebookF className={styles.icon} /> Facebook
        </a>
        <a href="https://www.facebook.com/">
          <FaInstagram className={styles.icon} /> Instagram
        </a>
        <a href="https://www.facebook.com/">
          <FaTwitter className={styles.icon} /> Twitter
        </a>
        <a href="https://www.facebook.com/">
          <FaYoutube className={styles.icon} /> Youtube
        </a>
      </div>
      <div className={styles.divider} />
      <div className={styles.contactinfo}>
        <p className={styles.AdamInnovations}>Adam Innovations Co., Ltd</p>
        <p>
          Global IT Park1188-2, Urasa, Minami
          <p>UonumaNiigata 9497302 Japan</p>
        </p>
        <p>Tel: (+81)25-788-0665</p>
        <p>
          Email: <u>info@adam-i.jp</u>
        </p>

        <div className={styles.copyright}>Copyright ©2023 Invest Africa. All rights reserved.</div>
      </div>
    </footer>
  );
}
