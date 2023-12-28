import propTypes from 'prop-types';
import Styles from './CountryDescription.module.css';

function CountryDescription({ countryName, countryDesc, color }) {
  const countryNameStyles = { color, fontSize: '1.5rem', fontWeight: 900, fontStyle: 'bold' };
  const bulletStyles = {
    backgroundColor: color,
    width: '0.625rem',
    height: '1.9rem',
  };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <div style={bulletStyles} />
        <div className={Styles.title}>
          <p style={countryNameStyles}>{countryName}</p>
        </div>
      </div>
      <div className={Styles.description}>
        <p>{countryDesc}</p>
      </div>
    </div>
  );
}

CountryDescription.propTypes = {
  countryName: propTypes.string.isRequired,
  countryDesc: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export default CountryDescription;
