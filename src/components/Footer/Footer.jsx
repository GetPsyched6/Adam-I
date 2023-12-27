import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialmedia}>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} className={styles.icon} /> Facebook
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> Instagram
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} /> Twitter
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faYoutube} className={styles.icon} /> Youtube
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
