import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import styles from './Home.module.css';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import Footer from '../../components/Footer/Footer';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionFive from './SectionFive/SectionFive';

function Home() {
  return (
    <div className={styles.home_main}>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default Home;
