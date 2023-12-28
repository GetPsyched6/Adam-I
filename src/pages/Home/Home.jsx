import React from 'react';
import styles from './Home.module.css';
// import NavBar from '../../components/Navbar/Navbar';
import Section1 from '../../components/Section1/Section1';

function Home() {
  return (
    <div className={styles.home_main}>
      {/* <NavBar /> */}
      <Section1 />
    </div>
  );
}

export default Home;
