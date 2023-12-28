import { Link } from 'react-router-dom';
import CountryBanner from '../../../components/CountryBanner/CountryBanner';
import morocco from '../../../assets/images/Home/SectionThree/morocco.jpg';
import nigeria from '../../../assets/images/Home/SectionThree/nigeria.jpeg';
import kenya from '../../../assets/images/Home/SectionThree/kenya.jpeg';
import namibia from '../../../assets/images/Home/SectionThree/namibia.jpeg';
import Styles from './SectionThree.module.css';
import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import content from './countryContent';
import map from '../../../assets/images/Home/SectionThree/map.png';

const countries = [
  { name: 'Morocco', imageSrc: morocco },
  { name: 'Nigeria', imageSrc: nigeria },
  { name: 'Kenya', imageSrc: kenya },
  { name: 'Namibia', imageSrc: namibia },
];

function SectionThree() {
  return (
    <div className={Styles.container}>
      <div className={Styles.titleContainer}>
        <p className={Styles.title}>Choose a Country</p>
      </div>

      <div className={Styles.countriesContainer}>
        <div className={Styles.countries}>
          {countries.map(country => (
            <Link key={country} to={`/${country.name}`}>
              <CountryBanner countryName={country.name} countryImageSrc={country.imageSrc} />
            </Link>
          ))}
        </div>
      </div>
      <div className={Styles.horizontalLine}>
        <br />
      </div>

      <div className={Styles.contentAndMapContainer}>
        <div className={Styles.content}>
          {content.map(country => (
            <CountryDescription
              key={country.countryName}
              countryName={country.countryName}
              countryDesc={country.countryDesc}
              color={country.color}
            />
          ))}
        </div>
        <div>
          <img className={Styles.map} src={map} alt="African Map" />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
