import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { FaChevronDown, FaBars } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import japanFlag from '../../assets/flag-japan.png';
import logo from '../../assets/invest_africa.webp';
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

  const handleDropdownLinkClick = () => {
    const dropdownContent = document.querySelector(`.${styles.dropdown_content}`);
    dropdownContent.classList.toggle(styles.hide);
  };

  let mainContent = '#main-content';

  const location = useLocation();

  switch (location.pathname) {
    case '/login':
      mainContent = '#email';
      break;
    case '/register':
      mainContent = '#name';
      break;
    case '/companyregister':
      mainContent = '#companyName';
      break;
    default:
      mainContent = '#main-content';
      break;
  }
  const isNotDesktop = useMediaQuery('(max-width: 992px)');

  const getMainNavClasses = () => {
    let classes = `${styles.nav_links} ${styles.extra_nav_styling}`;
    if (isNotDesktop) {
      classes += ` ${styles.mobile_nav}`;
    }
    if (isNotDesktop && isOpen) {
      classes += ` ${styles.mobile_nav_open}`;
    }
    return classes;
  };

  useEffect(() => {
    // ? Function to handle the closing of the nav when clicking outside
    const handleClickOutside = event => {
      if (!event.target.closest(`.${styles.nav}`) && isOpen) {
        setIsOpen(false);
      }
    };

    // ? Function to handle the change in the navbar style on scroll
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 72;
      setIsScrolled(offset > threshold);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // ? Managing the overflow style on the body based on the nav state
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';

    // ? Setting the initial state based on the initial scroll position
    handleScroll();

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  // * start - Variants to animate dropdowns
  const dropdownVariants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
  };
  const responsiveVariants = isNotDesktop ? {} : dropdownVariants;
  // * end - Variants to animate dropdowns

  return (
    <nav className={styles.nav}>
      <div className={styles.logo_wrapper}>
        <Link to="/">
          <img src={logo} alt="Website logo" className={styles.logo} />
        </Link>
      </div>
      <a
        className={`${styles.skip_nav} ${styles.nav_link}`}
        href={mainContent}
        aria-label="Skip directly to main content"
      >
        Skip Navigation
      </a>
      <ul className={getMainNavClasses()}>
        <li className={styles.nav_link}>
          <Link to="/">Home</Link>
        </li>
        <motion.li
          className={styles.dropdown_container}
          initial="initial"
          whileHover="enter"
          animate={isDropdownOpen ? 'enter' : 'initial'}
          transition={0.3}
        >
          <button
            type="button"
            onMouseOver={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onFocus={toggleDropdown}
            aria-label="About Us and Investors Matching Platform"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen.toString()}
            className={`${styles.dropdown_button} ${styles.nav_link}`}
          >
            About
            <FaChevronDown className={styles.icon} />
          </button>
          <motion.div
            className={`${styles.dropdown_content} ${isScrolled ? styles.scrolled_dropdown : ''}`}
            variants={responsiveVariants}
          >
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/aboutus" onClick={handleDropdownLinkClick}>
                  About Us
                </Link>
              </li>
              {/* onBlur on last link of each dropdown for framer motion animate */}
              <li className={styles.nav_link} onBlur={toggleDropdown}>
                <Link to="/matching" onClick={handleDropdownLinkClick}>
                  Matching Platform
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.li>
        <li className={styles.nav_link}>
          <a href="/#whyafrica">Why Africa</a>
        </li>
        <li className={styles.nav_link}>
          <a href="/#industries">Industires</a>
        </li>
        <motion.li
          className={styles.dropdown_container}
          initial="initial"
          whileHover="enter"
          animate={isDropdownOpen ? 'enter' : 'initial'}
          transition={0.3}
        >
          <button
            type="button"
            onMouseOver={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onFocus={toggleDropdown}
            aria-label="Select Partner Countries"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen.toString()}
            className={`${styles.dropdown_button} ${styles.nav_link}`}
          >
            Countries
            <FaChevronDown className={styles.icon} />
          </button>
          <motion.div
            className={`${styles.dropdown_content} ${isScrolled ? styles.scrolled_dropdown : ''}`}
            variants={responsiveVariants}
          >
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/kenya" onClick={handleDropdownLinkClick}>
                  Kenya
                </Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/nigeria" onClick={handleDropdownLinkClick}>
                  Nigeria
                </Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/morocco" onClick={handleDropdownLinkClick}>
                  Morocco
                </Link>
              </li>
              <li className={styles.nav_link} onBlur={toggleDropdown}>
                <Link to="/namibia" onClick={handleDropdownLinkClick}>
                  Namibia
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.li>
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
        <motion.li
          className={styles.dropdown_container}
          initial="initial"
          whileHover="enter"
          animate={isDropdownOpen ? 'enter' : 'initial'}
          transition={0.3}
        >
          <button
            type="button"
            onMouseOver={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onFocus={toggleDropdown}
            aria-label="Login or Register"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen.toString()}
            className={`${styles.dropdown_button} ${styles.nav_link}`}
          >
            Login
            <FaChevronDown className={styles.icon} />
          </button>
          <motion.div
            className={`${styles.dropdown_content} ${isScrolled ? styles.scrolled_dropdown : ''}`}
            variants={responsiveVariants}
          >
            <ul className={styles.nav_links}>
              <li className={styles.nav_link}>
                <Link to="/login" onClick={handleDropdownLinkClick}>
                  Login
                </Link>
              </li>
              <li className={styles.nav_link}>
                <Link to="/register" onClick={handleDropdownLinkClick}>
                  User Signup
                </Link>
              </li>
              <li className={styles.nav_link} onBlur={toggleDropdown}>
                <Link to="/companyregister" onClick={handleDropdownLinkClick}>
                  Company Signup
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.li>
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
