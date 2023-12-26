import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Country from '../../components/CountryBanner/CountryBanner';
import morocco from '../../assets/morocco.jpg';
import nigeria from '../../assets/nigeria.jpeg';
import kenya from '../../assets/kenya.jpeg';
import namibia from '../../assets/namibia.jpeg';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.selectCountryContainer}>
        <div className={styles.selectCountry}>
          <Country countryName="MOROCCO" countryImageSrc={morocco} />
          <Country countryName="NIGERIA" countryImageSrc={nigeria} />
          <Country countryName="KENYA" countryImageSrc={kenya} />
          <Country countryName="NAMIBIA" countryImageSrc={namibia} />
        </div>
      </div>
    </div>
  );
}

export default Home;
