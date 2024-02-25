/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useImgMapArea from 'react-img-map-area';
import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import moroccoImg from '../../../assets/images/Home/SectionThree/morocco.webp';
import nigeriaImg from '../../../assets/images/Home/SectionThree/nigeria.webp';
import kenyaImg from '../../../assets/images/Home/SectionThree/kenya.webp';
import namibiaImg from '../../../assets/images/Home/SectionThree/namibia.webp';
import styles from './SectionThree.module.css';
import { content, morocco, nigeria, kenya, namibia } from '../../../data/countryContent';
import map from '../../../assets/images/Home/SectionThree/map.webp';
import Cards from '../../../components/Cards/Cards';

const countries = [
  { id: 1, name: 'Morocco', imageSrc: moroccoImg },
  { id: 2, name: 'Nigeria', imageSrc: nigeriaImg },
  { id: 3, name: 'Kenya', imageSrc: kenyaImg },
  { id: 4, name: 'Namibia', imageSrc: namibiaImg },
];

function SectionThree() {
  const [activeCountry, setActiveCountry] = useState(content);
  const [countryName, setCountryName] = useState('Map of Africa');
  useImgMapArea();

  const titleVariants = {
    initial: {
      opacity: 0,
      translateY: 10,
    },
    enter: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.25, delay: 0.25 },
    },
    exit: {
      opacity: 0,
      translateY: -10,
      transition: { duration: 0.25 },
    },
  };

  return (
    <div className={styles.wrapper} id="main-content" tabIndex="-1">
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>Choose a Country</h2>
      </div>

      <div className={styles.card_wrapper}>
        {countries.map(country => (
          <Cards
            key={country.id}
            title={country.name}
            image={country.imageSrc}
            alt={country.name}
            isGreen
            linkUrl={`/${country.name}`}
          />
        ))}
      </div>

      <div className={styles.horizontal_line}>
        <br />
      </div>

      <div className={styles.title_wrapper}>
        <AnimatePresence mode="popLayout">
          <motion.h3
            key={countryName}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={titleVariants}
            className={styles.title}
          >
            {countryName}
          </motion.h3>
        </AnimatePresence>
      </div>
      <div className={styles.content_map_wrapper}>
        <div className={styles.content}>
          {activeCountry.map(country => (
            <CountryDescription
              key={country.id}
              title={country.title}
              body={country.body}
              color={country.color}
            />
          ))}
        </div>
        <div className={styles.map_wrapper}>
          <img className={styles.map} src={map} alt="African Map" useMap="#image-map" />

          <map name="image-map">
            <area
              onMouseOver={() => {
                setActiveCountry(morocco);
                setCountryName('Morocco');
              }}
              onFocus={() => {
                setActiveCountry(morocco);
                setCountryName('Morocco');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              tabIndex="0"
              alt="Morocco"
              title="Morocco"
              role="link"
              aria-label="Clickable area of the map representing Morocco"
              coords="295,14,1037,553"
              shape="rect"
            />
            <area
              onMouseOver={() => {
                setActiveCountry(nigeria);
                setCountryName('Nigeria');
              }}
              onFocus={() => {
                setActiveCountry(nigeria);
                setCountryName('Nigeria');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              tabIndex="0"
              alt="Nigeria"
              title="Nigeria"
              role="link"
              aria-label="Clickable area of the map representing Nigeria"
              coords="980,1278,1861,1936"
              shape="rect"
            />
            <area
              onMouseOver={() => {
                setActiveCountry(kenya);
                setCountryName('Kenya');
              }}
              onFocus={() => {
                setActiveCountry(kenya);
                setCountryName('Kenya');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              tabIndex="0"
              alt="Kenya"
              title="Kenya"
              role="link"
              aria-label="Clickable area of the map representing Kenya"
              coords="2797,1774,3414,2425"
              shape="rect"
            />
            <area
              onMouseOver={() => {
                setActiveCountry(namibia);
                setCountryName('Namibia');
              }}
              onFocus={() => {
                setActiveCountry(namibia);
                setCountryName('Namibia');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              tabIndex="0"
              alt="Namibia"
              title="Namibia"
              role="link"
              aria-label="Clickable area of the map representing Namibia"
              coords="1456,3016,2400,3830"
              shape="rect"
            />
          </map>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
