import React, { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import japanFlag from '../../assets/flag-japan.png';
import logo from '../../assets/invest_africa.png';
import styles from './Navbar.module.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const matches = useMediaQuery('(max-width: 992px)');

  const getMainNavClasses = () => {
    let classes = `${styles.nav_links} ${styles.extra_nav_styling}`;
    if (matches) {
      classes += ` ${styles.mobile_nav}`;
    }
    if (matches && isOpen) {
      classes += ` ${styles.mobile_nav_open}`;
    }
    return classes;
  };

  return (
    <nav className={styles.nav}>
      <div>
        <img src={logo} alt="Website logo" className={styles.logo} />
      </div>
      <ul className={getMainNavClasses()}>
        <li className={styles.nav_link}>
          <Link to="/home">Home</Link>
        </li>
        <li className={styles.dropdown_container}>
          <button type="button" className={`${styles.dropdown_button} ${styles.nav_link}`}>
            About
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
          </button>
          <div className={styles.dropdown_content}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/matching">Matching Platform</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.nav_link}>
          <Link to="/whyafrica">Why Africa</Link>
        </li>
        <li className={styles.nav_link}>
          <Link to="/industries">Industires</Link>
        </li>
        <li className={styles.dropdown_container}>
          <button type="button" className={`${styles.dropdown_button} ${styles.nav_link}`}>
            Countries
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
          </button>
          <div className={styles.dropdown_content}>
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/kenya">Kenya</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/nigeria">Nigeria</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/morocco">Morocco</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/namibia">Namibia</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.nav_link}>
          <button
            type="button"
            className={`${styles.dropdown_button} ${styles.nav_link} ${styles.lang_button}`}
          >
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
                <Link to="/login">Login</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/register">User Signup</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/companyregister">Company Signup</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <FontAwesomeIcon
        className={styles.menu_icon}
        icon={faBars}
        onClick={() => {
          toggleNav();
        }}
      />
    </nav>
  );
}

export default NavBar;
