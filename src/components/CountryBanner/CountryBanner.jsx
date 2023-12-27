import propTypes from 'prop-types';
import styles from './CountryBanner.module.css';
import outwardArrow from '../../assets/arrow_outward.svg';

function Country({ countryName, countryImageSrc }) {
  return (
    <div>
      <div className={styles.countryImageNameContainer}>
        <img src={countryImageSrc} alt="country" />
        <div className={styles.textContainer}>
          <p className={styles.countryName}>{countryName}</p>
          <img src={outwardArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

Country.propTypes = {
  countryName: propTypes.string.isRequired,
  countryImageSrc: propTypes.string.isRequired,
};

export default Country;
