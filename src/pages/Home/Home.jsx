import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import styles from './Home.module.css';
import SectionOne from './SectionOne/SectionOne';
import SectionThree from './SectionThree/SectionThree';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className={styles.home_main}>
      <NavBar />
      <SectionOne />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default Home;
