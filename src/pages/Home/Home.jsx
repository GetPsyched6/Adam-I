import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import SectionThree from './Section/SectionThree';
import styles from './Home.module.css';
import SectionOne from './SectionOne/SectionOne';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className={styles.home_main}>
      <NavBar />

      <SectionThree />

      <SectionOne />
      <Footer />
    </div>
  );
}

export default Home;
