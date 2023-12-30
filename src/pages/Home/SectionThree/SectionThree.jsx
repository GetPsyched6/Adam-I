/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import useImgMapArea from 'react-img-map-area';
import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import moroccoImg from '../../../assets/images/Home/SectionThree/morocco.jpg';
import nigeriaImg from '../../../assets/images/Home/SectionThree/nigeria.jpeg';
import kenyaImg from '../../../assets/images/Home/SectionThree/kenya.jpeg';
import namibiaImg from '../../../assets/images/Home/SectionThree/namibia.jpeg';
import styles from './SectionThree.module.css';
import { content, morocco, nigeria, kenya, namibia } from '../../../data/countryContent';
import map from '../../../assets/images/Home/SectionThree/map.png';
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
  const [highlightStyle, setHighlightStyle] = useState({});
  const highlightArea = coords => {
    const [left, top, right, bottom] = coords.split(',').map(coord => parseInt(coord, 10));
    setHighlightStyle({
      left: `${left}px`,
      top: `${top}px`,
      width: `${right - left}px`,
      height: `${bottom - top}px`,
      display: 'block',
    });
  };
  const removeHighlight = () => {
    setHighlightStyle({
      display: 'none',
    });
  };
  useImgMapArea();

  return (
    <div className={styles.wrapper}>
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
        <h3 className={styles.title}>{countryName}</h3>
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
        <div>
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
                highlightArea('295,14,1037,553');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
                removeHighlight();
              }}
              tabIndex="0"
              alt="Morocco"
              title="Morocco"
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
                highlightArea('980,1278,1861,1936');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
                removeHighlight();
              }}
              tabIndex="0"
              alt="Nigeria"
              title="Nigeria"
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
                highlightArea('2797,1774,3414,2425');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
                removeHighlight();
              }}
              tabIndex="0"
              alt="Kenya"
              title="Kenya"
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
                highlightArea('1456,3016,2400,3830');
              }}
              onMouseLeave={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
              }}
              onBlur={() => {
                setActiveCountry(content);
                setCountryName('Map of Africa');
                removeHighlight();
              }}
              tabIndex="0"
              alt="Namibia"
              title="Namibia"
              coords="1456,3016,2400,3830"
              shape="rect"
            />
          </map>
          <div id="highlight" style={highlightStyle} className={styles.highlight} />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
