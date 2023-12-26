import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/morocco">
            <Country countryName="MOROCCO" countryImageSrc={morocco} />
          </Link>
          <Link to="/nigeria">
            <Country countryName="NIGERIA" countryImageSrc={nigeria} />
          </Link>
          <Link to="/kenya">
            <Country countryName="KENYA" countryImageSrc={kenya} />
          </Link>
          <Link to="/namibia">
            <Country countryName="NAMIBIA" countryImageSrc={namibia} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
