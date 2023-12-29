import React from 'react';
import styles from './Home.module.css';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFive from './SectionFive/SectionFive';
import SectionSeven from './SectionSeven/SectionSeven';

function Home() {
  return (
    <div className={styles.home_main}>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionSeven />
      <Footer />
    </div>
  );
}

export default Home;
