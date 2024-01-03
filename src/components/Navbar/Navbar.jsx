import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { FaChevronDown, FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import japanFlag from '../../assets/flag-japan.png';
import logo from '../../assets/invest_africa.png';
import styles from './Navbar.module.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

  useEffect(() => {
    // ?Function to handle the closing of the nav when clicking outside
    const handleClickOutside = event => {
      if (!event.target.closest(`.${styles.nav}`) && isOpen) {
        setIsOpen(false);
      }
    };

    // ?Function to handle the change in the navbar style on scroll
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 72;
      setIsScrolled(offset > threshold);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // ?Managing the overflow style on the body based on the nav state
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';

    // ?Setting the initial state based on the initial scroll position
    handleScroll();

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo_wrapper}>
        <img src={logo} alt="Website logo" className={styles.logo} />
      </div>
      <a
        className={`${styles.skip_nav} ${styles.nav_link}`}
        href="#main-content"
        aria-label="Skip directly to main content"
      >
        Skip Navigation
      </a>
      <ul className={getMainNavClasses()}>
        <li className={styles.nav_link}>
          <a href="/">Home</a>
        </li>
        <li className={styles.dropdown_container}>
          <button
            type="button"
            onMouseOver={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onFocus={toggleDropdown}
            onBlur={toggleDropdown}
            aria-label="About Us and Investors Matching Platform"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen.toString()}
            className={`${styles.dropdown_button} ${styles.nav_link}`}
          >
            About
            <FaChevronDown className={styles.icon} />
          </button>
          <div
            className={`${styles.dropdown_content} ${isScrolled ? styles.scrolled_dropdown : ''}`}
          >
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
          <a href="#whyafrica">Why Africa</a>
        </li>
        <li className={styles.nav_link}>
          <a href="#industries">Industires</a>
        </li>
        <li className={styles.dropdown_container}>
          <button
            type="button"
            onMouseOver={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onFocus={toggleDropdown}
            onBlur={toggleDropdown}
            aria-label="Select Partner Countries"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen.toString()}
            className={`${styles.dropdown_button} ${styles.nav_link}`}
          >
            Countries
            <FaChevronDown className={styles.icon} />
          </button>
          <div
            className={`${styles.dropdown_content} ${isScrolled ? styles.scrolled_dropdown : ''}`}
          >
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
            aria-label="Change Language"
            className={`${styles.dropdown_button} ${styles.nav_link} ${styles.lang_button}`}
          >
            JP
            <img src={japanFlag} alt="flag of Japan" className={styles.flag} />
          </button>
        </li>
        <li className={styles.dropdown_container}>
          <button
            type="button"
            onMouseOver={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onFocus={toggleDropdown}
            onBlur={toggleDropdown}
            aria-label="Login or Register"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen.toString()}
            className={`${styles.dropdown_button} ${styles.nav_link}`}
          >
            Login
            <FaChevronDown className={styles.icon} />
          </button>
          <div
            className={`${styles.dropdown_content} ${isScrolled ? styles.scrolled_dropdown : ''}`}
          >
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/login">Login</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/register">User Signup</Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/register-1">Company Signup</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <FaBars
        className={styles.menu_icon}
        onClick={() => {
          toggleNav();
        }}
      />
    </nav>
  );
}

export default NavBar;
