import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import morocco from '../../../assets/images/Home/SectionThree/morocco.jpg';
import nigeria from '../../../assets/images/Home/SectionThree/nigeria.jpeg';
import kenya from '../../../assets/images/Home/SectionThree/kenya.jpeg';
import namibia from '../../../assets/images/Home/SectionThree/namibia.jpeg';
import styles from './SectionThree.module.css';
import content from '../../../data/countryContent';
import map from '../../../assets/images/Home/SectionThree/map.png';
import Cards from '../../../components/Cards/Cards';

const countries = [
  { name: 'Morocco', imageSrc: morocco },
  { name: 'Nigeria', imageSrc: nigeria },
  { name: 'Kenya', imageSrc: kenya },
  { name: 'Namibia', imageSrc: namibia },
];

function SectionThree() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>Choose a Country</h2>
      </div>

      <div className={styles.card_wrapper}>
        {countries.map(country => (
          <Cards
            key={country}
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

      <div className={styles.content_map_wrapper}>
        <div className={styles.content}>
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
          <img className={styles.map} src={map} alt="African Map" />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
