import React from 'react';
import styles from './Home.module.css';
import NavBar from '../../components/Navbar/Navbar';
import SectionOne from './SectionOne/SectionOne';

function Home() {
  return (
    <div className={styles.home_main}>
      <NavBar />
      <SectionOne />
    </div>
  );
}

export default Home;
