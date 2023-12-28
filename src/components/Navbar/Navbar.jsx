import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import japanFlag from '../../assets/flag-japan.png';
import logo from '../../assets/invest_africa.png';
import styles from './Navbar.module.css';
// import NavDropdown from '../NavDropdown/NavDropdown';

function NavBar() {
  // const [isOpen, setIsOpen] = useState(null);

  return (
    <nav className={styles.nav}>
      <div>
        <img src={logo} alt="Website logo" className={styles.logo} />
      </div>
      <ul className={`${styles.nav_links} ${styles.extra_nav_styling}`}>
        <li className={styles.nav_link}>
          <Link to="/home">Home</Link>
        </li>
        <li className={styles.nav_link}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.nav_link}>
          <Link to="/whyafrica">Why Africa</Link>
        </li>
        <li className={styles.dropdown_container}>
          <button type="button" className={`${styles.dropdown_button} ${styles.nav_link}`}>
            Industries
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
          </button>
          <div className={styles.dropdown_content}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/home">Home</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/about">About</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/whyafrica">Why Africa</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.dropdown_container}>
          <button type="button" className={`${styles.dropdown_button} ${styles.nav_link}`}>
            Countries
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
          </button>
          <div className={styles.dropdown_content}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/home">Home</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/about">About</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/whyafrica">Why Africa</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.nav_link}>
          <button type="button" className={`${styles.dropdown_button} ${styles.nav_link}`}>
            JP
            <img src={japanFlag} alt="flag of Japan" className={styles.flag} />
          </button>
        </li>
        <li className={styles.dropdown_container}>
          <button type="button" className={`${styles.dropdown_button} ${styles.nav_link}`}>
            Login
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
          </button>
          <div className={styles.dropdown_content}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/home">Home</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/about">About</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/whyafrica">Why Africa</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
