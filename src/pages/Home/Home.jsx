import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import SectionThree from './Section/SectionThree';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home_main}>
      <NavBar />
      <SectionThree />
    </div>
  );
}

export default Home;
